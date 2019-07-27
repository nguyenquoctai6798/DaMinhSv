import React, { Component } from 'react';
import TitleShared from '../TitleShared/TitleShared';

class OrganizationChat extends Component {
    render() {
        return (
            <div id="_organizationalChart">
                <TitleShared title="sơ đồ tổ chức"  color="green"></TitleShared>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img src="../lib/images/sodotochuc-11.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>  {/* content */}
            </div>
        );
    }
}

export default OrganizationChat;