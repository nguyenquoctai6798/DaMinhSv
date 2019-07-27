import React, { Component } from 'react';
import BlockNewsLastest from './BlockNewsLastest';
import SlideNewsLastest from './SlideNewsLastest';

class LastestNews extends Component {
    render() {
        return (
            <div className = "wrapper-lastest-news-notifications" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-none d-sm-block col-sm-6 col-md-3 block-col-notifications">
                            <BlockNewsLastest 
                                imglastestnews="lastnews.jpg"
                                title="Thánh lễ bế giảng năm học 2018 - 2019"
                            ></BlockNewsLastest>
                        </div>
                        <div className="d-none d-sm-block col-sm-6 col-md-3 block-col-notifications">
                            <BlockNewsLastest 
                                imglastestnews="bk.jpg"
                                title="Thánh lễ bế giảng năm học 2018 - 2019"
                            ></BlockNewsLastest>
                        </div>
                        <div className="d-none d-sm-block col-sm-6 col-md-3 block-col-notifications">
                            <BlockNewsLastest 
                                imglastestnews="h3.jpg"
                                title="Thánh lễ bế giảng năm học 2018 - 2019"
                            ></BlockNewsLastest>
                        </div>
                        <div className="d-none d-sm-block col-sm-6 col-md-3 block-col-notifications">
                            <BlockNewsLastest 
                                imglastestnews="h5.jpg"
                                title="Thánh lễ bế giảng năm học 2018 - 2019"
                            ></BlockNewsLastest>
                        </div>
                        <div className="col-12 slide-notifications">
                            <SlideNewsLastest></SlideNewsLastest>
                        </div>
                    </div>
                </div>
            </div > 
        );
    }
}

export default LastestNews;