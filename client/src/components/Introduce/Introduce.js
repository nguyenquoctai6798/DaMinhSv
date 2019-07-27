import React, { Component } from 'react';
import './Introduce.css'
import TitleShared from '../TitleShared/TitleShared';

class Introduce extends Component {
    render() {
        return (
            <div id="_introduce">
                <TitleShared title="giới thiệu lưu học xá đaminh" color="green"></TitleShared>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-10 col-md-4 img-introduce">
                                <img src="../lib/images/maikhoi2.jpg" alt="" className="img-fluid" />
                                <img src="../lib/images/maikhoi1.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-xs-12 col-md-8 info">
                                <p>Với mong muốn các bạn sinh viên có một môi trường tốt để học tập. Đồng thời, rèn luyện các bạn có tinh thần tự lập và phát triển toàn diện từ thể chất đến tinh thần. Đặc biệt, muốn tìm kiếm Ơn gọi trong lưu học xá.</p>
                                <p>Từ đó Lưu xá Đa Minh trở thành ngôi nhà thứ 2 và là nơi đồng hành với các bạn trẻ Công giáo trong suốt quảng đời sinh viên của mình.</p>
                                <p>Tên gọi Lưu học xá Đa Minh chính thức ra đời vào năm 2007, với ý hướng khôi phục lại Cư xá Phục Hưng sau năm 1975.</p>
                                <p>Ban đầu, lưu xá có mô hình nhỏ - độc lập, từ 20 đến 30 người một nhà, và rồi có thêm vài nhà được hình thành tại trung tâm Sài Gòn. Về sau, các bạn sinh viên đến đăng ký ngày một đông hơn, do đó nhu cầu được mở rộng là điều cần thiết. Được sự quan tâm và giúp đỡ của Tỉnh Dòng Đa Minh - năm 2011,cha Giuse. Hoàng Huy Cường được Tỉnh dòng giao phó làm Đặc trách Mục vụ Sinh viên Đa Minh Việt Nam.</p>
                                <p>Đến hôm nay, Ban Mục vụ sinh viên Đa Minh đang nỗ lực duy trì và phát triển cơ chế hoạt động và mong muốn Lưu xá trở thành ngôi nhà thân thiện, một môi trường hữu ích để giúp đỡ các bạn sinh viên Công giáo có nơi để phát triển tài năng và nhân cách của mình.</p>
                            </div>
                        </div>
                    </div>
                </div> {/* content */}
            </div>
        );
    }
}

export default Introduce;