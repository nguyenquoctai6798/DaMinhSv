import React, { Component } from 'react';
import './SlideAndNews.css'
import Slide from './Slide';
import News from './News';

class SlideAndNews extends Component {
    render() {
        return (
            <div id="_slideAndNews">
                <div className="container-fluid">
                    <div className="row">
                        <Slide></Slide>
                        <News></News>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideAndNews;