import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import jwt_decode from 'jwt-decode'

import './App.css';

/* component userpage----------------------------------- */
import Index from '../../userpage/Index/Index';
import IconScrollTop from '../IconScrollTop/IconScrollTop';
import Notifications from '../../userpage/Notifications/Notifications';
import Documents from '../../userpage/DocumentsPage/DocumentsPage';
import RegisterEvent from '../../userpage/RegisterEvent/RegisterEvent';
import Library from '../../userpage/LibraryPage/LibraryPage';
import Contact from '../../userpage/Contact/Contact';
import Login from '../../userpage/LoginPage/LoginPage';
import Register from '../../userpage/RegisterPage/RegisterPage';
import Author from '../../userpage/AuthorPage/AuthorPage';
import Page404 from '../../userpage/Page404/Page404';

/* component adminpage----------------------------------- */
import ListAllStudentPage from '../../adminpage/ListAllStudentPage/ListAllStudentPage';
import ListStudentEachHouse from '../../adminpage/ListStudentEachHousePage/ListStudentEachHousePage';
import ListOldMemberPage from '../../adminpage/ListOldMemberPage/ListOldMemberPage';
import ListStudentBySchoolPage from '../../adminpage/ListStudentBySchoolPage/ListStudentBySchoolPage';
import ListStudentByProvincePage from '../../adminpage/ListStudentByProvincePage/ListStudentByProvincePage';
import ListStudentByDiocesePage from '../../adminpage/ListStudentByDiocesePage/ListStudentByDiocesePage';

import DecentralizationPage from '../../adminpage/DecentralizationPage/DecentralizationPage';
import HousePage from '../../adminpage/HousePage/HousePage';
import AddExecutivePage from '../../adminpage/AddExecutivePage/AddExecutivePage';

import StatisticalSizePage from '../../adminpage/StatisticalSizePage/StatisticalSizePage';
import NotificationPage from '../../adminpage/NotificationPage/NotificationPage';

import InfoStudentDetailPage from '../../adminpage/InfoStudentDetailPage/InfoStudentDetailPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      eventRegister : false
    }
  }

  /* show button top when scroll > 150px and hide button when height < 50px   */
  scrollTopTop = () => {
    let _scrollTop = document.getElementById('_scrollTop');

    // when scroll => topHeader fixed on top
    window.addEventListener('scroll', function (e) {
      let windowPos = window.scrollY;
      let topHeader = this.document.getElementById('_topHeader')
      if (windowPos > 150) {
        topHeader.classList.add('sticky');
        _scrollTop.classList.add('sticky');
      } else if (windowPos < 50) {
        topHeader.classList.remove('sticky');
        _scrollTop.classList.remove('sticky');
      }
    });

    // click to top
    _scrollTop.addEventListener('click', () => {
      window.scroll(0, 0)
    })
  }

  componentWillMount() {
    if (localStorage.getItem('id_token')) {
      const token = localStorage.getItem('id_token');
      const decoded = jwt_decode(token);
      if (decoded.exp * 1000 < Date.now()) { // Checking if token is expired.
        localStorage.removeItem('id_token');
      } 
      if (decoded.roles === '0' || decoded.roles === '1' || decoded.roles === '3' || decoded.roles === '02' || decoded.roles === '12') {
        this.setState({ eventRegister : true  });
      }
      if(decoded.roles === '3'){
        this.setState({ admin : true});
      }
    }
  }

  componentDidMount(){
    if(this.state.admin === false) this.scrollTopTop();
  } 

  render() {
    return (
      <div className="wrapper-app">
        {this.state.admin ?
        <div className="w-100 h-100">
          <Switch>
            <Route exact path="/" component={ListAllStudentPage} />

            {/* ---- list ---- */}
            <Route exact path="/ListStudentEachHouse" component={ListStudentEachHouse} />
            <Route exact path="/ListOldMemberPage" component={ListOldMemberPage} />
            <Route exact path="/ListStudentBySchoolPage" component={ListStudentBySchoolPage} />
            <Route exact path="/ListStudentByProvincePage" component={ListStudentByProvincePage} />
            <Route exact path="/ListStudentByDiocesePage" component={ListStudentByDiocesePage} />

            {/* ---- another ---- */}
            <Route exact path="/DecentralizationPage" component={DecentralizationPage} />
            <Route exact path="/HousePage" component={HousePage} />
            <Route exact path="/AddExecutivePage" component={AddExecutivePage} />

            {/* ---- statistical ---- */}
            <Route exact path="/StatisticalSizePage" component={StatisticalSizePage} />

            <Route exact path="/InfoStudentDetailPage/:id" component={InfoStudentDetailPage} />

            {/* notification */}
            <Route exact path="/NotificationPage" component={NotificationPage} />

            <Route exact path="/index" component={Index} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/documents" component={Documents} />
            <Route exact path="/registerevent" component={this.state.eventRegister === false ? Page404:RegisterEvent} />
            <Route exact path="/library" component={Library} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/author" component={Author} />
              <Route exact path="/404" component={Page404} />
            <Route component={Page404} />
          </Switch>
            <IconScrollTop></IconScrollTop>
          </div> :
          <div className="w-100 h-100">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/index" component={Index} />
              <Route exact path="/notifications" component={Notifications} />
              <Route exact path="/documents" component={Documents} />
              <Route exact path="/registerevent" component={this.state.eventRegister === false ? Page404:RegisterEvent} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/author" component={Author} />
              <Route exact path="/404" component={Page404} />
              <Route component={Page404} />
            </Switch>
            <IconScrollTop></IconScrollTop>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(App);
