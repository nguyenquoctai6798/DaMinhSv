import React, { Component } from 'react';
import axios from 'axios';
const linkMembers = 'http://localhost:8000/members/'

class ConutTime extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: parseInt(this.props.secondsProp),
            idaccount: this.props.idaccount,
            firstname:this.props.firstname,
            halfaday: this.props.halfaday,
            isRegister: this.props.isRegister,
            date: this.props.date,
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.handleRegister = this.handleRegister.bind(this)
        this.handleCancelRegister = this.handleCancelRegister.bind(this)
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(parseInt(nextProps.secondsProp) !==prevState.seconds){
           
    //         return{
    //             seconds:parseInt(nextProps.secondsProp),
    //             date:nextProps.date
    //         }
    //     }

    //     console.log("Đã chạy vào get");
    //     return null
    // }


    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    startTimer() {
        console.log("Đã vào startTImer")
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
        console.log("Đã chạy start timer");
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }


    handleRegister = async (e) => {
        e.preventDefault();
        const link = `${linkMembers}RegisterEatRice`
        if (this.state.halfaday === "N") {
            axios
            .post(link, { idaccount: this.state.idaccount, noon: 1, date: this.state.date,firstname:this.state.firstname})
            .then( async(res) => {
                await this.setState({ isRegister : true });
            })
        }
        else {
            axios
            .post(link, { idaccount: this.state.idaccount, afternoon: 1, date: this.state.date,firstname:this.state.firstname})
            .then( async(res) => {
                await this.setState({ isRegister : true });
            })
        }
    }

    handleCancelRegister = async (e) => {
        e.preventDefault();
        const link = `${linkMembers}CancelRegisterEatRice`
        if (this.state.halfaday === "N") {
            axios
            .post(link, { idaccount: this.state.idaccount, noon: 0, date: this.state.date})
            .then( async(res) => {
                await this.setState({ isRegister : false });
            })
        }else{
            axios
            .post(link, { idaccount: this.state.idaccount, afternoon: 0, date: this.state.date})
            .then( async(res) => {
                await this.setState({ isRegister : false });
            })
        }
    }


    componentDidMount() {
       
        this._isMounted = true;
        if (this._isMounted) {
           this.startTimer();
            let timeLeftVar = this.secondsToTime(this.state.seconds);
            this.setState({ time: timeLeftVar });
           
        }
        
    }
  
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        console.log("Đã render");
        const btnRegister = (
            <button className="btn btn-block btn-success btn-register-rice" id="_btnRegisterRice" onClick={this.handleRegister}>
                <i className="fas fa-edit"></i>&nbsp;Đăng ký
            </button>
        )

        const btnCancel = (
            <button className="btn btn-block btn-danger btn-cancle-register-rice" id="_btnCancleRegisterRice" onClick={this.handleCancelRegister}>
                <i className="fas fa-eraser" />&nbsp;Hủy đăng ký
            </button>
        )
        return (

            <div>
                <div className="b-countdown-time">
                    {this.state.seconds > 0 ?
                        <ul>
                            <li className="countdown-hour b-time">{this.state.time.h < 10 ? "0" + this.state.time.h : this.state.time.h}</li>
                            <li className="colon">:</li>
                            <li className="countdown-minute b-time">{this.state.time.m < 10 ? "0" + this.state.time.m : this.state.time.m}</li>
                            <li className="colon">:</li>
                            <li className="countdown-second b-time">{this.state.time.s < 10 ? "0" + this.state.time.s : this.state.time.s}</li>
                        </ul>
                        : <p className="timeOut">Hết Thời Gian</p>}
                </div> {/* b-countdown-time */}
                <div className="b-book">
                    {this.state.seconds === 0 ? "" : this.state.isRegister ? btnCancel : btnRegister}
                </div>
            </div>
        );
    }
}

export default ConutTime;