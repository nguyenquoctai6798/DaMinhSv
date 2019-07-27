import React, { Component } from 'react';
import './Login.css'
import {Link, withRouter} from 'react-router-dom';

import AuthHelperMethods from '../AuthHelperMethods';

class Login extends Component {
    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();

    constructor(props) {
        super(props);
        this.state = {
            forgotPassword: false,
            emailForgot: '',
            username: '',
            password: '',
            errorLogin:'',
            usernameE:'',
            passwordE:'',
        }

        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        /*  this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); */
    }

    // switch state forgotpassword is true or false
    changeStatusForget = () => {
        let status = !this.state.forgotPassword
        this.setState({ forgotPassword: status, emailForgot: '' });
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        
        e.preventDefault();
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return this.setState({ errorLogin : 'Tên đăng nhập hoặc mật khẩu không chính xác' });
                }
                /* this.props.history.push('/'); */
                window.location = '/'
            })
            .catch(err => {
                this.setState({ errorLogin : 'Tên đăng nhập hoặc mật khẩu không chính xác' });
            })
    }
    
    componentWillMount() {
        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    handleForgotPassword(e){
        e.preventDefault();

    }

    render() {
        const login = (<div className="form-login">
            <div className="row">
                <div className="col-4 logo-login">
                    <img src="../lib/images/logo-04.png" alt="" className="img-fluid" />
                </div>
                <div className="col-8 w-login">
                    <form noValidate onSubmit={this.handleFormSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text icon-login"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" id="_inputUsername" className="form-control" placeholder="Tên đăng nhập" name="username" value={this.state.username}  onChange={this._handleChange}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text icon-login"><i className="fas fa-lock"></i></span>
                            </div>
                            <input type="password" id="_inputPass" className="form-control"  placeholder="Mật khẩu" name="password" value={this.state.password}  onChange={this._handleChange}/>
                        </div>
                        {this.state.errorLogin === ''? '' : <span><small><i style={{color:"gold"}}>{this.state.errorLogin}</i></small></span>}
                        <div className="container-fluid w-container">
                            <div className="row text-right">
                                <div className="col-8">
                                    <button className="btn btn-light btn-block btn-login"><i className="fas fa-sign-in-alt"></i>&nbsp;Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 text-center">
                            <small onClick={this.changeStatusForget}>Quên mật khẩu ?</small>
                        </div>
                        <div className="col-xs-12 col-sm-6 text-center">
                            <Link to="register"><small>Đăng ký tài khoản</small></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>)

        const forgot = (<div className="form-login form-forgot-password">
            <div className="row">
                <div className="col-4 logo-login">
                    <img src="../lib/images/logo-04.png" alt="" className="img-fluid" />
                </div>
                <div className="col-8 w-login">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text icon-login"><i className="fas fa-at" /></span>
                        </div>
                        <input type="text" id="_inputEmail" className="form-control" placeholder="Địa chỉ email" name="emailForgot" onChange={this._handleChange} value={this.state.emailForgot}/>
                    </div>
                    <div className="container-fluid w-container">
                        <div className="row text-right">
                            <div className="col-8">
                                <button type="button" className="btn btn-light btn-block btn-login" data-toggle="modal" data-target="#_mbForgotPass"><i className="fas fa-sign-in-alt" />&nbsp;Gửi yêu cầu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="_mbForgotPass">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            Hệ thống đã gửi thông báo về email <b>{this.state.emailForgot}</b>. <br />
                            Vui lòng truy cập vào email để cập nhật lại mật khẩu <br />
                            Xin cám ơn
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success btn-sm" data-dismiss="modal" onClick={this.changeStatusForget}>Quay lại</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

        return (
            <div id="_login"  history = {this.props.history}>
                {this.state.forgotPassword ? forgot : login}
            </div>
        );
    }
}

export default withRouter(Login);