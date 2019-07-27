import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div className="d-none d-md-block col-md-4 news w-col">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper-lastest-news">
                                <img src="../lib/images/lastnews.jpg" alt="" className="img-fluid" />
                                <div className="wrapper-content">
                                    <h6 className="title-news">Thánh lễ bế giảng năm học 2018 - 2019a sddasdd sdasd</h6>
                                </div> {/* wrapper-content */}
                            </div> {/* wrapper-lastest-news */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="news-slide">
                                <div className="row">
                                    <div className="col-3 ">
                                        <div className="img-news-slide">
                                            <img src="../lib/images/lastnews.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-9 content-news-slide">
                                        <small className="title-news">Thánh lễ bế giảng năm học 2018 - 2019</small>
                                    </div>
                                </div>
                                <div className="bk-hover">
                                    <small>Xem chi tiết</small>
                                </div>
                            </div> {/* news-slide */}
                        </div>
                        <div className="col-12">
                            <div className="news-slide">
                                <div className="row">
                                    <div className="col-3 ">
                                        <div className="img-news-slide">
                                            <img src="../lib/images/lastnews.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-9 content-news-slide">
                                        <small className="title-news">Thánh lễ bế giảng năm học 2018 - 2019</small>
                                    </div>
                                </div>
                                <div className="bk-hover">
                                    <small>Xem chi tiết</small>
                                </div>
                            </div> {/* news-slide */}
                        </div>
                        <div className="col-12">
                            <div className="news-slide">
                                <div className="row">
                                    <div className="col-3 ">
                                        <div className="img-news-slide">
                                            <img src="../lib/images/lastnews.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-9 content-news-slide">
                                        <small className="title-news">Thánh lễ bế giảng năm học 2018 - 2019</small>
                                    </div>
                                </div>
                                <div className="bk-hover">
                                    <small>Xem chi tiết</small>
                                </div>
                            </div> {/* news-slide */}
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default News;