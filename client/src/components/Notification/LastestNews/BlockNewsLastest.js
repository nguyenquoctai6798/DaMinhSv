import React, { Component } from 'react';

class BlockNewsLastest extends Component {
    render() {
        return (
            <div className="block-lastest-news-notifications">
                <img src={"../lib/images/" + this.props.imglastestnews}  alt="" className="img-fluid" />
                <div className="wrapper-content">
                    <h6 className="title-news">{this.props.title}</h6>
                </div> {/* wrapper-content */}
                <div className="bk-hover">
                    <small>Xem chi tiết</small>
                </div>
            </div>
        );
    }
}

export default BlockNewsLastest;