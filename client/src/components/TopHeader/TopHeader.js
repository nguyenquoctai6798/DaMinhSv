import React, { Component } from 'react';
import './TopHeader.css'
import { Link, withRouter } from 'react-router-dom';
import MenuSub from '../MenuSub/MenuSub';
import jwt_decode from 'jwt-decode'

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            eventRegister: false
        }
    }
    showMenuSub = () => {
        let _menuSub = document.getElementById('_menuSub');
        let _showMenuSub = document.getElementById('_showMenuSub');
        let _bkBlack = document.getElementById('_bkBlack');
        let _btnCloseMenuSub = document.getElementById('_btnCloseMenuSub');
        _menuSub.addEventListener('click', () => {
            _showMenuSub.classList.add('show');
            _bkBlack.classList.add('show');
            _btnCloseMenuSub.classList.add('show');
        })

        _bkBlack.addEventListener('click', () => {
            _showMenuSub.classList.remove('show');
            _bkBlack.classList.remove('show');
            _btnCloseMenuSub.classList.remove('show');
        })

        _btnCloseMenuSub.addEventListener('click', () => {
            _showMenuSub.classList.remove('show');
            _bkBlack.classList.remove('show');
            _btnCloseMenuSub.classList.remove('show');
        })
    }

    componentWillMount() {
        if (localStorage.getItem('id_token')) {
            const token = localStorage.getItem('id_token');
            const decoded = jwt_decode(token);
            if (decoded.roles === '0' || decoded.roles === '1' || decoded.roles === '3' || decoded.roles === '02' || decoded.roles === '12') {
                this.setState({ eventRegister: true });
            }
        }
    }

    componentDidMount() {
        this.showMenuSub();
    }

    render() {
        return (
            <div id="_topHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-lg-5 title-top-header text-xs-center text-lg-left">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-2 wrapper-logo-top-header">
                                        <Link to=""><img src="../lib/images/logo-04.png" alt="" className="img-fluid" /></Link>
                                    </div>
                                    <div className="col-10 wrapper-title-top-header">
                                        <p>TỈNH DÒNG ĐAMINH VIỆT NAM</p>
                                        <h6>BAN MỤC VỤ SINH VIÊN ĐAMINH</h6>
                                        <small>44 Tú Xương, phường 7, quận 3, Tp.HCM</small>
                                    </div>
                                </div>
                            </div>
                        </div> {/* title-top-header */}
                        <div className="col-7 d-none d-lg-block menu-main">
                            <ul>
                                <li><Link to="">Trang Chủ</Link></li>
                                <li><Link to="notifications">Thông Báo</Link></li>
                                <li><Link to="documents">Tài Liệu</Link></li>
                                {this.state.eventRegister ? <li><Link to="registerevent">Sự kiện</Link></li> : ""}
                                <li><Link to="library">Thư viện</Link></li>
                                <li><Link to="contact">Liên hệ</Link></li>
                            </ul>
                        </div> {/* menu-main */}
                        <div id="_menuSub" className="col-2 d-lg-none menu-sub">
                            <i className="fas fa-bars" />
                        </div> {/* menu-sub */}
                        <MenuSub></MenuSub>
                        <div id="_bkBlack"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TopHeader)