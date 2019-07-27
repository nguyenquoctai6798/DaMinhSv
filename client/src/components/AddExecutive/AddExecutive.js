import React, { Component } from 'react';
import './AddExecutive.css'
import axios from 'axios'
const linkMembers = 'http://localhost:8000/members/'

class AddExecutive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
        }
        this.onChangeImgSingle = this.onChangeImgSingle.bind(this);
        this.handleUploadSingleImage = this.handleUploadSingleImage.bind(this);
    }

    onChangeImgSingle(e) {
        this.setState({ upImgSingle : true  });
        this.handleUploadSingleImage();
    }

    handleUploadSingleImage = (ev) => {
        const data = new FormData();
        data.append("file", this.uploadInputFile.files[0]);
    
        const link = `${linkMembers}uploadsingle`
        axios.post(link, data).then((res) => {
            const data = res.data
            const newData = data.file;
            this.setState({
                avatar: newData
            }); 
    }).catch(err=>{
        return false
    });
    }

    onChange = async (e) => {
        let name = e.target.name
        let value = e.target.value
        await this.setState({ [name]: value })
    }

    render() {
        return (
            <section className="main-content">
                <div className="title-shared">
                    thêm ban điều hành
                </div>
                <div className="container-fluid">
                    <div className="form-add-house">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="img-avatar">
                                    <div className="form-group">
                                        <label><small><i className="far fa-image" />&nbsp;Ảnh nhà (*)</small></label>
                                        <div className="wrapper-img-avatar">
                                            <img id="_fileAvatar" src={this.state.avatar !=='' ? "uploads/tmp/" + this.state.avatar : "../lib/images/h1.jpg"} alt="" className="img-fluid" />
                                            <label className="lb-file">
                                            <input
                                                type="file"
                                                id="File"
                                                className="form-control-file inputFile"
                                                aria-describedby="fileHelpId"
                                                ref={(ref) => {
                                                    this.uploadInputFile = ref;
                                                }}
                                                name="filename"
                                                onChange={this.onChangeImgSingle}
                                                />
                                            </label>
                                        </div>
                                        <span style={{ color: "red" }}><small><i>{this.state.avatarE}</i></small></span> 
                                    </div>
                                </div> {/* img-avatar */}
                                <div className="info-house">
                                    <div className="form-group">
                                    <label><small><i className="far fa-image" />&nbsp;Tên Lưu Xá (*)</small></label>
                                    <input type="text" className="form-control" name="namehouse" onChange={this.onChange} value={this.state.namehouse} placeholder="Giuse Khang" />
                                    <span style={{ color: "red" }}><small><i>{this.state.namhouseE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        
                                    </div>
                                </div>
                                </div>
                            </div> 
                            <div className="col-12 col-md-8">
                            <label><small><i className="far fa-image" />&nbsp;Mô tả (*)</small></label>
                            
                            </div>
                        </div>
                        <div className="row d-flex flex-row-reverse">
                            <div className="col-12 col-sm-6 col-md-4">
                                <button className="btn btn-success btn-block btn-save-executive">Thêm mới&nbsp;<i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div> {/* form-add-house */}
                </div>
            </section>
        );
    }
}

export default AddExecutive;