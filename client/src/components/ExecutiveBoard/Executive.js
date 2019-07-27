import React, { Component } from 'react';

class Executive extends Component {
    render() {
        return (
            <div className="executive">
                <div className="top-executive">
                    <div className="wrapper-img-executive">
                        <img src={"../lib/images/" + this.props.imgname} alt="" className="img-fluid" />
                    </div>
                    <p>{this.props.fullname}</p>
                </div> {/* top-executive */}
                <div className="bottom-executive">
                    <span>{this.props.position}</span>
                    <hr />
                    <span><i className="far fa-calendar-alt" />&nbsp;{this.props.time}</span>
                    <hr />
                    <span><i className="fas fa-mobile-alt" />&nbsp;{this.props.phone}</span>
                    <hr />
                    <span><i className="far fa-envelope" />&nbsp;{this.props.email}</span>
                </div> {/* bottom-executive */}
            </div>
        );
    }
}

export default Executive;