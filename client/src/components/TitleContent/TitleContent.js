import React, { Component } from 'react';

class TitleContent extends Component {
    render() {
        return (
            <div className="title-content">
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default TitleContent;