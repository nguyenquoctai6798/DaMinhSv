import React, { Component } from 'react';

class House extends Component {
    render() {
        return (
            <div className="house">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="name-house">
                                {this.props.namehouse}
                                </div>
                        </div>
                        <div className="col-12">
                            <div className="img-house">
                                <img src={"../../uploads/houses/"+ this.props.imghouse}  alt="imghouse" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="info-house">
                                {this.props.address}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="more-info">
                                Chi tiết
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default House;