import React, { Component } from 'react';

class BlockStatisticalEatDontEat extends Component {
    render() {
        return (
            <div className="statistical-register">
                <div className="row text-center">
                    <div className="col-12">
                        <span className="title-register-event-content">
                            {this.props.children}
                    </span> {/* title-register-event-content*/}
                    </div>
                    <div className="col-12 b-statistical">
                        <ul>
                            <li>
                                <small>Đăng Ký</small>
                                <p className="statistical-eat b-eat">
                                    {this.props.eat}
                                </p>
                            </li>
                            <li>
                                <small>Không Ăn </small>
                                <p className="statistical-dont-eat b-eat">
                                    {this.props.donteat}
                                </p>
                            </li>
                        </ul>
                    </div> {/* b-statistical */}
                </div>
                <hr />
            </div>
        );
    }
}

export default BlockStatisticalEatDontEat;