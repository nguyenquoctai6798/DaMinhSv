import React, { Component } from 'react';
import House from './House';
import Carousel from 'react-bootstrap/Carousel'

class SlideHouse extends Component {
    render() {
        return (
            <Carousel id="_slideHouse" className="slide">
                <Carousel.Item>
                    <House
                        namehouse="Nhà 1 - Vinh Sơn"
                        imghouse="h1.jpg"
                        address="Hiếp Nhất, phường 5, quận Tân Bình"
                    ></House>
                </Carousel.Item>
                <Carousel.Item>
                    <House
                        namehouse="Nhà 2 - Đaminh Cẩm"
                        imghouse="h2.jpg"
                        address="Hiếp Nhất, phường 5, quận Tân Bình"
                    ></House>
                </Carousel.Item>
                <Carousel.Item>
                    <House
                        namehouse="Nhà 3 - Alberto"
                        imghouse="h3.jpg"
                        address="Hiếp Nhất, phường 5, quận Tân Bình"
                    ></House>
                </Carousel.Item>
                <Carousel.Item>
                    <House
                        namehouse="Nhà 4 - Tôma Aquinô"
                        imghouse="h4.jpg"
                        address="Hiếp Nhất, phường 5, quận Tân Bình"
                    ></House>
                </Carousel.Item>
                <Carousel.Item>
                    <House
                        namehouse="Nhà 5 - Giuse Khang"
                        imghouse="h5.jpg"
                        address="Hiếp Nhất, phường 5, quận Tân Bình"
                    ></House>
                </Carousel.Item>
                <Carousel.Item>
                    <House
                        namehouse="Nhà Thủ Đức"
                        imghouse="h6.jpg"
                        address="Hiếp Nhất, phường 5, quận Tân Bình"
                    ></House>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default SlideHouse;