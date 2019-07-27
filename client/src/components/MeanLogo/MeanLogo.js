import React, { Component } from 'react';
import './MeanLogo.css'
import TitleShared from '../TitleShared/TitleShared';

class MeanLogo extends Component {
    render() {
        return (
            <div id="_mean-logo">
                <TitleShared title="logo lưu học xá đaminh" color="white"></TitleShared>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4 logo2 d-md-none">
                                <img src="../lib/images/logo-04.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-xs-12 col-md-4 mean">
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                            </div>
                            <div className="col-xs-12 col-md-4 logo d-none d-md-block">
                                <img src="../lib/images/logo-04.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-xs-12 col-md-4 mean">
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                                <p>Vòng tròn xanh lá : Biểu trưng cho sức sống của tuổi trẻ, tinh thần nhiệt huyết</p>
                            </div>
                        </div>
                    </div>
                </div> {/* content */}
            </div>
        );
    }
}

export default MeanLogo;