import React, { Component } from 'react';
import './ListNotifications.css'
import AddNotification from '../AddNotification/AddNotification';

class ListNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormAddNotification: false,
    }
  }

  showFormAddNotification = (e) => {
    e.preventDefault()
    this.setState({ showFormAddNotification: true });
  }

  render() {
    const tableNotification = (<div className="col-12">
    <div className="table-responsive text-center">
        <table className="table">
            <thead className="thead-success">
                <tr>
                    <th width="5%">STT</th>
                    <th width="10%">Ảnh</th>
                    <th width="25%">Tiêu đề</th>
                    <th width="41%">Nội dung</th>
                    <th width="25%">Thời gian tạo</th>
                    <th width="3%">Sửa</th>
                    <th>Mở / Khóa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>
                    <button className="btn btn-block btn-info">
                        <i className="fas fa-edit"></i>
                    </button>
                </td>
                <td>
                  <button className="btn btn-block btn-success">
                            <i className="fas fa-lock-open"></i>
                        </button>
                </td>
                <td>
                    <button className="btn btn-block btn-danger">
                    <i className="fas fa-trash-alt"></i>
                        </button>                    
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>)
    return (
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-shared">
              {this.state.showFormAddNotification ? "Thêm thông báo" :"Danh sách các thông báo"}
                
              </div>
            </div>
            {!this.state.showFormAddNotification ? <div className="col-12 text-right">
              <div className="form-group">
                <button className="btn btn-outline-success" onClick={this.showFormAddNotification}>
                  <i className="fas fa-plus"></i> &nbsp; Thêm thông báo
                    </button>
              </div>
            </div> : ""}
            {this.state.showFormAddNotification ? <AddNotification handleClickParent={this.callbackHandlerFunction}></AddNotification> : tableNotification}
          </div>
        </div>
      </section>
    );
  }
}

export default ListNotifications;