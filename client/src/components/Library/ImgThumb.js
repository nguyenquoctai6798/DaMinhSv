import React, { Component } from 'react';

class ImgThumb extends Component {
    render() {
        return (
            <div className="col-6 col-md-3 img-thumb">
                <div className="block-album">
                    <img src={"../lib/images/"  + this.props.imgname} alt="" className="img-fluid" />
                    <div className="wrapper-content">
                        <h6 className="title-album">{this.props.children}</h6>
                    </div> {/* wrapper-content */}
                    <div className="bk-hover">
                        <small>Xem chi tiết</small>
                    </div>
                </div> {/* block-lastest-news-notifications */}
            </div>
        );
    }
}

export default ImgThumb;