import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import './TopBar.css'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            admin: false,
            executive : false,
            communication : false
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

            if(decoded.roles === '1' || decoded.roles === '12'){
                this.setState({ executive : true});
            }

            if(decoded.roles === '2' || decoded.roles === '12' || decoded.roles === '02'){
                this.setState({ communication : true});
            }

            if(decoded.roles === '3'){
                this.setState({ admin : true});
            }
        }
    }

    render() {
        const { admin, executive, communication } = this.state
        const loggedIn = (
            <ul>
                <li className="dropdown-toggle" data-toggle="dropdown"><i>Xin chào, {this.state.username}</i> </li>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="true"><i className="fas fa-user"></i>&nbsp;Thông tin cá nhân</a>
                        {executive ? <a className="dropdown-item" href="true"><i className="fas fa-cogs"></i>&nbsp;Hệ thống quản lý</a> : ""}
                        {admin ? <Link className="dropdown-item" to="/"><i className="fas fa-cogs"></i>&nbsp;Hệ thống quản lý</Link> : ""}
                        {communication ? <a className="dropdown-item" href="true"><i className="fas fa-camera-retro"></i>&nbsp;Đăng bài truyền thông</a>:""}
                        <Link  className="dropdown-item" to="/login" onClick = {this._handleLogout}><i className="fas fa-sign-out-alt"></i>&nbsp;Đăng Xuất</Link>
                    </div>
            </ul>
        )

        const customer =(
            <ul>
                <li><Link to="register"><i className="fas fa-user-edit" />&nbsp;Đăng Ký</Link></li>
                <li><Link to="login"><i className="fas fa-sign-in-alt" />&nbsp;Đăng Nhập</Link></li>
            </ul>
        )

        return (
            <div id="_topBar" history = {this.props.history}>
                <div className="container">
                    <div className="row">
                    <div className="col-4 d-none d-sm-block marquee">
                        <marquee>Chào mừng bạn đến với website của Ban Mục Vụ Sinh Viên Đaminh</marquee>
                    </div>
                    <div className="col-xs-12 col-sm-8 register-login text-sm-right text-xs-center">
                        {this.state.username ===''?customer: loggedIn}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TopBar)