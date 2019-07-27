import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery'
import './SidebarAdmin.css';

class SidebarAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    jQuery = () => {
        $('#toggle-btn').on('click', function (e) {

            e.preventDefault();
            if ($(window).outerWidth() > 1194) {
                $('nav.side-navbar').toggleClass('shrink');
                $('.page').toggleClass('active');
            } else {
                $('nav.side-navbar').toggleClass('show-sm');
                $('.page').toggleClass('active-sm');
            }
        });


        $('.external').on('click', function (e) {

            e.preventDefault();
            window.open($(this).attr("href"));
        })
    }

    componentDidMount() {
        this.jQuery()
    }

    render() {
        return (
            <nav className="side-navbar">
                <div className="side-navbar-wrapper">
                    {/* Sidebar Header    */}
                    <div className="sidenav-header d-flex align-items-center justify-content-center">
                        {/* User Info*/}
                        <div className="sidenav-header-inner text-center"><Link to="/index" data-toggle="tooltip" data-placement="top" title="Trang Chủ"><img src="../lib/images/logo-04.png" alt="person" className="img-fluid rounded-circle" /></Link>
                            <br />
                            <span>Xin chào Admin</span>
                        </div>
                        {/* Small Brand information, appears on minimized sidebar*/}
                        <div className="sidenav-header-logo"><Link to="/index" className="brand-small text-center" data-toggle="tooltip" data-placement="top" title="Trang Chủ"> <strong>D</strong><strong className="text-warning">M</strong></Link></div>
                    </div>
                    {/* Sidebar Navigation Menus*/}
                    <div className="main-menu">
                        <ul id="side-main-menu" className="side-menu list-unstyled">
                            <li><a href="#listStudent" aria-expanded="false" data-toggle="collapse"><i className="fas fa-list"></i>Danh sách sinh viên</a>
                                <ul id="listStudent" className="list-unstyled collapse">
                                    <li className={this.props.active === 'allhouse' ? "active" : ""}><Link to="/">&#8756;&nbsp;Tất cả lưu xá</Link></li>
                                    <li className={this.props.active === 'eachhouse' ? "active" : ""}><Link to="ListStudentEachHouse">&#8756;&nbsp;Từng lưu xá</Link></li>
                                    <li className={this.props.active === 'oldmember' ? "active" : ""}><Link to="ListOldMemberPage">&#8756;&nbsp;Cựu lưu xá</Link></li>
                                    <li className={this.props.active === 'school' ? "active" : ""}><Link to="ListStudentBySchoolPage">&#8756;&nbsp;Trường học</Link></li>
                                    <li className={this.props.active === 'provincecity' ? "active" : ""}><Link to="ListStudentByProvincePage">&#8756;&nbsp;Tỉnh/Thành phố</Link></li>
                                    <li className={this.props.active === 'dioceses' ? "active" : ""}><Link to="ListStudentByDiocesePage">&#8756;&nbsp;Giáo phận</Link></li>
                                </ul>
                            </li>
                            <li><a href="#statistical" aria-expanded="false" data-toggle="collapse"><i className="fas fa-chart-pie"></i>Thống kê</a>
                                <ul id="statistical" className="list-unstyled collapse">
                                    <li className={this.props.active === 'score' ? "active" : ""}><a href="true">&#8756;&nbsp;Điểm số</a></li>
                                    <li className={this.props.active === 'violationerror' ? "active" : ""}><a href="true">&#8756;&nbsp;Lỗi vi phạm</a></li>
                                    <li className={this.props.active === 'size' ? "active" : ""}><Link to="StatisticalSizePage">&#8756;&nbsp;Sỉ số/ Số lượng</Link></li>
                                    <li className={this.props.active === 'revenueexpenditure' ? "active" : ""}><a href="true">&#8756;&nbsp;Thu chi</a></li>
                                    <li className={this.props.active === 'gohomeovernight' ? "active" : ""}><a href="true">&#8756;&nbsp;Về quê/ qua đêm</a></li>
                                    <li className={this.props.active === 'eatdonteatrice' ? "active" : ""}><a href="true">&#8756;&nbsp;Ăn/không ăn cơm</a></li>
                                    <li className={this.props.active === 'emailstatistical' ? "active" : ""}><a href="true">&#8756;&nbsp;Email</a></li>
                                </ul>
                            </li>
                            <li><a href="#editpage" aria-expanded="false" data-toggle="collapse"><i className="fas fa-edit"></i>Chỉnh sửa trang</a>
                                <ul id="editpage" className="list-unstyled collapse">
                                    <li className={this.props.active === 'pageshared' ? "active" : ""}><a href="true">&#8756;&nbsp;Các phần chung</a></li>
                                    <li className={this.props.active === 'pageindex' ? "active" : ""}><a href="true">&#8756;&nbsp;Trang chủ</a></li>
                                    <li className={this.props.active === 'pagenotification' ? "active" : ""}><a href="true">&#8756;&nbsp;Thông báo</a></li>
                                    <li className={this.props.active === 'pagedocument' ? "active" : ""}><a href="true">&#8756;&nbsp;Tài liệu</a></li>
                                    <li className={this.props.active === 'pageevent' ? "active" : ""}><a href="true">&#8756;&nbsp;Sự kiện</a></li>
                                    <li className={this.props.active === 'pagelibrary' ? "active" : ""}><a href="true">&#8756;&nbsp;Thư viện</a></li>
                                    <li className={this.props.active === 'pagecontact' ? "active" : ""}><a href="true">&#8756;&nbsp;Liên hệ</a></li>
                                    <li className={this.props.active === 'activitycalendar' ? "active" : ""}><a href="true">&#8756;&nbsp;Lịch sinh hoạt</a></li>
                                    <li className={this.props.active === 'handbook' ? "active" : ""}><a href="true">&#8756;&nbsp;Cẩm nang</a></li>
                                </ul>
                            </li>
                            <li className={this.props.active === 'notification' ? "active" : ""}><Link to="NotificationPage"><i className="fas fa-user-edit"></i>Thông báo</Link></li>
                            <li className={this.props.active === 'decentralization' ? "active" : ""}><Link to="DecentralizationPage"><i className="fas fa-user-edit"></i>Phân quyền</Link></li>
                            <li className={this.props.active === 'addhouse' ? "active" : ""}><Link to="HousePage"><i className="fas fa-church"></i>Quản lý Lưu xá</Link></li>
                            <li className={this.props.active === 'addexecutive' ? "active" : ""}><Link to="AddExecutivePage"><i className="fas fa-user-plus"></i>Thêm ban điều hành</Link></li>
                            <li className={this.props.active === 'email' ? "active" : ""}><a href="login.html"><i className="far fa-envelope"></i>Email<div className="badge badge-warning">10</div>                           </a></li>
                            <li className={this.props.active === 'importexport' ? "active" : ""}><a href="login.html"><i className="fas fa-file-import"></i>Nhập/ Xuất dữ liệu                           </a></li>
                            <li className={this.props.active === 'backuprestore' ? "active" : ""}> <a href="true"><i className="fas fa-database"></i>Backup & Restore
        </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(SidebarAdmin)