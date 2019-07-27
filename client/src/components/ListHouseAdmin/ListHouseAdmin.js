import React, { Component } from 'react';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import AddHouse from '../AddHouse/AddHouse';
import InfoHouseDetailAdmin from '../InfoHouseDetailAdmin/InfoHouseDetailAdmin';
const linkMembers = 'http://localhost:8000/members/'
const linkHouses = 'http://localhost:8000/houses/'

class ListHouseAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormAddHouse: false,
            listHouses: [],

            showInfoHouse: false,
            idhouseinfo: null,

            nameprovince: '',
            typeprovince: '',

            namedistrict: '',
            typedistrict: '',

            nameward: '',
            typeward: '',

            markdelete: false,

            /* showModal */
            showModalErr: false,
            showModalAlertDelete: false, 

            dataAdd: [],
            listNameDistrict: [],

            iddelete: null,
            imghousedelete: null
        }

        this.handUpdateMarkDelete = this.handUpdateMarkDelete.bind(this)
        this.handleDeleteHouse = this.handleDeleteHouse.bind(this)
        this.handleShowModalErr = this.handleShowModalErr.bind(this)
        this.handleCloseModalErr = this.handleCloseModalErr.bind(this)
        this.handleShowModalAlertDelete = this.handleShowModalAlertDelete.bind(this)
        this.handleCloseModalAlertDelete = this.handleCloseModalAlertDelete.bind(this)
        this.showFormInfoHouse = this.showFormInfoHouse.bind(this)
    }

    getAllHouses = () => {
        let link = `${linkMembers}GetAllHouses`
        axios.post(link).then(async (res) => {
            await this.setState({ listHouses: res.data });
            
            await this.state.listHouses.map(async (item, key)=>{
                await this.GetNameAndTypeWardByIdWard(item.WardIdward)
                this.setState(prevState => {
                    let newItems = [...prevState.listHouses];
                    newItems[key].WardIdward = this.state.nameward
                    return {listHouses: newItems};
                })
            }) 

            await this.state.listHouses.map(async (item, key)=>{
                await this.GetNameAndTypeDistrictByIdDistrict(item.DistrictIddistrict)
                this.setState(prevState => {
                    let newItems = [...prevState.listHouses];
                    newItems[key].DistrictIddistrict = this.state.namedistrict
                    return {listHouses: newItems};
                })
            }) 

            await this.state.listHouses.map(async (item, key)=>{
                await this.GetNameAndTypeProvinceByIdProvince(item.ProvinceIdprovince)
                this.setState(prevState => {
                    let newItems = [...prevState.listHouses];
                    newItems[key].ProvinceIdprovince = this.state.nameprovince
                    return {listHouses: newItems};
                })
            }) 
        }).catch(err => {
            console.log(err)
        })
    }
    
    GetNameAndTypeProvinceByIdProvince = async (idprovince) =>{
        const link = `${linkMembers}GetNameAndTypeProvinceByIdProvince/${idprovince}`
        await axios.post(link).then(async (req) => {
            const reqProvince = req.data // data respond from server 
            this.setState({ 
                nameprovince: reqProvince.nameprovince, typeprovince : reqProvince.typeprovince  
            });
            }).catch(err=>{
                this.setState({ errSystem : true  });
                this.handleShowModalErr()
        }) 
    }

    GetNameAndTypeDistrictByIdDistrict = async(iddistrict) =>{
        const link = `${linkMembers}GetNameAndTypeDistrictByIdDistrict/${iddistrict}`
        await axios.post(link).then(async (req) => {
            const reqDistrict = req.data // data respond from server 
            this.setState({ 
                namedistrict: reqDistrict.namedistrict, typedistrict : reqDistrict.typedistrict  
            });
            }).catch(err=>{
                this.setState({ errSystem : true  });
                this.handleShowModalErr()
        }) 
    }

    GetNameAndTypeWardByIdWard = async(idward) =>{
        const link = `${linkMembers}GetNameAndTypeWardByIdWard/${idward}`
        await axios.post(link).then(async (req) => {
            const reqWard = req.data // data respond from server 
            this.setState({ nameward : reqWard.nameward, typeward: reqWard.typeward  });
            }).catch(err=>{
                this.setState({ errSystem : true  });
                this.handleShowModalErr()
        }) 
    }

    handleShowModalErr = () => {
        this.setState({ showModalErr: true });
    }

    handleCloseModalErr = () => {
        this.setState({ showModalErr: false });
    }

    handleShowModalAlertDelete = (id, imghouse) => {
        this.setState({ showModalAlertDelete : true, iddelete : id , imghousedelete: imghouse });
    }

    handleCloseModalAlertDelete = (param) => {
        if(param === 'n'){
            this.setState({ showModalAlertDelete : false  });
        }else{
            this.handleDeleteHouse(this.state.iddelete, this.state.imghousedelete)
            this.setState({ showModalAlertDelete : false  });
        }
        
    }

    handUpdateMarkDelete = (type, idhouse, key) =>{
        const link = `${linkMembers}UpdateMarkDeleteByIdhouse/${type}/${idhouse}`
        axios.post(link).then(res=>{
            if(res.data === 'success'){
                this.setState(prevState => {
                    const newItems = [...prevState.listHouses];
                    newItems[key].markdelete = type === "m"?1:0;
                    return {listHouses: newItems};
                })
            }
        }).catch(err=>{
            this.setState({ errSystem : true  });
            this.handleShowModalErr()
        }) 
    }

    handleDeleteHouse = (idhouse, imghousedelete)=>{
        const link = `${linkHouses}DeleteHouse/${idhouse}/${imghousedelete}`
        axios.post(link).then(res=>{
            if(res.data === 'success'){
                this.getAllHouses()
            }
        })
    }

    componentDidMount() {
        this.getAllHouses()     
    }

    showFormInfoHouse = (idhouse) => {
        this.setState({ showInfoHouse : true , idhouseinfo: idhouse});
    }

    renderHouse = () => {
        return this.state.listHouses.map((item, key) => (
            <tr key={key}>
                <td>{++key}</td>
                <td><img src={item.imghouse.length !== null ? `../../uploads/houses/${item.imghouse}` : "../lib/images/hau.jpg"} className="img-fluid" alt="avatar" width="50%"/></td>
                <td>{item.namehouse}</td>
                <td>
                {
                    item.address + ", " + item.WardIdward + ", " + item.DistrictIddistrict + ", " + item.ProvinceIdprovince
                }
                </td>
                <td>
                    <button className="btn btn-block btn-info" onClick={() => this.showFormInfoHouse(item.idhouse)} style={{color: "#fff"}}>
                        <i className="fas fa-edit"></i>
                    </button>
                </td>
                <td>
                    {item.markdelete === 0 ?
                        <button className="btn btn-block btn-success" name={"m/" + item.idhouse + "/"+ key} onClick={() => this.handUpdateMarkDelete('m', item.idhouse, --key)}>
                            <i className="fas fa-lock-open"></i>
                        </button>:
                        <button className="btn btn-block btn-warning" name={"u/" + item.idhouse+ "/"+ key} onClick={() => this.handUpdateMarkDelete('u', item.idhouse, --key)}>
                            <i className="fas fa-lock"></i>
                        </button>
                    }
                    
                </td>
                <td>
                    <button className="btn btn-block btn-danger" name={"m/" + item.idhouse + "/"+ key} onClick={() => this.handleShowModalAlertDelete(item.idhouse, item.imghouse)}>
                    <i className="fas fa-trash-alt"></i>
                        </button>                    
                </td>
            </tr>
        ))
    }

    showFormAddHouse = (e) => {
        e.preventDefault()
        this.setState({ showFormAddHouse: true });
    }

    callbackHandlerFunction = (clickStatus, dataAdd) => {
        if(clickStatus===true){
            this.setState({
                showFormAddHouse: !clickStatus,
                showInfoHouse: !clickStatus,
                dataAdd: dataAdd,
            });
            this.getAllHouses()
        }else{
            this.setState({
                showFormAddHouse: clickStatus,
            });
        }
    }

    render() {
        const tableHouse = (<div className="col-12">
            <div className="table-responsive text-center">
                <table className="table">
                    <thead className="thead-success">
                        <tr>
                            <th width="10%">Lưu xá</th>
                            <th width="15%">Ảnh đại diện</th>
                            <th width="25%">Tên Lưu xá</th>
                            <th width="41%">Địa chỉ</th>
                            <th width="3%">Sửa</th>
                            <th>Mở / Khóa</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHouse()}
                    </tbody>
                </table>
            </div>
        </div>)
        return (
            <section className="main-content">
                <Modal show={this.state.showModalAlertDelete} onHide={this.handleCloseModalAlertDelete} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Bạn có chắc chắn muốn xóa lưu xá này ? </p>
                            <img src="./lib/images/warning.gif" alt="load" width="10%"/>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter modalAsk">
                        <button className="btn btn-success" onClick={() => this.handleCloseModalAlertDelete("n")}>
                            Không
                        </button>  
                        <button className="btn btn-success" onClick={() => this.handleCloseModalAlertDelete("y")}>
                            Có
                        </button> 
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModalErr} onHide={this.handleCloseModalErr} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Hệ thống xử lý đã xảy ra lỗi <br />
                            Vui lòng nhấn F5 để thử lại <br />
                            Xin cảm ơn !!!</p> 
                            <img src="./lib/images/warning.gif" alt="load" width="10%"/>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <button className="btn btn-success" onClick={this.handleCloseModalErr}>
                            <i className="fas fa-times"></i>&nbsp; Thoát
                        </button> 
                        
                    </Modal.Footer>
                </Modal>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-shared">
                                {this.state.showFormAddHouse ? "Thêm lưu xá" : this.state.showInfoHouse ? "Thông tin lưu xá ": "Danh sách các lưu xá"}
                            </div>
                        </div>
                        {!this.state.showInfoHouse && !this.state.showFormAddHouse ? <div className="col-12 text-right">
                            <div className="form-group">
                                <button className="btn btn-outline-success" onClick={this.showFormAddHouse}>
                                    <i className="fas fa-plus"></i> &nbsp; Thêm lưu xá
                                </button>
                            </div>
                        </div> : ""}
                        {this.state.showFormAddHouse ? 
                        <AddHouse handleClickParent={this.callbackHandlerFunction}></AddHouse> : 
                        (this.state.showInfoHouse ? <InfoHouseDetailAdmin handleClickParent={this.callbackHandlerFunction} idhouse ={this.state.idhouseinfo} ></InfoHouseDetailAdmin> : tableHouse)}
                    </div>
                </div>
            </section>
        );
    }
}

export default ListHouseAdmin;