import React, { Component } from 'react';

class InfoTitleDetail extends Component {
    render() {
        return (
            <div className="row info-title-detail">
                <div className="col-8 title-notification-info">
                    ⁜&nbsp;{this.props.title}
                </div> {/* title-notification-info */}
                <div className="col-4 time-notification-info text-right">
                    <small>{this.props.time}</small>
                </div>
            </div> 
        );
    }
}

export default InfoTitleDetail;