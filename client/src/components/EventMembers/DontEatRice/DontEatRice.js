import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import ButtonRegister from './ButtonRegister';
const linkMembers = 'http://localhost:8000/members/'

class DontEatRice extends Component {
    constructor(props){
        super(props)
        this.state={
            day:null,
            month:null,
            year:null,
            date: null,
            isExists: null,
            idaccount: '',
            firstname:'',
            noon: false,
            afternoon: false,
            check: false,
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.day!==prevState.day || nextProps.month!==prevState.month||nextProps.year!==prevState.year){
            return{
                day:nextProps.day+1< 10 ? "0" + (nextProps.day+1) : nextProps.day+1,
                month:nextProps.month< 10 ? "0" + nextProps.month :nextProps.month,
                year:nextProps.year
            }
        }
    }

   

    async eventCheckDontRegister(){
        if(localStorage.getItem('id_token')){
            // get date, month, year
            // check dang ky khong an com chua
            const token =  localStorage.getItem('id_token');
            const decoded =  jwt_decode(token);
            console.log(decoded);
            await this.setState({ 
                firstname: decoded.firstname,
                idaccount : decoded.username
               
            });
            const link =  `${linkMembers}CheckRegisterDontEatRice`
            await axios  
            .post(link, { idaccount: this.state.idaccount, date: this.state.year + "-" + this.state.month+"-"+this.state.day})
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
        await this.eventCheckDontRegister()
    }
    render() {
        console.log(this.state.year + "-"+this.state.month+"-"+this.state.day)
        return (
            <div id="_khongAn" className="tab-content">
                <div className="dont-eat-rice">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <small>Không ăn cơm bạn phải đăng ký trước 1 ngày. Hạn chót là 23:59:59 ngày hôm trước.</small>
                            </div>
                            <div className="col-12">
                                <small>Ví dụ, ngày mai (22/06/2019) bạn không muốn ăn cơm trưa, bạn phải đăng ký vào ngày hôm nay (21/06/2019)</small>
                            </div>
                            <div className="col-12">
                                <small>Hoặc bạn muốn hủy cũng phải hủy trước 1 ngày. Xin cám ơn</small>
                            </div>
                            <div className="col-12">
                                <hr />
                                <span>Bạn đang đăng ký/ hủy đăng ký cho ngày</span>
                                <br />
                                <div className="b-date-dont-eat-rice">
                                    <ul>
                                        <li className="date-day b-date">{this.state.day}</li>
                                        <li className="slash">/</li>
                                        <li className="date-month b-date">{this.state.month}</li>
                                        <li className="slash">/</li>
                                        <li className="date-year b-date">{this.state.year}</li>
                                    </ul>
                                </div> {/* b-date-dont-eat-rice */}
                            </div>
                            {this.state.check ? <ButtonRegister halfaday='N' isRegister={this.state.noon} idaccount={this.state.idaccount} date={this.state.year + "-"+this.state.month+"-"+this.state.day}  firstname={this.state.firstname}>bữa trưa</ButtonRegister> : ""}
                            {this.state.check ? <ButtonRegister halfaday='A' isRegister={this.state.afternoon} idaccount={this.state.idaccount}  date={this.state.year + "-"+this.state.month+"-"+this.state.day} firstname={this.state.firstname}>bữa chiều</ButtonRegister> : ""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DontEatRice;