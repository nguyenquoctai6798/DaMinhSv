import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class FooterFixedBottom extends Component {
    render() {
        return (
            <div id="_footer" className="fix-bottom">
                Copyright <i className="fa fa-copyright"></i> 2019. Thiết kế và duy trì bởi <Link to="author" className="author-link">Nhóm Sinh Viên Đaminh</Link>
            </div>
        );
    }
}

export default withRouter(FooterFixedBottom)