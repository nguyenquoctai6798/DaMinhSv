import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const linkGoHome = 'http://localhost:8000/gohomeovernight/';

class ListGoHomeAndOverNight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ListGoHomeOverNight: [],
            count: 0
        }
    }

    getAllGoHomeOverNightByIdHouse = async (id) => {
        const link = `${linkGoHome}getallgohomeovernightbyidhouse/${id}`
        await axios.get(link).then(req => {
            this.setState({ ListGoHomeOverNight: req.data });
            this.countToDay()
        })
    }

    componentDidMount(){
        const token = localStorage.getItem('id_token');
        const decoded = jwt_decode(token);
        let idhouse = decoded.username + ""
        idhouse = parseInt(idhouse.substr(0,1))
        this.getAllGoHomeOverNightByIdHouse(idhouse)
    }

    countToDay = async () => {
        let count = 0
        this.state.ListGoHomeOverNight.map((item, key) => {
            if (item.dateout === this.toDay()) {
                count++
            }
        })
        this.setState({ count : count  });
    }

    toDay = () => {
        let year =this.props.year;
        let month = this.props.month
        month = month < 10 ? "0" + month : month
        let day = this.props.day;
        day = day < 10 ? "0" + day : day
        return year + "-" + month + "-" + day
    }

    // map option GoHomeOverNight
    renderGoHomeOverNight = () => {


        return this.state.ListGoHomeOverNight.map((item, key) => (
            <tr className={item.dateout === this.toDay() ? 'today' : ''} key={key}>
                <td>{++key}</td>
                <td>{item.dateout}</td>
                <td>{item.dateout}</td>
                <td>{item.AccountIdaccount}</td>
                <td>{item.type === 0 ? "Về quê" : "Qua đêm"}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div id="_danhSachVeQue" className="tab-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="title-register-event-content">
                                Danh sách về quê/ qua đêm
                        </p> {/* title-register-event-content */}
                            <div className="b-date-dont-eat-rice">
                                <ul>
                                    <li>
                                        <small>Tổng hôm nay : </small> <span className="date-day b-date"> {this.state.count < 10 ? "0" + this.state.count : this.state.count}</span>
                                    </li>
                                </ul>
                            </div> {/* b-date-dont-eat-rice */}
                            <div className="table-responsive text-center">
                                <table className="table table-bordered">
                                    <thead className="thead-success">
                                        <tr>
                                            <th width="3%">STT</th>
                                            <th width="15%">Ngày về</th>
                                            <th width="15%">Ngày xuống</th>
                                            <th width="40%">Họ Tên</th>
                                            <th>Ghi chú</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGoHomeOverNight()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListGoHomeAndOverNight;