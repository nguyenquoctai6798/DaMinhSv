import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import FooterContact from '../../components/Footer/FooterContact';
import Footer from '../../components/Footer/Footer';
import EventMembers from '../../components/EventMembers/EventMembers';

class RegisterEvent extends Component {
    render() {
        return (
            <div id="_wrapper" className="fix-100">
                <TopBar></TopBar>
                <TopHeader></TopHeader>
                <EventMembers></EventMembers>
                <FooterContact></FooterContact>
                <Footer></Footer>
            </div>
        );
    }
}

export default RegisterEvent;