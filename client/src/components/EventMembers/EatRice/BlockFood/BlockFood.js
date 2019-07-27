import React, { Component } from 'react';
import UserInfoFood from './UserInfoFood';
import FoodEatRice from './FoodEatRice';
import Carousel from 'react-bootstrap/Carousel'

class BlockFood extends Component {
    render() {
        return (
            <div className="b-food">
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-none d-sm-block col-sm-4">
                            <FoodEatRice>f3.jpg</FoodEatRice>
                        </div>
                        <div className="d-none d-sm-block col-sm-4">
                            <FoodEatRice>f4.jpg</FoodEatRice>
                        </div>
                        <div className="d-none d-sm-block col-sm-4">
                            <FoodEatRice>f1.jpg</FoodEatRice>
                        </div>
                        <div className="col-12 d-sm-none">
                            <Carousel id="_slideFoodLunch" className="slide">
                                <Carousel.Item>
                                    <FoodEatRice>f3.jpg</FoodEatRice>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <FoodEatRice>f4.jpg</FoodEatRice>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <FoodEatRice>f1.jpg</FoodEatRice>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="row">
                        <UserInfoFood icon="fas fa-shopping-cart">Đi chợ: Nguyễn Hoài Thương - Nguyễn Quốc Tài</UserInfoFood>
                        <UserInfoFood icon="fas fa-fire">Nấu ăn: Lê Tuấn Anh - Nguyễn Tuấn Đạt</UserInfoFood>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockFood;