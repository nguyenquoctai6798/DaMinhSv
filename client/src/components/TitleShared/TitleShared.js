import React, { Component } from 'react';

class TitleShared extends Component {
    render() {
        return (
            <div>
                <div className={"title-shared-" + this.props.color}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <h4>{this.props.title}</h4>
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.99 10.87"><defs /><title>bootstrap-grid-1200</title><path className="cls-1" d="M411.16,4.47V6.39H218.5v1H208.17v3.5h-4V7.37H193.83v-1H1.17V4.47H193.83v-1h10.34V0h4V3.5H218.5v1Z" /></svg>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default TitleShared;