import React, { Component } from 'react';
import BlockFood from './BlockFood/BlockFood';
import ConutTime from './ConutTime';
import axios from "axios";
import jwt_decode from 'jwt-decode'

const linkMembers = `http://localhost:8000/members/`;

class EatRice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeAm: this.props.timeAm,
            timePm: this.props.timePm,
            isExists: null,
            idaccount: '',
            firstname:'',
            noon: false,
            afternoon: false,
            check: false,
            date: false,
            day:this.props.day< 10 ? "0" + this.props.day : this.props.day,
            month:this.props.month< 10 ? "0" + this.props.month :this.props.month,
            year:this.props.year
        }
        this.eventCheckRegister = this.eventCheckRegister.bind(this)
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.timeAm!==prevState.timeAm){
    //         return{
    //             timeAm:nextProps.timeAm,
    //             timePm:nextProps.timePm,
    //             day:nextProps.day< 10 ? "0" + nextProps.day : nextProps.day,
    //             month:nextProps.month< 10 ? "0" + nextProps.month :nextProps.month,
    //             year:nextProps.year,
    //         }
    //     }
    //     return null;
    // }
   

    eventCheckRegister = async () => {
        if (localStorage.getItem('id_token')) {
            // get date, month, year
            // check dang ky khong an com chua
            const token = localStorage.getItem('id_token');
            const decoded = jwt_decode(token);
          await  this.setState({
                idaccount: decoded.username,
                firstname:decoded.firstname,
                date:this.state.year+"-"+this.state.month+"-"+this.state.day
            });
            console.log("idaccount:"+ this.state.idaccount);
            console.log("date:"+this.state.date);
            const link = `${linkMembers}CheckRegisterEatRice`
            await axios
                .post(link, { idaccount: this.state.idaccount, date: this.state.date})
                .then(async (res) => {
                    if(res.data.isExists){
                        if(res.data.noon === 1 && res.data.afternoon === 0){
                            this.setState({ noon : true , afternoon: false  });
                        }else  if(res.data.noon === 0 && res.data.afternoon === 1){
                            this.setState({ noon : false , afternoon: true  });
                        }else if(res.data.noon === 1 && res.data.afternoon === 1){
                            this.setState({ noon : true , afternoon: true  });
                        }
                    }
                    await this.setState({ check : true })
                }).catch(err=>{
                    console.log(err)
                })
        }
    }

    async componentDidMount() {
        // await this.getTimeAPI()
        await this.eventCheckRegister()
    }

    render() {
        return (
            <div id="_comTre" className="tab-content">
                <div className="w-register-rice">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="b-register-rice">
                                    <p className="title-register-event-content">
                                        bữa trưa
                                </p> {/* title-register-event-content */}
                                    <BlockFood></BlockFood>
                                    {this.state.check ? <ConutTime secondsProp={this.state.timeAm} halfaday='N' isRegister={this.state.noon} idaccount={this.state.idaccount} date={this.state.date} firstname={this.state.firstname}></ConutTime> : ""}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="b-register-rice">
                                    <p className="title-register-event-content">
                                        bữa chiều
                                    </p> {/* title-register-event-content */}
                                    <BlockFood></BlockFood>
                                    {this.state.check ? <ConutTime secondsProp={this.state.timePm} halfaday='A' isRegister={this.state.afternoon} idaccount={this.state.idaccount} date={this.state.date} firstname={this.state.firstname}></ConutTime> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* w-register-rice */}
            </div>
        );
    }
}

export default EatRice;