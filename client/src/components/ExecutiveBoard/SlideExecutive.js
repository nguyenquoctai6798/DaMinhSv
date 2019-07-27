import React, { Component } from 'react';
import Executive from './Executive';
import Carousel from 'react-bootstrap/Carousel'

class SlideExecutive extends Component {
    render() {
        return (
            <Carousel id="_slideExcutive" className="slide">
                <Carousel.Item>
                    <Executive 
                        imgname="bdh-09.jpg"
                        fullname="Giuse Hoàng Huy Cường O.P"
                        position="Đặc trách Lưu học xá SV Đaminh"
                        phone="0123.456.789"
                        time="2007 - hiện nay"
                        email="jhhcuong@gmail.com"
                    ></Executive>
                </Carousel.Item>
                <Carousel.Item>
                    <Executive 
                        imgname="bdh-08.jpg"
                        fullname="Giuse Vũ Hải Bằng O.P"
                        position="Phụ tá Lưu học xá SV Đaminh"
                        phone="0123.456.789"
                        time="2018 - hiện nay"
                        email="jsvhbang@gmail.com"
                    ></Executive>
                </Carousel.Item>
                <Carousel.Item>
                    <Executive 
                        imgname="bdh-06.jpg"
                        fullname="Anna Vũ Kim Thy"
                        position="Thư ký Lưu học xá SV Đaminh"
                        phone="0123.456.789"
                        time="2015 - hiện nay"
                        email="sisishop@gmail.com"
                    ></Executive>
                </Carousel.Item>
                <Carousel.Item>
                    <Executive 
                        imgname="bdh-07.jpg"
                        fullname="Micae Nguyễn Trần Phong Phú"
                        position="Phụ tá Lưu học xá SV Đaminh"
                        phone="0123.456.789"
                        time="2019 - hiện nay"
                        email="jsvhbang@gmail.com"
                    ></Executive>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default SlideExecutive;