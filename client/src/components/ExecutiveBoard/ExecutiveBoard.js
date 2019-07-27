import React, { Component } from 'react';
import './ExecutiveBoard.css'
import Executive from './Executive';
import SlideExecutive from './SlideExecutive';
import TitleShared from '../TitleShared/TitleShared';

class ExecutiveBoard extends Component {
    render() {
        return (
            <div id="_executiveBoard">
                <TitleShared title="ban điều hành" color="green"></TitleShared>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-sm-block col-sm-6 col-md-3">
                                <Executive 
                                    imgname="bdh-09.jpg"
                                    fullname="Giuse Hoàng Huy Cường O.P"
                                    position="Đặc trách Lưu học xá SV Đaminh"
                                    phone="0123.456.789"
                                    time="2007 - hiện nay"
                                    email="jhhcuong@gmail.com"
                                ></Executive>
                            </div>
                            <div className="d-none d-sm-block col-sm-6 col-md-3">
                                <Executive 
                                    imgname="bdh-08.jpg"
                                    fullname="Giuse Vũ Hải Bằng O.P"
                                    position="Phụ tá Lưu học xá SV Đaminh"
                                    phone="0123.456.789"
                                    time="2018 - hiện nay"
                                    email="jsvhbang@gmail.com"
                                ></Executive>
                            </div>
                            <div className="d-none d-sm-block col-sm-6 col-md-3">
                                <Executive 
                                    imgname="bdh-06.jpg"
                                    fullname="Anna Vũ Kim Thy"
                                    position="Thư ký Lưu học xá SV Đaminh"
                                    phone="0123.456.789"
                                    time="2015 - hiện nay"
                                    email="sisishop@gmail.com"
                                ></Executive>
                            </div>
                            <div className="d-none d-sm-block col-sm-6 col-md-3">
                                <Executive 
                                    imgname="bdh-07.jpg"
                                    fullname="Micae Nguyễn Trần Phong Phú"
                                    position="Phụ tá Lưu học xá SV Đaminh"
                                    phone="0123.456.789"
                                    time="2019 - hiện nay"
                                    email="jsvhbang@gmail.com"
                                ></Executive>
                            </div>
                            <div className="col-12 d-sm-none">
                                <SlideExecutive></SlideExecutive>
                            </div>
                        </div>
                    </div>
                </div>{/* content */}
            </div>
        );
    }
}

export default ExecutiveBoard;