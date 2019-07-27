import React, { Component } from 'react';
import $ from 'jquery'
import './ListAllStudent.css'
import { Link, withRouter } from 'react-router-dom'
import {firstBy} from "thenby";

import axios from 'axios'
const linkStudents = 'http://localhost:8000/students/'


class ListAllStudent extends Component {
    constructor(props) {
        super(props);
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
            active : null,

            filterBy: 'increaseHouseIdhouse', // sort by increase of id house
            listStudents: []
        }
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

    /* get all students current at all house */
    getAllStudentsActive = async () =>{
        const link = `${linkStudents}getallstudentsactive`
        await axios.post(link)
            .then((req) => {
                const reqAllStudents = req.data // data respond from server
                const list = []
                reqAllStudents.map((item) => {
                    /* const { idaccount, avatar, holyname, lastname, firstname, phone, birth, nativeland, email, facebook, idschool, specialized, yearstudent, skill, monthjoin, yearjoin, fathername, mothername, numberparent1, numberparent2, idhouse, iddiocese, idparish, idprovince, iddistrict, idward, address,} = item */
                    const { idaccount, avatar, holyname, lastname, firstname, phone, email, HouseIdhouse, active} = item
                    let data = { idaccount: idaccount, avatar: avatar, holyname: holyname, lastname: lastname, firstname: firstname, phone: phone, email: email, HouseIdhouse: HouseIdhouse, active: active }
                    list.push(data)

                    this.sortIncreseOrDecrease(list, this.state.filterBy , 'asc')
                })
                this.setState({ listStudents: list });
            }
        )
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

    onChange = async (e) => {
        let value = e.target.value
        await this.setState({ [e.target.name]: value })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.filterBy
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextState.filterBy.startsWith('increase')){ // increase
            this.sortIncreseOrDecrease(this.state.listStudents, nextState.filterBy, 'asc')
        } else if(nextState.filterBy.startsWith('decrease')){ // decrease
            this.sortIncreseOrDecrease(this.state.listStudents, nextState.filterBy, 'desc')
        }
    }

    componentDidMount(){
        this.filterList()
        this.getAllStudentsActive()
    }

    render() {
        return (
            <section className="main-content">
                <div className="title-shared">
                    Danh sách sinh viên tất cả lưu xá    
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
                            <div className="d-none d-md-block col-md-4">

                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="form-group">
                                    <select className="form-control form-control-sm" name="filterBy" onChange={this.onChange} value={this.state.filterBy}>
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
                                        <th>Lưu Xá</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    {this.renderRowAccount()}
                                </tbody>
                            </table>  
                        </div>
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

export default withRouter(ListAllStudent)