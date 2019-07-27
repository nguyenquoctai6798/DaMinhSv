import React, { Component } from 'react';
import TitleContent from '../../TitleContent/TitleContent';

class DocDownload extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                   <TitleContent title="tài liệu"></TitleContent>
                </div>
                <div className="col-12 documents-download">
                    <div className="table-responsive text-center">
                        <table className="table table-bordered">
                            <thead className="thead-success">
                                <tr>
                                    <th width="60%">Tiêu đề</th>
                                    <th width="15%">Thời gian</th>
                                    <th width="15%">Định dạng</th>
                                    <th>Tải về</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-left">Đơn xin ra lưu xá</td>
                                    <td>19/06/2019</td>
                                    <td>docx</td>
                                    <td><i className="fas fa-download" /></td>
                                </tr>
                                <tr>
                                    <td className="text-left">Đơn xin ra lưu xá</td>
                                    <td>19/06/2019</td>
                                    <td>xls</td>
                                    <td><i className="fas fa-download" /></td>
                                </tr>
                                <tr>
                                    <td className="text-left">Đơn xin ra lưu xá</td>
                                    <td>19/11/2018</td>
                                    <td>pptx</td>
                                    <td><i className="fas fa-download" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> {/* documents-download */}
            </div>
        );
    }
}

export default DocDownload;