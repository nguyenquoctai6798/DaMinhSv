import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import './MenuSub.css'
import LiMenuSub from './LiMenuSub';

class MenuSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            eventRegister : false
        }
        this._handleLogout = this._handleLogout.bind(this)
    }

    _handleLogout = () => {
        localStorage.removeItem('id_token');
        this.setState({ username: '' });
        this.props.history.push(`/login`)
    }
    
    componentWillMount(){
        if(localStorage.getItem('id_token')){
            const token = localStorage.getItem('id_token');
            const decoded = jwt_decode(token);
            this.setState({ username : decoded.firstname });
            if (decoded.roles === '0' || decoded.roles === '1' || decoded.roles === '3' || decoded.roles === '02' || decoded.roles === '12') {
                this.setState({eventRegister : true });
            }
        }
    }

    render() {
        const loggedIn = (
            <ul className="action-user">
                <li>
                    <i>Xin chào, {this.state.username}</i> 
                </li>
                <li onClick = {this._handleLogout}><i className="fas fa-sign-in-alt" />&nbsp;Đăng Xuất</li>
            </ul>
        )

        const customer =(
            <ul className="action-user">
                <li>
                    <Link to="register"><i className="fas fa-user-edit" />&nbsp;Đăng Ký</Link>
                </li>
                <li><Link to="login"><i className="fas fa-sign-in-alt" />&nbsp;Đăng Nhập</Link></li>
                
            </ul>
        )
        return (
            <div id="_showMenuSub">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h6><b>BAN MỤC VỤ SINH VIÊN ĐAMINH</b></h6>
                            <hr />
                        </div>
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm kiếm ..." />
                                <div className="input-group-append-sm">
                                    <button className="btn btn-success" type="submit"><i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 w-col">
                            {this.state.username ===''?customer: loggedIn}  
                        </div>
                        <div className="col-12 w-col">
                            <ul className="menu">
                                <LiMenuSub link="" icon="fas fa-home">Trang Chủ</LiMenuSub>
                                <LiMenuSub link="notifications" icon="fas fa-bell">Thông Báo</LiMenuSub>
                                <LiMenuSub link="documents" icon="fas fa-book">Tài Liệu</LiMenuSub>
                                { this.state.eventRegister === true ? <LiMenuSub link="registerevent" icon="fas fa-phone-volume">Sự kiện</LiMenuSub> : ""}
                                <LiMenuSub link="library" icon="fas fa-images"> Thư Viện</LiMenuSub>
                                <LiMenuSub link="contact" icon="fas fa-phone-volume">Liên Hệ</LiMenuSub>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="_btnCloseMenuSub">
                    <i className="fas fa-times" />
                </div>
            </div>
        );
    }
}

export default withRouter(MenuSub)