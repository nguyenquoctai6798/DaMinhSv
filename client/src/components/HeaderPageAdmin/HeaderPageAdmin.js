import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './HeaderPageAdmin.css'

class HeaderPageAdmin extends Component {

    _handleLogout = () => {
        localStorage.removeItem('id_token');
        this.setState({ username: '' });
        window.location = '/login'
        /* this.props.history.push(`/login`) */
    }

    render() {
        return (
            <header className="header">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-holder d-flex align-items-center justify-content-between">
                            <div className="navbar-header">
                                <a id="toggle-btn" href="true" className="menu-btn">
                                    <i className="fas fa-bars" />
                                </a>
                                <a href="index.html" className="navbar-brand">
                                    <div className="brand-text d-md-inline-block">
                                        <span>Lưu xá sinh viên </span>
                                        <strong className="text-warning">ĐAMINH</strong>
                                    </div>
                                </a>
                            </div>
                            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                                {/* Log out*/}
                                <li className="nav-item" onClick={this._handleLogout} style={{ padding: "0 10px" }}><Link to="true"><span className="d-sm-inline-block btnLogout">Logout</span>&nbsp;<i className="fas fa-sign-out-alt"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderPageAdmin)