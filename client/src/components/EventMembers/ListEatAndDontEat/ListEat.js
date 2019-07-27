import React, { Component } from 'react';

class ListEat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: false
                
            
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.list !== prevState.list) {
            return {
                list: nextProps.list
            }
    
        }
        return null;
    }

   

    render() {
        const names =this.state.list ?(this.state.list.map((motphantu, index) => 
        <div className="col-12 col-md-6" key={index}>
            ⁘&nbsp;{motphantu.fullname}
        </div> )):""
        return (
            <div>
                <p className="title-register-event-content">
                    {this.props.children}
                </p> {/* title-register-event-content */}
                <div className="col-12 list-register">
                    <div className="row">
                       {names}
                    </div>
                </div>
                </div>
                );
            }
        }
        
export default ListEat;