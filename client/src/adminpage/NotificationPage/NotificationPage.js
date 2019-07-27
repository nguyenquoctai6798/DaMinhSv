import React, { Component } from 'react';
import '../../components/SidebarAdmin/SidebarAdmin.css'
import {withRouter} from 'react-router-dom';
import SidebarAdmin from '../../components/SidebarAdmin/SidebarAdmin';
import HeaderPageAdmin from '../../components/HeaderPageAdmin/HeaderPageAdmin';
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin';
import ListNotifications from '../../components/Notification/ListNotifications/ListNotifications';



class NotificationPage extends Component {
    render() {
        return (
            <div id="_admin">
                <SidebarAdmin active="size"></SidebarAdmin>
                <div className="page">
                    <HeaderPageAdmin></HeaderPageAdmin>
                    <ListNotifications></ListNotifications>
                    <FooterAdmin></FooterAdmin>
                </div>
            </div>
        );
    }
}

export default withRouter(NotificationPage)