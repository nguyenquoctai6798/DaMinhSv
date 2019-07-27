import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import FooterFixedBottom from '../../components/Footer/FooterFixedBottom';
import Login from '../../components/Login/Login';

class LoginPage extends Component {
    render() {
        return (
            <div id="_wrapper" className="fix-100">
                <TopBar></TopBar>
                <TopHeader></TopHeader>
                <Login></Login>
                <FooterFixedBottom></FooterFixedBottom>
            </div>
        );
    }
}

export default LoginPage;