import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import FooterContact from '../../components/Footer/FooterContact';
import Footer from '../../components/Footer/Footer';
import Notification from '../../components/Notification/Notification';

class Notifications extends Component {
    render() {
        return (
            <div id="_wrapper" className="fix-100">
                <TopBar></TopBar>
                <TopHeader></TopHeader>
                <Notification></Notification>
                <FooterContact></FooterContact>
                <Footer></Footer>
            </div>
        );
    }
}

export default Notifications;