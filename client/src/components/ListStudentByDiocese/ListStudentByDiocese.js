import React, { Component } from 'react';
import $ from 'jquery'
import { Link,withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import {firstBy} from "thenby";

import axios from 'axios'
const linkStudents = 'http://localhost:8000/students/'
const linkMembers = 'http://localhost:8000/members/'

class ListStudentByDiocese extends Component {
    constructor(props) {
        super(props)
        this.state = {
            /* info account */
            idaccount : '',
            avatar :'', 
            holyname : '', 
            lastname : '', 
            firstname: '', 
            phone : '', 
            email : '', 
            HouseIdhouse : '', 
            iddiocese : 18,
            namediocese: '',

            filterBy: 'increaseHouseIdhouse', // sort by increase of id house
            listStudents: [],
            listDioceses: [],
            errSystem : false,
            showModalErr: false,
            showModalLoading: false
        }

        this.handleShowModalErr = this.handleShowModalErr.bind(this)
        this.handleCloseModalErr = this.handleCloseModalErr.bind(this)
        this.handleShowModalLoading = this.handleShowModalLoading.bind(this)
        this.handleCloseModalLoading = this.handleCloseModalLoading.bind(this)
    }

    filterList = () =>{
        $(document).ready(function(){
            $("#myInput").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function() {
                return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    }
    
    // sort increase or decrease based on filterBy
    sortIncreseOrDecrease = async (arr, filterBy, ascOrDesc) => { 
        let colFilter = filterBy + ''
        colFilter = colFilter.substr(8, colFilter.length)
        if(ascOrDesc === 'asc'){
            return arr.sort(
                firstBy(colFilter)
            )
        }
        else if(ascOrDesc === 'desc'){
                return arr.sort(
                firstBy(colFilter, -1)
            )
        }
    }

    /* get all students current at all house based on id diocese*/
    getAllStudentsByIdDiocese = async (iddiocese) =>{
        const link = `${linkStudents}getallstudentsbyiddiocese/${iddiocese}`
        await axios.post(link)
            .then((req) => {
                const reqAllStudents = req.data // data respond from server
                const list = []
                reqAllStudents.map((item) => {
                    /* const { idaccount, avatar, holyname, lastname, firstname, phone, birth, nativeland, email, facebook, idschool, specialized, yearstudent, skill, monthjoin, yearjoin, fathername, mothername, numberparent1, numberparent2, idhouse, iddiocese, idparish, idprovince, iddistrict, idward, address,} = item */
                    const { idaccount, avatar, holyname, lastname, firstname, phone, email, HouseIdhouse} = item
                    let data = { idaccount: idaccount, avatar: avatar, holyname: holyname, lastname: lastname, firstname: firstname, phone: phone, email: email, HouseIdhouse: HouseIdhouse }
                    list.push(data)

                    this.sortIncreseOrDecrease(list, this.state.filterBy , 'asc')
                })
                this.setState({ listStudents: list });
            }
        ).catch(err=>{
            this.setState({ errSystem : true  });
            this.handleShowModalErr()
        })
    }

    // get all diocese
    getAllDioceses = () => {
        const link = `${linkMembers}getalldioceses`
        axios.get(link).then(req => {
            const reqDioceses = req.data // data respond from server
            const list = []
            reqDioceses.map((item) => {
                const { id, namediocese } = item
                let data = { iddiocese: id, namediocese: namediocese }
                list.push(data)
            })
            this.setState({ listDioceses: list });
        }).catch(err=>{
            this.setState({ errSystem : true  });
            this.handleShowModalErr()
        })
    }

    getNameDioceseByIdDiocese = (iddiocese) =>{
        const link = `${linkMembers}getnamediocesebyiddiocese/${iddiocese}`
        axios.get(link).then(req => {
            const reqProvince = req.data.namediocese // data respond from server 
            this.setState({ namediocese: reqProvince});
            }).catch(err=>{
                this.setState({ errSystem : true  });
                this.handleShowModalErr()
            })
            
    }

     // map row info each account
    renderRowAccount = () => {
        if (this.state.listStudents.length > 0) {
            return this.state.listStudents.map((item, key) => (
                <tr key={key}>
                    <td>{++key}</td>
                    <td>
                        <img src={item.avatar.length !== null ? `../../uploads/accounts/${item.avatar}` :  "../lib/images/hau.jpg" } className="img-fluid" alt="avatar"/>
                    </td>
                    <td>{item.idaccount}</td>
                    <td>{item.holyname}</td>
                    <td>{item.lastname + ' ' + item.firstname}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td className="text-center">{item.HouseIdhouse}</td>
                    <td className="text-center"><Link to={`InfoStudentDetailPage/${item.idaccount}`}><i className="fas fa-eye"></i></Link></td>
                </tr>
            ))
        }
    }

    // map option diocese
    // <option value="1">TGP Hà Nội</option>
    renderDiocese = () => {
        if (this.state.listDioceses.length > 0) {
            return this.state.listDioceses.map((item, key) => (
                <option key={item.iddiocese} value={item.iddiocese}>{item.namediocese}</option>
            ))
        }
    }

    onChange = async (e) => {
        let name = e.target.name
        let value = e.target.value
        await this.setState({ [name]: value })
        console.log(name)
        if(name === 'iddiocese'){
            this.getNameDioceseByIdDiocese(this.state.iddiocese)
            this.getAllStudentsByIdDiocese(this.state.iddiocese)
        }
    }

    handleShowModalErr = () => {
        this.setState({ showModalErr: true });
    }

    handleCloseModalErr = () => {
        this.setState({ showModalErr: false });
    }

    handleShowModalLoading = () => {
        this.setState({ showModalLoading: true });
    }

    handleCloseModalLoading = () => {
        this.setState({ showModalLoading: false });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextState.filterBy.startsWith('increase')){ // increase
            this.sortIncreseOrDecrease(this.state.listStudents, nextState.filterBy, 'asc')
        } else if(nextState.filterBy.startsWith('decrease')){ // decrease
            this.sortIncreseOrDecrease(this.state.listStudents, nextState.filterBy, 'desc')
        }
    }

    componentWillMount() {
        this.handleShowModalLoading()
    }

    componentDidMount(){
        this.handleCloseModalLoading()
        this.filterList()
        this.getAllDioceses()
        this.getNameDioceseByIdDiocese(this.state.iddiocese)
        this.getAllStudentsByIdDiocese(this.state.iddiocese)
    }

    render() {
        return (
            <section className="main-content">
                <Modal show={this.state.showModalLoading} onHide={this.handleCloseModalLoading} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p  className="pModal">Hệ thống đang truy vấn dữ liệu <br /><br />
                        Vui lòng chờ trong giây lát<br /><br />
                        Xin cảm ơn !!! <br /><br /><img src="./lib/images/loading.gif" alt="load" width="10%"/></p> 
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalLoading}></i>    
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModalErr} onHide={this.handleCloseModalErr} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p  className="pModal">Hệ thống xử lý đã xảy ra lỗi <br /><br />
                        Vui lòng nhấn F5 để thử lại <br /><br />
                        Xin cảm ơn !!!</p> 
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalErr}></i>    
                    </Modal.Footer>
                </Modal>
                <div className="title-shared">
                    Danh sách sinh viên giáo phận {this.state.namediocese}
                </div>
                <div className="table-list">
                    <div className="container-fluid">
                        <div className="row d-flex flex-row-reverse">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="input-group mb-3">
                                    <input className="form-control form-control-sm" id="myInput" type="text" placeholder="Tìm kiếm .."/>
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="form-group">
                                    <select className="form-control form-control-sm"  name="iddiocese" onChange={this.onChange} value={this.state.iddiocese} style={{ textTransform: 'capitalize' }}>
                                        {this.renderDiocese()}
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="form-group">
                                <select className="form-control form-control-sm"  name="filterBy" onChange={this.onChange} value={this.state.filterBy}>
                                    <optgroup label="Theo lưu xá">
                                        <option value="increaseHouseIdhouse">Tăng dần theo lưu xá</option>
                                        <option value="decreaseHouseIdhouse">Giảm dần theo lưu xá</option>
                                    </optgroup>
                                    <optgroup label="Theo tên">
                                        <option value="increasefirstname">Tăng dần theo tên</option>
                                        <option value="decreasefirstname">Giảm dần theo tên</option>
                                    </optgroup>
                                    <optgroup label="Theo mã số">
                                        <option value="increaseidaccount">Tăng dần theo mã số</option>
                                        <option value="decreaseidaccount">Giảm dần theo mã số</option>
                                    </optgroup>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                    {this.state.listStudents.length > 0 ? 
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                            <thead className="thead-light">
                                    <tr className="text-center">
                                    <th>STT</th>
                                        <th width="3%">Avatar</th>
                                        <th>Mã Số</th>
                                        <th>Tên Thánh</th>
                                        <th>Họ Tên</th>
                                        <th>Điện Thoại</th>
                                        <th>Email</th>
                                        <th>Lưu xá</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    {this.renderRowAccount()}
                                </tbody>
                            </table>  
                        </div>:  `Không có sinh viên thuộc giáo phận ${this.state.namediocese}`}
                    </div>
                </div>
                {this.state.listStudents.length <= 20 ? "" : 
                <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="true">Previous</a></li>
                            <li className="page-item active"><a className="page-link" href="true">1</a></li>
                            <li className="page-item"><a className="page-link" href="true">2</a></li>
                            <li className="page-item"><a className="page-link" href="true">3</a></li>
                            <li className="page-item"><a className="page-link" href="true">Next</a></li>
                        </ul>
                    </div>
                </div> 
                }
            </section>
        );
    }
}

export default withRouter(ListStudentByDiocese)