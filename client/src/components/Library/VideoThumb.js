import React, { Component } from 'react';

class VideoThumb extends Component {
    render() {
        return (
            <div className="col-6 col-md-3 video-thumb">
                <div className="block-video">
                    <iframe width="100%" src={"https://www.youtube.com/embed/" + this.props.idvideo} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                    <div className="wrapper-content">
                        <h6 className="title-album">{this.props.children}</h6>
                    </div> {/* wrapper-content */}
                </div> {/* block-video */}
            </div> 
        )
    }
}

export default VideoThumb;