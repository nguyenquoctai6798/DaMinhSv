import React, { Component } from 'react';

class UserInfoFood extends Component {
    render() {
        return (
            <div className="col-12 info-user-food">
                <small>
                    <i className={this.props.icon} />&nbsp;{this.props.children}
                </small>
            </div>
        );
    }
}

export default UserInfoFood;