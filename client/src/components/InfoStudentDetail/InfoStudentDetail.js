import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './InfoStudentDetail.css'
import axios from 'axios'

const linkMembers = 'http://localhost:8000/members/'
const linkStudent = 'http://localhost:8000/students/'

class InfoStudentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            idaccount: null,
            avatar: null,
            holyname: null,
            firstname: null,
            lastname: null,
            phone: null,
            birth: null,
            nativeland: null,
            email: null,
            facebook: null,
            specialized: null,
            yearstudent: null,
            skill: null,
            monthjoin: null,
            yearjoin: null,
            monthunjoin: null,
            yearunjoin: null,
            fathername: null,
            mothername: null,
            numberparent1: null,
            numberparent2: null,
            address: null,
            role: null,
            typemember: null,
            active:null,
            DioceseId:null,
            DistrictIddistrict: null,
            HouseId: null,
            ParishId: null,
            ProvinceIdprovince: null,
            SchoolId:null,
            WardIdward: null,

            listDioceses: [],
            listParishes: [],
            listProvinces: [],
            listDistricts: [],
            listWards: [],
            listSchools: [],
            listHouses: [],
        }
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
        })
    }

    // get all parish based on id diocese
    getParishByIdDiocese = (id) => {
        const link = `${linkMembers}getparishesbyiddiocese/${id}`
        axios.get(link).then(req => {
            const reqParishes = req.data
            const list = []
            reqParishes.map((item) => {
                const { nameparish, id } = item
                let data = { idparish: id, nameparish: nameparish }
                list.push(data)
            })
            this.setState({ listParishes: list });
            console.log(this.state.listParishes)
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

    // get all schools
    getAllSchool = () => {
        const link = `${linkMembers}getallschools`
        axios.get(link).then(req => {
            const reqSchools = req.data // data respond from server
            const list = []
            reqSchools.map((item) => {
                const { id, nameschool } = item
                let data = { idschool: id, nameschool: nameschool }
                list.push(data)
            })
            this.setState({ listSchools: list })
        })
    }

    // get all id and name house
    getIdAndNameAllHouses = () => {
        const link = `${linkMembers}getidandnameallhouses`
        axios.get(link).then(req => {
            const reqHouses = req.data // data respond from server
            const list = []
            reqHouses.map((item) => {
                const { id, namehouse } = item
                let data = { idhouse: id, namehouse: namehouse }
                list.push(data)
            })
            this.setState({ listHouses: list });
        })
    }

    // map option diocese
    // <option value="1">TGP Hà Nội</option>
    renderDiocese = () => {
            return this.state.listDioceses.map((item) => (
                <option key={item.iddiocese} value={item.iddiocese}>{item.namediocese}</option>
            ))
    }

    // map option parish
    // <option value="11">Bình Lâm</option>
    renderParish = () => {
            return this.state.listParishes.map((item) => (
                <option key={item.idparish} value={item.idparish}>{item.nameparish}</option>
            ))
    }

    // map option province
    // <option value="11">Đồng Nai</option>
    renderProvince = () => {
            return this.state.listProvinces.map((item) => (
                <option key={item.idprovince} value={item.idprovince}>{item.nameprovince}</option>
            ))
    }

    // map option district
    // <option value="11">Tân Phú</option>
    renderDistrict = () => {
            return this.state.listDistricts.map((item) => (
                <option key={item.iddistrict} value={item.iddistrict}>{item.namedistrict}</option>
            ))
    }

    // map option ward
    // <option value="11">Phú Bình</option>
    renderWard = () => {
            return this.state.listWards.map((item) => (
                <option key={item.idward} value={item.idward}>{item.nameward}</option>
            ))
    }

    // map option school
    // <option value="1">ĐH Khoa Học Tự Nhiên</option>
    renderSchool = () => {
            return this.state.listSchools.map((item) => (
                <option key={item.idschool} value={item.idschool}>{item.nameschool}</option>
            ))
    }

    // map option house
    // <option value="1">Nhà 1 - Vinh Sơn</option>
    renderHouse = () => {
            return this.state.listHouses.map((item) => (
                <option key={item.idhouse} value={item.idhouse}>Nhà {item.idhouse} - {item.namehouse}</option>
            ))
    }

    // map option month
    // <option value="1">1</option>
    renderMonth = () => {
            let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            return months.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))
    }

    // map option year
    // <option value="2019">2019</option>
    renderYear = () => {
            let years = []
            let yearNow = new Date().getFullYear()
            for (let i = yearNow; i >= 2007; i--) {
                years.push(i)
            }
            return years.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))
    }

    getInfoStudentByIdAccount = (idaccount) =>{
        let link = `${linkStudent}GetAccountById/${idaccount}`
        axios.post(link).then(async (res) =>{
            await this.setState({ 
                idaccount: res.data.idaccount,
                avatar: res.data.avatar,
                holyname: res.data.holyname,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                phone: res.data.phone,
                birth: res.data.birth,
                nativeland: res.data.nativeland,
                email: res.data.email,
                facebook: res.data.facebook,
                specialized: res.data.specialized,
                yearstudent: res.data.yearstudent,
                skill: res.data.skill,
                monthjoin: res.data.monthjoin,
                yearjoin: res.data.yearjoin,
                monthunjoin: res.data.monthunjoin,
                yearunjoin: res.data.yearunjoin,
                fathername: res.data.fathername,
                mothername: res.data.mothername,
                numberparent1: res.data.numberparent1,
                numberparent2: res.data.numberparent2,
                address: res.data.address,
                role: res.data.role,
                typemember: res.data.typemember,
                active: res.data.active,
                DioceseId: res.data.DioceseId,
                DistrictIddistrict: res.data.DistrictIddistrict,
                HouseId: res.data.HouseId,
                ParishId: res.data.ParishId,
                ProvinceIdprovince: res.data.ProvinceIdprovince,
                SchoolId: res.data.SchoolId,
                WardIdward: res.data.WardIdward,
            });
            await this.getAllProvince()
            await this.getAllDioceses()
            await this.getAllSchool()
            await this.getIdAndNameAllHouses()
            await this.getParishByIdDiocese(res.data.DioceseId)
            await this.getDistrictByIdProvince(res.data.ProvinceIdprovince)
            await this.getWardByIdDistrict(res.data.DistrictIddistrict)
        }).catch(err=>{
            console.log(err)
        })
    }

    async componentDidMount() {
        await this.getInfoStudentByIdAccount(this.props.match.params.id)
    }

    render() {
        return (
            <section className="main-content">
                <div className="title-shared">
                    thông tin chi tiết {this.props.match.params.id}
                </div>
                <div className="block-info">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-4 img-avatar">
                                <div className="card-img">
                                    <label className="title-card"><small>Thẻ thành viên</small></label>
                                    <div className="wrapper-img-avatar">
                                        <img src={this.state.avatar !== null ? `../../uploads/accounts/${this.state.avatar}` :  "../lib/images/hau.jpg" } className="img-fluid" alt="avatar"/>
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
                                            readOnly
                                            disabled
                                            />
                                        </label>
                                    </div>
                                    <span className="idaccount-style">{this.state.idaccount}</span> <br/>
                                    <span className="fullname-style">{this.state.lastname + " " + this.state.firstname}</span>
                                    <div className="shape"></div>
                                </div>
                                <span style={{ color: "red" }}><small><i>{this.state.avatarE}</i></small></span>
                            </div> {/* img-avatar */}
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="fas fa-cross" />&nbsp;Tên Thánh (*)</small></label>
                                    <input type="text" className="form-control" name="holyname" onChange={this.onChange} defaultValue={this.state.holyname} placeholder="Giuse" />
                                    <span style={{ color: "red" }}><small><i>{this.state.holynameE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="far fa-user-circle" />&nbsp;Họ tên đệm (*)</small></label>
                                    <input type="text" className="form-control" name="lastname" onChange={this.onChange} defaultValue={this.state.lastname} placeholder="Hồ Công" />
                                    <span style={{ color: "red" }}><small><i>{this.state.lastnameE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="far fa-user-circle" />&nbsp;Tên (*)</small></label>
                                    <input type="text" className="form-control" name="firstname" onChange={this.onChange} defaultValue={this.state.firstname} placeholder="Hậu" />
                                    <span style={{ color: "red" }}><small><i>{this.state.firstnameE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-birthday-cake" />&nbsp;Năm sinh (*)</small></label>
                                    <input type="date" className="form-control" name="birth" onChange={this.onChange} />
                                    <span style={{ color: "red" }}><small><i>{this.state.birthE}</i></small></span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="far fa-envelope" />&nbsp;Email (*)</small></label>
                                    <input type="text" className="form-control" name="email" onChange={this.onChange} defaultValue={this.state.email} placeholder="daminhsinhvien@gmail.com" />
                                    <span style={{ color: "red" }}><small><i>{this.state.emailE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-place-of-worship" />&nbsp;Lưu xá (*)</small></label>
                                    <select className="form-control" name="HouseId" onChange={this.onChange} defaultValue={this.state.HouseId} style={{ textTransform: 'capitalize' }}>
                                        {this.renderHouse()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-mobile-alt" />&nbsp;Số điện thoại (*)</small></label>
                                    <input type="text" className="form-control" name="phone" onChange={this.onChange} defaultValue={this.state.phone} placeholder="0928143201" />
                                    <span style={{ color: "red" }}><small><i>{this.state.phoneE}</i></small></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="fas fa-school" />&nbsp;Trường (*)</small></label>
                                    <select className="form-control" name="idschool" onChange={this.onChange} defaultValue={this.state.idschool} style={{ textTransform: 'capitalize' }}>
                                        {this.renderSchool()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-user-graduate" />&nbsp;Sinh viên năm (*)</small></label>
                                    <select className="form-control" name="yearstudent" onChange={this.onChange} defaultValue={this.state.yearstudent}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fab fa-whmcs" />&nbsp;Chuyên ngành (*)</small></label>
                                    <input type="text" className="form-control" name="specialized" onChange={this.onChange} defaultValue={this.state.specialized} placeholder="Khoa học máy tính" />
                                    <span style={{ color: "red" }}><small><i>{this.state.specializedE}</i></small></span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="fas fa-home" />&nbsp;Quê quán (*)</small></label>
                                    <input type="text" className="form-control" name="nativeland" onChange={this.onChange} defaultValue={this.state.nativeland} placeholder="Đồng Nai" />
                                    <span style={{ color: "red" }}><small><i>{this.state.nativelandE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fab fa-facebook" />&nbsp;Facebook</small></label>
                                    <input type="text" className="form-control" name="facebook" onChange={this.onChange} defaultValue={this.state.facebook} placeholder="BanMucVuSinhVienDaMinh" />
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-skating" />&nbsp;Năng khiếu</small></label>
                                    <input type="text" className="form-control" name="skill" onChange={this.onChange} defaultValue={this.state.skill} placeholder="Guitar, Piano, Bơi lội ..." />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="far fa-calendar-alt" />&nbsp;Thời gian vào (*)</small></label>
                                    <div className="container-fluid w-container">
                                        <div className="row">
                                            <div className="col-6">
                                                <select className="form-control" name="monthjoin" onChange={this.onChange} defaultValue={this.state.monthjoin}>
                                                    {this.renderMonth()}
                                                </select>
                                            </div>
                                            <div className="col-6  w-col">
                                                <select className="form-control" name="yearjoin" onChange={this.onChange} defaultValue={this.state.yearjoin}>
                                                    {this.renderYear()}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="far fa-calendar-alt" />&nbsp;Thời gian ra (*)</small></label>
                                    <div className="container-fluid w-container">
                                        <div className="row">
                                            <div className="col-6">
                                                <select className="form-control" name="monthjoin" onChange={this.onChange} defaultValue={this.state.monthunjoin}>
                                                    {this.renderMonth()}
                                                </select>
                                            </div>
                                            <div className="col-6  w-col">
                                                <select className="form-control" name="yearjoin" onChange={this.onChange} defaultValue={this.state.yearunjoin}>
                                                    {this.renderYear()}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="fas fa-user-friends" />&nbsp;Tên thánh - Họ tên Cha (*)</small></label>
                                    <input type="text" className="form-control" name="fathername" onChange={this.onChange} defaultValue={this.state.fathername} placeholder="Giuse Nguyễn Văn Cảnh" />
                                    <span style={{ color: "red" }}><small><i>{this.state.fathernameE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-user-friends" />&nbsp;Tên thánh - Họ tên Mẹ (*)</small></label>
                                    <input type="text" className="form-control" name="mothername" onChange={this.onChange} defaultValue={this.state.mothername} placeholder="Anna Nguyễn Thùy Trang" />
                                    <span style={{ color: "red" }}><small><i>{this.state.mothernameE}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-phone-volume" />&nbsp;SĐT Cha / Mẹ 1 (*)</small></label>
                                    <input type="text" className="form-control" name="numberparent1" onChange={this.onChange} defaultValue={this.state.numberparent1} placeholder="0123586942" />
                                    <span style={{ color: "red" }}><small><i>{this.state.numberparent1E}</i></small></span>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-phone-volume" />&nbsp;SĐT Cha / Mẹ 2</small></label>
                                    <input type="text" className="form-control" name="numberparent2" onChange={this.onChange} defaultValue={this.state.numberparent2} placeholder="0123586942" />
                                    <span style={{ color: "red" }}><small><i>{this.state.numberparent2E}</i></small></span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label ><small><i className="fas fa-church" />&nbsp;Giáo phận (*)</small></label>
                                    <select className="form-control" name="DioceseId" onChange={this.onChange} defaultValue={this.state.DioceseId} style={{ textTransform: 'capitalize' }}>
                                        {this.renderDiocese()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-cross" />&nbsp;Giáo xứ (*)</small></label>
                                    <select className="form-control" name="ParishId" onChange={this.onChange} defaultValue={this.state.ParishId} style={{ textTransform: 'capitalize' }}>
                                        {this.renderParish()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="fas fa-home" />
                                        &nbsp;Địa chỉ nhà (*)</small></label>
                                    <select className="form-control" name="ProvinceIdprovince" onChange={this.onChange} defaultValue={this.state.ProvinceIdprovince} style={{ textTransform: 'capitalize' }}>
                                        {this.renderProvince()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label >&nbsp;</label>
                                    <select className="form-control" name="DistrictIddistrict" onChange={this.onChange} defaultValue={this.state.DistrictIddistrict} style={{ textTransform: 'capitalize' }}>
                                        {this.renderDistrict()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label >&nbsp;</label>
                                    <select className="form-control" name="WardIdward" onChange={this.onChange} defaultValue={this.state.WardIdward} style={{ textTransform: 'capitalize' }}>
                                        {this.renderWard()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows={3} placeholder="112 tổ 7, ấp Phú Dũng" name="address" onChange={this.onChange} defaultValue={this.state.address} />
                                    <span style={{ color: "red" }}><small><i>{this.state.addressE}</i></small></span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label className="container-check margin-bottom-0"><small>Cựu thành viên lưu xá</small>
                                        <input type="checkbox" name="oldmember" onChange={this.handleOldMember} defaultValue={this.state.oldmember} />
                                        <span className="checkmark" />
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <button className="btn btn-block btn-success btn-register" onClick={this.handleRegister}>Đăng Ký&nbsp;<i className="far fa-edit" /></button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div> {/* block-info */}
            </section>
        );
    }
}

export default withRouter(InfoStudentDetail)