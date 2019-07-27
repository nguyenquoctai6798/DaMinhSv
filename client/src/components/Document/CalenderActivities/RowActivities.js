import React, { Component } from 'react';

class RowActivities extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.date}</td>
                <td>{this.props.liturgy}</td>
                <td>{this.props.time}</td>
                <td className={"text-left" + this.props.important}>{this.props.title}</td>
                <td>{this.props.object}</td>
            </tr>
        );
    }
}

export default RowActivities;