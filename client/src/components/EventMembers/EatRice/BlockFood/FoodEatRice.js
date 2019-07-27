import React, { Component } from 'react';

class FoodEatRice extends Component {
    render() {
        return (
            <div className="img-food">
                <img src={"../lib/images/" + this.props.children} alt="" className="img-fluid" />
            </div>
        );
    }
}

export default FoodEatRice;