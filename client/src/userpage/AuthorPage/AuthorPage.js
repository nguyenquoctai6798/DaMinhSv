import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import FooterContact from '../../components/Footer/FooterContact';
import Footer from '../../components/Footer/Footer';
import Author from '../../components/Author/Author';

class AuthorPage extends Component {
    render() {
        return (
            <div id="_wrapper" className="fix-100">
                <TopBar></TopBar>
                <TopHeader></TopHeader>
                <Author></Author>
                <FooterContact></FooterContact>
                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(AuthorPage)