import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import SlideAndNews from '../../components/SildeAndNews/SlideAndNews';
import Introduce from '../../components/Introduce/Introduce';
import MeanLogo from '../../components/MeanLogo/MeanLogo';
import ExecutiveBoard from '../../components/ExecutiveBoard/ExecutiveBoard';
import OrganizationChat from '../../components/OrganizationChart/OrganizationChat';
import ListHouse from '../../components/ListHouse/ListHouse';
import FooterContact from '../../components/Footer/FooterContact';
import Footer from '../../components/Footer/Footer';


class Index extends Component {
    render() {
        return (
            <div id="_wrapper">
                <TopBar></TopBar>
                <TopHeader></TopHeader>
                <SlideAndNews></SlideAndNews>
                <Introduce></Introduce>
                <MeanLogo></MeanLogo>
                <ExecutiveBoard></ExecutiveBoard>
                <OrganizationChat></OrganizationChat>
                <ListHouse></ListHouse>
                <FooterContact></FooterContact>
                <Footer></Footer>
            </div>
        );
    }
}

export default Index;