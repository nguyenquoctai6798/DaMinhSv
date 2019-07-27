import React, { Component } from 'react';
import BlockNewsLastest from './BlockNewsLastest';

class SlideNewsLastest extends Component {
    render() {
        return (
            <div id="_slideNotifications" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#_slideNotifications" data-slide-to={0} className="active" />
                    <li data-target="#_slideNotifications" data-slide-to={1} />
                    <li data-target="#_slideNotifications" data-slide-to={2} />
                    <li data-target="#_slideNotifications" data-slide-to={3} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <BlockNewsLastest
                            imglastestnews="lastnews.jpg"
                            title="Thánh lễ bế giảng năm học 2018 - 2019"
                        ></BlockNewsLastest>
                    </div>
                    <div className="carousel-item">
                        <BlockNewsLastest
                            imglastestnews="bk.jpg"
                            title="Thánh lễ bế giảng năm học 2018 - 2019"
                        ></BlockNewsLastest>
                    </div>
                    <div className="carousel-item">
                        <BlockNewsLastest
                            imglastestnews="h3.jpg"
                            title="Thánh lễ bế giảng năm học 2018 - 2019"
                        ></BlockNewsLastest>
                    </div>
                    <div className="carousel-item">
                        <BlockNewsLastest
                            imglastestnews="h5.jpg"
                            title="Thánh lễ bế giảng năm học 2018 - 2019"
                        ></BlockNewsLastest>
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#_slideNotifications" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#_slideNotifications" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        );
    }
}

export default SlideNewsLastest;