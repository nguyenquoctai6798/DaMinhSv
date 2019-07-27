import React, { Component } from 'react';
import './Library.css'
import TitleShared from '../TitleShared/TitleShared';
import TitleContent from '../TitleContent/TitleContent';
import ImgThumb from './ImgThumb';
import VideoThumb from './VideoThumb';

class LibraryComponent extends Component {
    render() {
        return (
            <div id="_library">
                <TitleShared title="thư viện" color="green"></TitleShared>
                <div className="content-libray">
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                                <TitleContent title="hình ảnh"></TitleContent>
                            </div>
                            <div className="col-5 text-right add-content">
                                <small /><button className="btn btn-light"><small>
                                    <div className="btn-add-album"><i className="fas fa-plus" />&nbsp;Thêm</div></small>
                                </button></div>
                            <div className="col-12 list-album">
                                <div className="row">
                                    <ImgThumb imgname="lastnews.jpg">Thánh lễ bế giảng năm học 2018 - 2019</ImgThumb>
                                    <ImgThumb imgname="h3.jpg">Thánh lễ bế giảng năm học 2018 - 2019</ImgThumb>
                                    <ImgThumb imgname="bk.jpg">Thánh lễ bế giảng năm học 2018 - 2019</ImgThumb>
                                    <ImgThumb imgname="h4.jpg">Thánh lễ bế giảng năm học 2018 - 2019</ImgThumb>
                                    <ImgThumb imgname="h6.jpg">Thánh lễ bế giảng năm học 2018 - 2019</ImgThumb>
                                    <ImgThumb imgname="h5.jpg">Thánh lễ bế giảng năm học 2018 - 2019</ImgThumb>
                                    <div className="col-12 text-right">
                                        <small className="view-more"><i>Xem thêm</i>&nbsp;<i className="fas fa-angle-double-right" /></small>
                                    </div>
                                </div>
                            </div> {/* list-album */}
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <TitleContent title="video"></TitleContent>
                            </div>
                            <div className="col-5 text-right add-content">
                                <small /><button className="btn btn-light"><small>
                                    <div className="btn-add-album"><i className="fas fa-plus" />&nbsp;Thêm</div></small>
                                </button></div>
                            <div className="col-12 list-video">
                                <div className="row">
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <VideoThumb idvideo="8-XAjXBqiE8">Thánh lễ bế giảng năm học 2018 - 2019</VideoThumb>
                                    <div className="col-12 text-right">
                                        <small className="view-more"><i>Xem thêm</i>&nbsp;<i className="fas fa-angle-double-right" /></small>
                                    </div>
                                </div>
                            </div> {/* list-video */}
                        </div>
                    </div>
                </div> {/* content-libray */}
            </div>
        );
    }
}

export default LibraryComponent;