import React, { Component } from 'react';
import '../../components/SidebarAdmin/SidebarAdmin.css'
import {withRouter} from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import HeaderPageAdmin from '../../components/HeaderPageAdmin/HeaderPageAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import Decentralization from '../../components/Decentralization/Decentralization';


class DecentralizationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="_admin">
                <SidebarAdmin active="decentralization"></SidebarAdmin>
                <div className="page">
                    <HeaderPageAdmin></HeaderPageAdmin>
                    <Decentralization></Decentralization>
                    <FooterAdmin></FooterAdmin>
                </div>
            </div>

        );
    }
}

export default withRouter(DecentralizationPage)