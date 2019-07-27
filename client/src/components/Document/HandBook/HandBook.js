import React, { Component } from 'react';
import TitleContent from '../../TitleContent/TitleContent';

class HandBook extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }

        this.onChangeSelectBook = this.onChangeSelectBook.bind(this);
    }

    onChangeSelectBook= async (e)=>{
        let title = e.target.value;
        this.openHandBook(title);
    }

    openHandBook = (title) =>{
        let i;
        let tabContent;
        let tabLinks;
        
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        
        title = title !== '' ? title : "0";
        document.getElementById(title).style.display = "block";

        // add class active
        let btn = "_btn"+title;
        document.getElementById(btn).classList.add('active');
    }

    componentDidMount(){
        this.openHandBook('_loiNgo');
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-8">
                    <TitleContent title="cẩm nang"></TitleContent>
                </div>
                <div className="col-12 col-sm-4 text-center text-sm-right download-hand-book">
                    <small /><button className="btn btn-light"><small>
                        <div className="btn-download-hand-book"><i className="fas fa-download" />&nbsp;Tải Cẩm Nang</div></small>
                    </button></div>
                <div className="col-12 tab-show-xs">
                    <div className="tab-select">
                        <div className="form-group">
                            <select className="form-control form-control-sm" id="_selectTab" onChange={this.onChangeSelectBook}>
                                <option className="tab-links" value="_loiNgo">lời ngỏ</option>
                                <option className="tab-links" value="_hoatDongVanPhong">hoạt động văn phòng</option>
                            </select>
                        </div>
                    </div>
                </div> {/* tab-show-xs */}
                <div className="col-12 hand-book">
                    <div className="tab">
                        <button type="button" className="tab-links active" onClick={this.openHandBook.bind(this, '_loiNgo')} id="_btn_loiNgo">lời ngỏ</button>
                        <button type="button" className="tab-links" id="_btn_hoatDongVanPhong" onClick={this.openHandBook.bind(this, '_hoatDongVanPhong')}>hoạt động văn phòng</button>
                    </div>
                    <div id="_loiNgo" className="tab-content">
                        <p>Kính thưa quý phụ huynh và các bạn sinh viên thân mến,
                            Sài Gòn là một thành phố nhiều trường Đại học và Cao đẳng, Trung cấp…, miền đất nhiều cơ hội, nhưng cũng không thiếu những nguy hiểm, khó khăn.. Vì thế, để tìm được một nơi “ăn - ở - học” tại đất Sài Thành này đang là mối ưu tư của nhiều phụ huynh và sinh viên. Đứng trước nhu cầu đó, Ban Mục Vụ Sih Viên Đa Minh đã thành lập các Lưu Học Xá giúp cho các Nam sinh viên Công Giáo có được một môi trường lành mạnh và thuận tiện cho việc học tập. Với quy mô tổ chức hệ thống, các sinh viên sẽ hoàn thành tốt kết quả học tập của mình trong những năm tháng “dùi mài kinh sử”.
                          Ngoài những sinh hoạt chung: ăn, ở và học, Lưu Học Xá không ngừng tạo những sân chơi, các Câu lạc bộ, hoạt động VĂN – THỂ - MỸ nhằm tạo tinh thần hưng phấn và giải toả căng thẳng sau những giờ học tập. Tại nơi đây, mọi người xem nhau như anh em một nhà và chia sẻ vui buồn trong tình huynh đệ yêu thương. Chắc chắn nơi đây sẽ là một môi trường thật sự tốt đẹp mà các sinh viên đang tìm kiếm và khám phá hầu tự hoàn thiện bản thân.
                          Các sinh viên có nhu cầu, có ý chí rèn luyện bản thân và có tinh thần cộng đồng, hãy đến ghi danh và nộp hồ sơ tại Văn Phòng Mục Vụ Sinh Viên Đaminh theo địa chỉ trên.
              Đặc trách Ban Mục Vụ Sinh Viên Đa Minh</p>
                    </div>
                    <div id="_hoatDongVanPhong" className="tab-content">
                        <p>1.    Sinh hoạt và Quản lý Lưu học xá
                          -         Quản lý Danh Sách Sinh viên RA – VÀO
                          -         Quản lý thu chi Văn phòng và Sinh viên
                          -         Chương trình sinh hoạt hàng tháng, tuần và các sự kiện
                          -         Liên lạc với gia đình của sinh viên và các đối tác
                          -         Liên kết với các Lưu xá bạn và các nhóm sinh viên
                          2.    Học Bổng Tài Năng Sinh Viên Đaminh
                          -         Học bổng Tài Năng Sinh Viên Đaminh:
                          + Học bổng Bán Phần
                          + Học bổng Toàn Phần
                          + Học bổng Tài Năng
                          -         Liên kết với Học Bổng Tôma Thiện
                          -         Liên kế với Học Bổng FFSC
                          3.    Câu lạc bộ Tìm Hiểu Ơn Gọi Tu Trì
                          -         Sinh hoạt 1 tháng 2 lần vào tối thứ 5 tuần 2 và 4
                          -         Nội dung : Phân định và tìm hiểu ơn gọi
                          4.    Câu lạc bộ Hướng nghiệp các chuyên ngành
                          -         CLB sinh hoạt hàng tháng hoặc hàng tuần theo đề tài
                          -         Giao lưu với các Chuyên gia về chuyên môn
                          5.    Câu lạc bộ Anh văn
                          -         Thường xuyên mở các khoá Anh văn đàm thoại
                          -         CLB sinh hoạt hàng tháng hoặc hàng tuần theo chủ đề
                          -         Giao lưu văn hoá Anh với cộng đồng nói tiếng Anh
                          6.    Câu lạc bộ Pháp văn
                          -         Thường xuyên mở các khoá Pháp văn đàm thoại
                          -         CLB sinh hoạt hàng tháng hoặc hàng tuần theo chủ đề
                          -         Giao lưu văn hoá Pháp với cộng đồng nói tiếng Pháp
                          7.    Câu lạc bộ Gia Sư Đaminh
                          -         Liên kết với các phụ huynh của Đoàn Thiếu Nhi giáo xứ
                          -         Liên kết với các Giáo viên Công Giáo các cấp
                          8.    Câu lạc bộ Giới thiệu việc làm
                          -         Liên kết với các Doanh Nhân Công Giáo
                          -         Liên kết với các Tổ chức xã hội
                          9.    Chương trình Mái Nhà Yêu Thương
                          -         Hỗ trợ những sinh viên có hoàn cảnh khó khăn
                          -         Hỗ trợ những sinh viên hoặc gia đình gặp tai nạn
                          10.                      Chương trình Bác Ái Xã Hội
                          -         Tổ chức những chuyến công tác vùng sâu vùng xa
                          -         Liên kết với các Nhóm từ thiện xã hội
                          -         Lưu học xá đi hát lễ tại một Nguyện Đường hoặc Mái Amms
              -         Mỗi tháng 1 Lưu học xá sẽ đi thăm Mái Ấm (kinh phí sinh viên tự đóng góp theo từng Lưu xá)</p>
                    </div>
                </div> {/* hand-book */}
            </div>
        );
    }
}

export default HandBook;