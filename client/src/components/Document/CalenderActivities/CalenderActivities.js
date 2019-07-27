import React, { Component } from 'react';
import TitleContent from '../../TitleContent/TitleContent';
import RowActivities from './RowActivities';

class CalenderActivities extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-8">
                    <TitleContent title="lịch sinh hoạt năm"></TitleContent>
                </div>
                <div className="col-12 col-sm-4 select-month-year">
                    <div className="row w-filter-select">
                        <div className="col-6 text-right filter-select">
                            <small>
                                <div className="form-group">
                                    <select className="form-control form-control-sm">
                                        <option defaultValue disabled>Tháng</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </small>
                        </div>
                        <div className="col-6  text-right filter-select">
                            <small>
                                <div className="form-group">
                                    <select className="form-control form-control-sm">
                                        <option defaultValue disabled>Năm</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-12 table-activities">
                    <div className="table-responsive text-center">
                        <table className="table table-bordered">
                            <thead className="thead-success">
                                <tr>
                                    <th width="3%">STT</th>
                                    <th width="5%">Ngày</th>
                                    <th width="10%">Phụng vụ</th>
                                    <th width="15%">Thời gian</th>
                                    <th>Hoạt động</th>
                                    <th width="10%">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RowActivities
                                    stt="1"
                                    date="01/12/2018"
                                    liturgy=""
                                    time="Thứ 7"
                                    title="Khai mạc giải bóng đá - Mừng Chúa Giáng Sinh 2018"
                                    object="Tất cả SV"
                                ></RowActivities>
                                <RowActivities
                                    stt="2"
                                    date="09/12/2018"
                                    liturgy="CN 2 MV"
                                    time="14h30 - 17h00"
                                    title="Tọa đàm"
                                    object="Tất cả SV"
                                ></RowActivities>
                                <RowActivities
                                    stt="3"
                                    date="15/12/2018"
                                    liturgy=""
                                    time="Thứ 7"
                                    title="Khai mạc giải bóng đá - Mừng Chúa Giáng Sinh 2018"
                                    object="Tất cả SV"
                                ></RowActivities>
                                <RowActivities
                                    stt="4"
                                    date="16/12/2018"
                                    liturgy="CN 3 MV"
                                    time=""
                                    title="Tĩnh tâm mùa vọng"
                                    object="Tất cả SV"
                                    important=" important"
                                ></RowActivities>
                            </tbody>
                        </table>
                    </div>
                </div> {/* table-activities */}
            </div>
        );
    }
}

export default CalenderActivities;