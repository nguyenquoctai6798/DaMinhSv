import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Slide extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-8 silde w-col">
                <Carousel id="_slide" className="slide">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../lib/images/slide.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../lib/images/slide2.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../lib/images/slide3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slide;