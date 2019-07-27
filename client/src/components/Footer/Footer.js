import React, { Component } from 'react';
import './Footer.css'
import {Link, withRouter} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div id="_footer">
                Copyright <i className="fa fa-copyright" /> 2019. Thiết kế và duy trì bởi <Link to="author" className="author-link">Nhóm Sinh Viên Đaminh</Link>
            </div>
        );
    }
}

export default withRouter(Footer);