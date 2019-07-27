import React, { Component } from 'react';
import './Contact.css'
import InfoContact from './InfoContact';
import FeedbackContact from './FeedbackContact';

class Contact extends Component {
    render() {
        return (
            <div id="_contact">
                <div className="container">
                    <div className="row">
                        <InfoContact></InfoContact>
                        <FeedbackContact></FeedbackContact>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Contact