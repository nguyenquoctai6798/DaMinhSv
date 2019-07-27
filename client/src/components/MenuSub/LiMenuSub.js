import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class LiMenuSub extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.link}>
                    <div className="row">
                        <div className="col-2">
                            <i className={this.props.icon}/>
                        </div>
                        <div className="col-10">
                            {this.props.children}
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}

export default withRouter(LiMenuSub)