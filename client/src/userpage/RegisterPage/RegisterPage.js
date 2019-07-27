import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import Footer from '../../components/Footer/Footer';
import Register from '../../components/Register/Register';

class RegisterPage extends Component {
    render() {
        return (
            <div id="_wrapper" className="fix-100">
                <TopBar></TopBar>
                <TopHeader></TopHeader>
                <Register></Register>
                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(RegisterPage)