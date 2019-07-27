import React, { Component } from 'react';
import axios from 'axios';
const linkMembers = 'http://localhost:8000/members/'

class ButtonRegister extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            idaccount: this.props.idaccount,
            firstname:this.props.firstname,
            halfaday: this.props.halfaday,
            isRegister: this.props.isRegister,
            date: this.props.date,
        };
        this.handleRegister = this.handleRegister.bind(this)
        this.handleCancelRegister = this.handleCancelRegister.bind(this)
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const link = `${linkMembers}RegisterDontEatRice`
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
        const link = `${linkMembers}CancelRegisterDontEatRice`
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
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        console.log(this.state.date)
        console.log(this.props.date)
        const btnRegister = (
            <button className="btn btn-block btn-success btn-register-rice"onClick={this.handleRegister}>
                <i className="fas fa-edit"></i>&nbsp;Đăng ký
            </button>
        )

        const btnCancel = (
            <button className="btn btn-block btn-danger btn-cancle-register-rice" onClick={this.handleCancelRegister}>
                <i className="fas fa-eraser" />&nbsp;Hủy đăng ký
            </button>
        )
        return (

            <div className="col-6 btn-dont-eat" id="_dontEatLunch">
                <p className="title-register-event-content">
                    {this.props.children}
                </p> {/* title-register-event-content */}
                {!this.state.isRegister ? btnRegister : btnCancel}
            </div>
        );
    }
}

export default ButtonRegister;