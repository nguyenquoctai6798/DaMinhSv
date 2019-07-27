import React, { Component } from 'react';
import './InfoHouseDetailAdmin.css'
import axios from 'axios'
import CKEditor from 'ckeditor4-react';
import Modal from 'react-bootstrap/Modal'
CKEditor.editorUrl = "https://cdn.ckeditor.com/4.11.4/full-all/ckeditor.js"
const linkMembers = 'http://localhost:8000/members/'
const linkHouses = 'http://localhost:8000/houses/'
class InfoHouseDetailAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idHouse : this.props.idhouse,

            imghouse: '',
            changeImgHouse: false,
            namehouse: '',
            idProvince : null,
            idDistrict : null,
            idWard: null,
            discription: '',

            changeData: false,
            content: 'content',

            namehouseE: '',
            upImgSingle: false,
            errorChangeDate: '',

            address: '',
            addressE: '',
            listProvinces: [],
            listDistricts: [],
            listWards: [],

            /* showModal */
            showModalWait: false,
            showModalSuccess: false  ,
            showModalErr: false,

            showFormEditHouse: false,
        }
        this.onChangeImgSingle = this.onChangeImgSingle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.handleUploadSingleImage = this.handleUploadSingleImage.bind(this);
        this.handleShowModalWait = this.handleShowModalWait.bind(this)
        this.handleShowModalSuccess = this.handleShowModalSuccess.bind(this)
        this.handleCloseModalWait = this.handleCloseModalWait.bind(this)
        this.handleCloseModalSuccess = this.handleCloseModalSuccess.bind(this)
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
                imghouse: newData
            }); 
    }).catch(err=>{
        return false
    });
    }

    onChange = async (e) => {
        let name = e.target.name
        let value = e.target.value
        await this.setState({ [name]: value })
        if (name === 'idProvince') {
            this.getDistrictByIdProvince(this.state.idProvince)
        }
        if (name === 'idDistrict') {
            this.getWardByIdDistrict(this.state.idDistrict)
        }
    }

    // get all info of house based on id
    getHouseById = (idhouse) =>{
        let link = `${linkHouses}GetHouseById/${idhouse}`
        axios.post(link).then((res) => {
            this.setState({ 
                imghouse: res.data.imghouse, 
                namehouse: res.data.namehouse,
                idProvince: res.data.ProvinceIdprovince,
                idDistrict: res.data.DistrictIddistrict,
                idWard : res.data.WardIdward,
                discription: res.data.discriptionshouse,
                address: res.data.address
            });
            this.getAllProvince()
            this.getDistrictByIdProvince(res.data.ProvinceIdprovince)
            this.getWardByIdDistrict(res.data.DistrictIddistrict)
        }).catch(err => {
            console.log(err)
        })
    }

     // get all province
    getAllProvince = () => {
        const link = `${linkMembers}getallprovince`
        axios.get(link).then(req => {
            const reqProvinces = req.data // data respond from server
            const list = []
            reqProvinces.map((item) => {
                const { idprovince, nameprovince } = item
                let data = { idprovince: idprovince, nameprovince: nameprovince }
                list.push(data)
            })
            this.setState({ listProvinces: list });
        })
    }

    // get all districts based on id province
    getDistrictByIdProvince = (id) => {
        const link = `${linkMembers}getdistrictsbyidprovince/${id}`
        axios.get(link).then(req => {
            const reqDistricts = req.data
            const list = []
            reqDistricts.map((item) => {
                const { iddistrict, namedistrict } = item
                let data = { iddistrict: iddistrict, namedistrict: namedistrict }
                list.push(data)
            })
            this.setState({ listDistricts: list });
        })
    }

    // get all wards based on id district
    getWardByIdDistrict = (id) => {
        const link = `${linkMembers}getwardsbyiddistrict/${id}`
        axios.get(link).then(req => {
            const reqWards = req.data
            const list = []
            reqWards.map((item) => {
                const { idward, nameward } = item
                let data = { idward: idward, nameward: nameward }
                list.push(data)
            })
            this.setState({ listWards: list });
        })
    }

    // map option province
    // <option value="11">Đồng Nai</option>
    renderProvince = () => {
        if (this.state.listProvinces.length > 0) {
            return this.state.listProvinces.map((item) => (
            <option key={item.idprovince} value={item.idprovince}>{item.nameprovince}</option>
        ))
        }
    }

    // map option district
    // <option value="11">Tân Phú</option>
    renderDistrict = () => {
        if (this.state.listDistricts.length > 0) {
            return this.state.listDistricts.map((item) => (
                <option key={item.iddistrict} value={item.iddistrict}>{item.namedistrict}</option>
            ))
        }
    }

    // map option ward
    // <option value="11">Phú Bình</option>
    renderWard = () => {
        if (this.state.listWards.length > 0) {
            return this.state.listWards.map((item) => (
                <option key={item.idward} value={item.idward}>{item.nameward}</option>
            ))
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent,
            changeData: true,
        });
    }

    onChangeCK(evt) {
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent,
            changeData: true
        })
    }

    handleUpdateHouse = (e) =>{
        e.preventDefault()
        if(this.state.changeData === false){
            this.setState({ errorChangeDate: 'Vui lòng nhập đầy đủ thông tin'  });
        }else{
            this.setState({ errorChangeDate: ''  });
        }if(this.state.namehouse === ''){
            this.setState({ namehouseE : 'Vui lòng nhập tên lưu xá'  });
        }else{
            this.setState({ namehouseE: ''  });
        }if(this.state.address === ''){
            this.setState({ addressE : 'Vui lòng nhập địa chỉ chi tiết'  });
        }else{
            this.setState({ addressE: ''  });
        }
        if(this.state.changeData === true && this.state.namehouse !== '' && this.state.address !== ''){
            const link = `${linkHouses}UpdateHouse/${this.state.idHouse}`;
            let data = {
                imghouse : this.state.imghouse,
                isChangeImgHouse: this.state.upImgSingle,
                namehouse: this.state.namehouse,
                address: this.state.address,
                discriptionshouse: this.state.content.editor.getData(),
                DistrictIddistrict: this.state.idDistrict,
                ProvinceIdprovince : this.state.idProvince,
                WardIdward: this.state.idWard
            }
            this.setState({ dataAdd : data  });
            this.handleShowModalWait()
            axios.post(link, data).then(res=>{
                console.log(res)
                if (res.data.status === 'success') {
                    this.handleCloseModalWait()
                    this.handleShowModalSuccess()
                }
            }).catch(err=>{
                this.handleCloseModalWait()
                this.handleShowModalErr()
            })
        }
    }

    handleShowModalWait = () => {
        this.setState({ showModalWait: true });
    }

    handleShowModalSuccess = () => {
        this.setState({ showModalSuccess: true });
    }

    handleCloseModalWait = () => {
        this.setState({ showModalWait: false });
    }

    handleCloseModalSuccess = () => {
        this.props.handleClickParent(true, this.state.dataAdd);
        this.setState({ showModalSuccess: false });
    }

    handleShowModalErr = () => {
        this.setState({ showModalErr: true });
    }

    handleCloseModalErr = () => {
        this.setState({ showModalErr: false });
    }

    handleCloseEdit = () =>{
        this.props.handleClickParent(false)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return nextState
        }
        return false
    }
    

    componentDidMount() {
        /* province district ward */ 
        this.getHouseById(this.state.idHouse)     
    }

    render() {
        return (
            <section className="main-content">
                <Modal show={this.state.showModalErr} onHide={this.handleCloseModalErr} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Hệ thống xử lý đã xảy ra lỗi <br /><br />
                            Vui lòng nhấn F5 để thử lại <br /><br />
                            Xin cảm ơn !!!</p> 
                            <br /><br />
                            <img src="./lib/images/warning.gif" alt="load" width="10%"/>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalErr}></i>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModalWait} onHide={this.handleCloseModalWait} aria-labelledby="contained-modal-title-vcenter" centered className="modal-content-none-bg" >
                    <Modal.Body  style={{ textAlign: "center" }}>
                        Đang cập nhật thông tin lưu xá. Vui lòng chờ ... <br/>
                        <img src="./lib/images/loading.gif" alt="load" width="10%"/>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showModalSuccess} onHide={this.handleCloseModalSuccess} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Cập nhật thông tin thành công.
                        <br/> Vui lòng vào "Menu Quản lý lưu xá" để kiểm tra<br/>
                        Xin cảm ơn !!!</p>
                        <img src="./lib/images/success.gif" alt="load" width="15%"/>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalSuccess}></i>    
                    </Modal.Footer>
                </Modal>
                <div className="container-fluid">
                    <div className="form-add-house">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="img-avatar">
                                    <div className="form-group">
                                        <label><small><i className="far fa-image" />&nbsp;Ảnh nhà (*)</small></label>
                                        <div className="wrapper-img-avatar">
                                            <img id="_fileAvatar" src={this.state.upImgSingle ? "uploads/tmp/" + this.state.imghouse : this.state.imghouse !=='' ? "uploads/houses/" + this.state.imghouse :  "../lib/images/h1.jpg"} alt="" className="img-fluid" />
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
                                    <span style={{ color: "red" }}><small><i>{this.state.namehouseE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-home" />
                                    &nbsp;Địa chỉ nhà (*)</small></label>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-4">
                                            <div className="form-group">
                                                <select className="form-control" name="idProvince" onChange={this.onChange} value={this.state.idProvince ? this.state.idProvince : ''} style={{ textTransform: 'capitalize' }}>
                                                    {this.renderProvince()}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="form-group">
                                                <select className="form-control" name="idDistrict" onChange={this.onChange} value={this.state.idDistrict ? this.state.idDistrict : ''} style={{ textTransform: 'capitalize' }}>
                                                    {this.renderDistrict()}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="form-group">
                                                <select className="form-control" name="idWard" onChange={this.onChange} value={this.state.idWard ? this.state.idWard : ''} style={{ textTransform: 'capitalize' }}>
                                                    {this.renderWard()}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" rows={3} placeholder="44 Tú Xương" name="address" onChange={this.onChange} value={this.state.address} />
                                                <span style={{ color: "red" }}><small><i>{this.state.addressE}</i></small></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div> 
                            <div className="col-12 col-md-8">
                            
                            <label><small><i className="far fa-image" />&nbsp;Mô tả (*)</small></label>
                            <CKEditor
                                    config={{
                                        height: 300
                                    }}
                                    activeClass="p10"
                                    content={this.state.content}
                                    onChange={this.updateContent}
                                    events={{
                                        "change": this.onChangeCK
                                    }}
                                    data={this.state.discription}
                                >
                                </CKEditor>
                                {this.state.errorChangeDate === '' ? "": <span><small style={{color:"red"}}>{this.state.errorChangeDate}</small></span>}
                            </div>
                        </div>
                        <div className="row d-flex flex-row-reverse">
                        <div className="col-12 col-sm-6 col-md-3">
                                <button className="btn btn-success btn-block btn-save-executive" onClick={this.handleUpdateHouse}>Cập Nhật&nbsp;<i className="far fa-save"></i></button>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <button className="btn btn-danger btn-block btn-save-executive" onClick={this.handleCloseEdit}>Thoát &nbsp;<i className="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div> {/* form-add-house */}
                </div>
            </section>
        );
    }
}

export default InfoHouseDetailAdmin;