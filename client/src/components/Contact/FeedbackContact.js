import React, { Component } from 'react';
import TitleShared from '../TitleShared/TitleShared';

class FeedbackContact extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 feedback-contact">
                <TitleShared title="gửi phản hồi cho chúng tôi" color="green"></TitleShared>
                <div className="content-feedback-contact">
                    <div className="form-group">
                        <label ><small><i className="fas fa-user" />&nbsp;Họ tên</small></label>
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Giuse Hồ Công Hậu" />
                    </div>
                    <div className="form-group">
                        <label ><small><i className="far fa-envelope" />&nbsp;Email</small></label>
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="hchau@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label ><small><i className="fas fa-mobile-alt" />&nbsp;Điện thoại</small></label>
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="0258147369" />
                    </div>
                    <div className="form-group">
                        <label  />
                        <textarea className="form-control" rows={10} placeholder="Nhập nội dung phản hồi ..." defaultValue={""} />
                    </div>
                    <div className="form-group btn-feedback-contact">
                        <button className="btn btn-success">
                            Gửi phản hồi&nbsp;<i className="far fa-paper-plane" />
                        </button>
                    </div>
                </div> {/* content-feedback-contact */}
            </div>
        );
    }
}

export default FeedbackContact;