import React, { Component } from 'react';
import '../../components/SidebarAdmin/SidebarAdmin.css'
import {withRouter} from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import HeaderPageAdmin from '../../components/HeaderPageAdmin/HeaderPageAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import ListStudentByProvince from '../../components/ListStudentByProvince/ListStudentByProvince';

class ListStudentByProvincePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="_admin">
                <SidebarAdmin active="provincecity"></SidebarAdmin>
                <div className="page">
                    <HeaderPageAdmin></HeaderPageAdmin>
                    <ListStudentByProvince></ListStudentByProvince>
                    <FooterAdmin></FooterAdmin>
                </div>
            </div>

        );
    }
}

export default withRouter(ListStudentByProvincePage)