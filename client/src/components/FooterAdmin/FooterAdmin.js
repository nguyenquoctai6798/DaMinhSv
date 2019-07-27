import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './FooterAdmin.css';

class FooterAdmin extends Component {
    render() {
        return (
            <footer className="main-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <p> Copyright <i className="fa fa-copyright" /> 2019. Thiết kế và duy trì bởi <Link to="author" className="author-link">Nhóm Sinh Viên Đaminh</Link></p>
                    </div>
                    <div className="col-sm-6 text-right">

                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default withRouter(FooterAdmin)