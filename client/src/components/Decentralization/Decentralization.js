import React, { Component } from 'react';
import './Decentralization.css'
import { firstBy } from "thenby";

import axios from 'axios'
const linkHouses = 'http://localhost:8000/houses/';
const linkStudents = "http://localhost:8000/students/";

class Decentralization extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listDecentralization: [],
            listHouses: [],
            listStudents: []
        }
    }
    getIdAndNameAllHouses = async () => {
        const link = `${linkHouses}GetIdAndNameAllHouses`
        await axios.post(link)
            .then(req => {
                let reqHouses = req.data
                let itemDecentralization = []
                reqHouses.map((item) => {
                    let { idhouse, namehouse } = item
                    let data = { idhouse: idhouse, namehouse: namehouse }
                    itemDecentralization.push(data)
                })
                this.setState({ listDecentralization: itemDecentralization});
               
            })
            this.getAllStudentsByIdHouse()
            
    }

    getAllStudentsByIdHouse =  () =>{
        
         this.state.listDecentralization.map((item)=>{
            const link = `${linkStudents}GetAllStudentsByIdHouse/${item.idhouse}`
                axios.post(link)
                    .then(req=>{
                        let reqStudents = req.data
                        let itemStudent = []
                        reqStudents.map((item) => {
                            itemStudent.push(item)
                        })
                        this.setState({ listStudents: itemStudent});
                    }) 

        })
    }

    renderStudentByIdHouse = (idhouse) =>{
        return this.state.listStudents.map((item, key) => (
            <option key={item.idaccount}>{item.lastname}</option>
        ))
    }

    renderLabelHouse = () => {
        return this.state.listDecentralization.map((item) => (
            <div className="block-executive"  key={item.idhouse}>
                <label htmlFor="" className="label-house">Nhà {item.idhouse} - {item.namehouse}</label>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <label htmlFor=""><small>Trưởng Nhà</small></label>
                        <div className="form-group">
                            <select className="form-control form-control-sm">
                                {
                                    this.state.listStudents.map((item, key) => (
                                        <option key={item.idaccount}>{item.lastname}</option>
                                ))
                                }
                            </select>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor=""><small>Phó Nhà</small></label>
                        <div className="form-group">
                            <select className="form-control form-control-sm">
                                <option>Ban Điều Hành Lưu Xá</option>
                                <option>Ban Truyền Thông</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor=""><small>Quản Lý</small></label>
                        <div className="form-group">
                            <select className="form-control form-control-sm">
                                <option>Ban Điều Hành Lưu Xá</option>
                                <option>Ban Truyền Thông</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

     componentDidMount() {
         this.getIdAndNameAllHouses()
    }

    render() {
        
        return (
            <section className="main-content">

                <div className="title-shared">
                    hệ thống phân quyền
                </div>
                <div className="container-fluid">
                    <div className="row d-flex flex-row-reverse">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="form-group">
                                <select className="form-control form-control-sm">
                                    <option>Ban Điều Hành Lưu Xá</option>
                                    <option>Ban Truyền Thông</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="form-executive">
                        {this.renderLabelHouse()}
                        <div className="row d-flex flex-row-reverse">
                            <div className="col-12 col-sm-6 col-md-4">
                                <button className="btn btn-success btn-block btn-save-executive">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-communication">

                    </div>
                </div>
            </section>
        );
    }
}

export default Decentralization;