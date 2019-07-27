import React, { Component } from 'react';
import './FooterContact.css'

class FooterContact extends Component {
    render() {
        return (
            <div id="_footerContact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src="../lib/images/logo-04.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12">
                            <h5>TỈNH DÒNG ĐAMINH VIỆT NAM</h5>
                            <h4>BAN MỤC VỤ SINH VIÊN ĐAMINH</h4>
                            <p>Văn Phòng : 44 Tú Xương, phường 7, quận 3, TP.HCM</p>
                        </div>
                        <div className="col-12 social">
                            <ul>
                                <li className="fb"><i className="fab fa-facebook-square" /></li>
                                <li className="yt"><i className="fab fa-youtube" /></li>
                            </ul>
                        </div> {/* social */}
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterContact;