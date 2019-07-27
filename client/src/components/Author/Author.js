import React, { Component } from 'react';
import './Author.css'
import { withRouter } from 'react-router-dom';

class Author extends Component {
    render() {
        return (
            <div id="_author">
                <div className="title-shared-green">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <h4>nhóm tác giả</h4>
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.99 10.87"><defs /><title>bootstrap-grid-1200</title><path className="cls-1" d="M411.16,4.47V6.39H218.5v1H208.17v3.5h-4V7.37H193.83v-1H1.17V4.47H193.83v-1h10.34V0h4V3.5H218.5v1Z" /></svg>
                            </div>
                        </div>
                    </div>
                </div> {/* title-shared */}
                <div className="content-author">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-2">
                                <div className="block-author-img">
                                    <img src="../lib/images/hau.jpg" alt="" className="img-fluid" />
                                </div> {/* block-author-img */}
                            </div>
                            <div className="col-6 col-md-4 c-block">
                                <div className="block-author-info">
                                    <small>
                                        <p><i className="fas fa-user-tie" />&nbsp;Giuse Hồ Công Hậu</p>
                                        <p><i className="fas fa-home" />&nbsp;Cựu lưu xá 5 - Giuse Khang</p>
                                        <p><i className="fas fa-graduation-cap" />&nbsp;Đại Học Khoa Học Tự Nhiên</p>
                                        <p><i className="fab fa-facebook-square" />&nbsp;fb.com/jshchau1998</p>
                                    </small>
                                </div> {/* block-author-info */}
                            </div>
                            <div className="col-6 col-md-2">
                                <div className="block-author-img">
                                    <img src="../lib/images/tai.JPG" alt="" className="img-fluid" />
                                </div> {/* block-author-img */}
                            </div>
                            <div className="col-6 col-md-4 c-block">
                                <div className="block-author-info">
                                    <small>
                                        <p><i className="fas fa-user-tie" />&nbsp;Giuse Nguyễn Quốc Tài</p>
                                        <p><i className="fas fa-home" />&nbsp;Cựu lưu xá 5 - Giuse Khang</p>
                                        <p><i className="fas fa-graduation-cap" />&nbsp;Đại Học Khoa Học Tự Nhiên</p>
                                        <p><i className="fab fa-facebook-square" />&nbsp;fb.com/Jos.NguyenQuocTai</p>
                                    </small>
                                </div> {/* block-author-info */}
                            </div>
                        </div>
                    </div>
                </div> {/* content-author */}
            </div> 
        );
    }
}

export default withRouter(Author)