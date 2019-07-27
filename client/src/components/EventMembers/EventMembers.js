import React, { Component } from 'react';
import './EventMember.css'
import TitleShared from '../TitleShared/TitleShared';
import EatRice from './EatRice/EatRice';
import DontEatRice from './DontEatRice/DontEatRice';
import ListEatAndDontEat from './ListEatAndDontEat/ListEatAndDontEat';
import GoHome from './GoHome/GoHome';
import ListGoHomeAndOverNight from './ListGoHomeAndOverNight/ListGoHomeAndOverNight';
import ModalLoading from '../ModalLoading/ModalLoading';
const axios = require("axios");
const linkMembers = 'http://localhost:8000/members/'
class EventMembers extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = { 
            showModalLoading: true,
            check: false,
            timeAm:false,
            timePm:false,
            day:false,
            month:false,
            year:false
        }

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }
    getTimeAPI = async () => {
        console.log("goi get api")
        const link = `${linkMembers}TimeMembers`
        await  axios
        .post(link)
        .then(res=>{
            this.setState({
                timeAm:res.data.time11,
                timePm:res.data.time18,
                date:res.data.date,
                day:res.data.day,
                month:res.data.month,
                year:res.data.year,
                check: true
            });
        });
    }

    onChangeEvent= async (e)=>{
        let title = e.target.value;
        this.openTabEvent(title);
    }

    openTabEvent = async (title) =>{
        let i;
        let tabContent;
        let tabLinks;
        
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        
        title = title !== '' ? title : "0";
        document.getElementById(title).style.display = "block";

        // add class active
        let btn = "_btn"+title;
        document.getElementById(btn).classList.add('active');
        /* await this.setState({ check : false }); */
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.check !== nextState.check){
            return {
                check: nextState.check
            }
        }
        else  return false
    }

    async componentDidMount(){
        await this.getTimeAPI();
        await this.openTabEvent('_veQue');
    }

    render() {
        console.log("goi render")
        return (
            <div id="_registerEvent">
                {!this.state.check ? <ModalLoading showModalLoading={this.state.showModalLoading}></ModalLoading> : ""}
                <TitleShared title="đăng ký các sự kiện" color="green"></TitleShared>
                <div className="content-register-event">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-button-register-event">
                                    <button className="tab-link" onClick={this.openTabEvent.bind(this, '_comTre')} id="_btn_comTre">Cơm trễ</button>
                                    <button className="tab-link" onClick={this.openTabEvent.bind(this, '_khongAn')} id="_btn_khongAn">Không ăn cơm</button>
                                    <button className="tab-link" onClick={this.openTabEvent.bind(this, '_danhSachComTre')} id="_btn_danhSachComTre">Danh sách cơm trễ và không ăn</button>
                                    <button className="tab-link" onClick={this.openTabEvent.bind(this, '_veQue')} id="_btn_veQue">Về quê / qua đêm</button>
                                    <button className="tab-link" onClick={this.openTabEvent.bind(this, '_danhSachVeQue')} id="_btn_danhSachVeQue">Danh sách về quê / qua đêm</button>
                                </div> {/* tab-button-register-event */}
                                <div className="tab-select-register-event">
                                    <div className="form-group">
                                        <select className="form-control form-control-sm" id="_selectTab" onChange={this.onChangeEvent}>
                                            <optgroup label="Đăng ký">
                                                <option className="tab-links" value="_comTre">Cơm trễ</option>
                                                <option className="tab-links" value="_khongAn">Không ăn cơm</option>
                                                <option className="tab-links" value="_veQue">Về quê / Qua đêm</option>
                                            </optgroup>
                                            <optgroup label="Danh sách">
                                                <option className="tab-links" value="_danhSachComTre">Danh sách cơm trễ và không ăn</option>
                                                <option className="tab-links" value="_danhSachVeQue">Danh sách về quê / qua đêm</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                {this.state.check ?<EatRice day={this.state.day} month={this.state.month} year={this.state.year} timeAm={this.state.timeAm} timePm ={this.state.timePm}></EatRice>: ""}
                                {this.state.check ? <DontEatRice day={this.state.day} month={this.state.month} year={this.state.year}></DontEatRice> : ""}
                                {this.state.check ? <ListEatAndDontEat day={this.state.day} month={this.state.month} year={this.state.year}></ListEatAndDontEat>: ""}
                                <GoHome></GoHome>
                                <ListGoHomeAndOverNight day={this.state.day} month={this.state.month} year={this.state.year}></ListGoHomeAndOverNight>
                            </div>
                        </div>
                    </div>
                </div> {/* content-register-event */}
            </div> 
        );
    }
}

export default EventMembers;