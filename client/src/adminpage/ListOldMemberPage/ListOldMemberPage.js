import React, { Component } from 'react';
import '../../components/SidebarAdmin/SidebarAdmin.css'
import {withRouter} from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import HeaderPageAdmin from '../../components/HeaderPageAdmin/HeaderPageAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import ListOldMember from '../../components/ListOldMember/ListOldMember';

class ListAllStudentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="_admin">
                <SidebarAdmin active="oldmember"></SidebarAdmin>
                <div className="page">
                    <HeaderPageAdmin></HeaderPageAdmin>
                    <ListOldMember></ListOldMember>
                    <FooterAdmin></FooterAdmin>
                </div>
            </div>

        );
    }
}

export default withRouter(ListAllStudentPage)