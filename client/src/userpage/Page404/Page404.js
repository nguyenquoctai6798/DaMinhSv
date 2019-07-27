import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Page404.css'

class Page404 extends Component {
    render() {
        return (
            <div className="bk-green">
                <div className="wrapper-info-404">
                    <div className="img-logo">
                        <Link to="/"><img src="../lib/images/logo-04.png" alt="person" className="img-fluid rounded-circle" /></Link> 
                    </div>
                    <p>Trang không tồn tại, vui lòng bấm vào logo để quay về trang chủ. <br/>Xin cám ơn</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Page404);