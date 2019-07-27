import React, { Component } from 'react';
import TitleShared from '../TitleShared/TitleShared';

class InfoContact extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 info-contact" >
                <TitleShared title="thông tin liên hệ" color="green"></TitleShared>
                <div className="content-info-contact">
                    <p><small>Linh mục đặc trách : </small><span>Giuse Hoàng Huy Cường</span></p>
                    <p><small>Linh mục phụ tá : </small><span>Giuse Vũ Hải Bằng</span></p>
                    <p><small>Văn phòng MVSV : </small><span>Micae Nguyễn Trần Phong Phú</span></p>
                    <p><small>Văn phòng MVSV : </small><span>Anna Vũ Kim Thy</span></p>
                    <hr />
                    <p><small>Điện thoại : </small><span>0123.456.789</span></p>
                    <p><small>Email : </small><span>daminhsinhvien@gmail.com</span></p>
                    <p><small>Fanpage : </small><span>/BanMucVuSinhVienDaminh</span></p>
                    <div className="map-contact">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4337139121017!2d106.68110281437009!3d10.778056092320398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f25923a21c5%3A0xfa967a43aae46af5!2zTmjDoCB0aOG7nSBNYWkgS2jDtGk!5e0!3m2!1svi!2s!4v1560952766640!5m2!1svi!2s" width="100%" height="300px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div> {/* content-info-contact */}
            </div >
        );
    }
}

export default InfoContact;