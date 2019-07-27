import React, { Component } from 'react'
import './Register.css'
import { withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
const linkMembers = 'http://localhost:8000/members/'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            codeCheck: '',
            avatar: '',
            holyname: '',
            firstname: '',
            lastname: '',
            phone: '',
            password: '',
            passwordconfirm: '',
            birth: '',
            nativeland: '',
            email: '',
            facebook: '',
            idschool: 65, // Đại học Khoa Học Tự Nhiên
            specialized: '',
            yearstudent: 1,
            idhouse: 1,
            monthjoin: 1,
            yearjoin: 2019,
            fathername: '',
            mothername: '',
            numberparent1: '',
            numberparent2: '',
            iddiocese: 27, // Xuân Lộc
            idparish: 2923, // Bình Lâm
            idprovince: 75,// Đồng Nai 
            iddistrict: 734,// Tân Phú 
            idward: 26158, // Phú Bình
            address: '',
            skill: '',
            oldmember: false,// default is false: mean current member
            check: '',

            /*  */
            avatarE: '',
            holynameE: '',
            firstnameE: '',
            lastnameE: '',
            phoneE: '',
            passwordE: '',
            passwordconfirmE: '',
            birthE: '',
            nativelandE: '',
            emailE: '',
            specializedE: '',
            fathernameE: '',
            mothernameE: '',
            numberparent1E: '',
            numberparent2E: '',
            addressE: '',
            checkE: '',

            pageE: 1,
            showModal: false,

            listDioceses: [],
            listParishes: [],
            listProvinces: [],
            listDistricts: [],
            listWards: [],
            listSchools: [],
            listHouses: [],

            image: 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
            crop: { x: 0, y: 0 },
            zoom: 1,
            aspect: 3 / 3,

            upImgSingle: false

        }
        this.handleRegister = this.handleRegister.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handleOldMember = this.handleOldMember.bind(this)
        this.changePageE = this.changePageE.bind(this)
        this.handleToLogin = this.handleToLogin.bind(this)
        this.handleShowModal = this.handleShowModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)

        this.onChangeImgSingle = this.onChangeImgSingle.bind(this);
        this.handleUploadSingleImage = this.handleUploadSingleImage.bind(this);
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

    onChangeImgSingle(e) {
        this.setState({ upImgSingle : true  });
        this.handleUploadSingleImage();
    }

    onCropChange = crop => {
        this.setState({ crop })
    }

    onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }

    onZoomChange = zoom => {
        this.setState({ zoom })
    }


    changePageE = (numPage) => {
        this.setState({ pageE: numPage });
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handleRegister = async (e) => {
        e.preventDefault()
        let self = this
        let { avatar, holyname, firstname, lastname, phone, password, passwordconfirm, birth, nativeland, email, facebook, idschool, specialized, yearstudent, idhouse, monthjoin, yearjoin, fathername, mothername, numberparent1, numberparent2, iddiocese, idparish, idprovince, iddistrict, idward, address, skill, oldmember, check, codeCheck } = this.state

        let listError = ['avatarE', 'holynameE', 'firstnameE', 'lastnameE', 'phoneE', 'passwordE', 'passwordconfirmE', 'birthE', 'nativelandE', 'emailE', 'specializedE', 'fathernameE', 'mothernameE', 'numberparent1E', 'numberparent2E', 'addressE', 'checkE']

        await listError.forEach(element => {
            self.setState({ [element]: "" });
        });

        const data = {
            avatar: avatar,
            holyname: holyname,
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            password: password,
            passwordconfirm: passwordconfirm,
            birth: birth,
            nativeland: nativeland,
            email: email,
            facebook: facebook,
            idschool: parseInt(idschool),
            specialized: specialized,
            yearstudent: parseInt(yearstudent),
            monthjoin: parseInt(monthjoin),
            yearjoin: parseInt(yearjoin),
            fathername: fathername,
            mothername: mothername,
            numberparent1: numberparent1,
            numberparent2: numberparent2,
            idhouse: parseInt(idhouse),
            iddiocese: parseInt(iddiocese),
            idparish: parseInt(idparish),
            idprovince: parseInt(idprovince),
            iddistrict: parseInt(iddistrict),
            idward: parseInt(idward),
            address: address,
            skill: skill,
            oldmember: oldmember,
            check: check,
            codecheck: codeCheck
        }

        const link = `${linkMembers}register`
        await axios.post(link, data)
            .then(async (req) => {
                if (req.data.errors) {
                    let dataErrors = Object.keys(req.data.errors).map((key) => req.data.errors[key]);
                    await dataErrors.map(async (error) => {
                        await self.setState({ [error.name + 'E']: error.value })
                    })
                    if (
                        self.state.avatarE !== '' || self.state.holynameE !== '' ||
                        self.state.lastnameE !== '' || self.state.firstnameE !== '' ||
                        self.state.phoneE !== '' || self.state.passwordE !== '' ||
                        self.state.passwordconfirmE !== ''
                    ) {
                        await this.changePageE(1)
                        return
                    } else if (
                        self.state.birthE !== '' || self.state.nativelandE !== '' ||
                        self.state.emailE !== '' || self.state.specializedE !== ''
                    ) {
                        await this.changePageE(2)
                        return
                    } else if (
                        self.state.fathernameE !== '' || self.state.mothernameE !== '' ||
                        self.state.numberparent1E !== '' || self.state.numberparent2E !== '' ||
                        self.state.addressE !== '' || self.state.checkE !== ''
                    ) {
                        await this.changePageE(3)
                        return
                    }
                    this.createCodeCheck(6)
                } else {
                    if (req.data.success) {

                        this.handleShowModal()
                    }
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleOldMember = async () => {
        let stateoldmember = !this.state.oldmember
        await this.setState({ oldmember: stateoldmember })
    }

    onChange = async (e) => {
        let name = e.target.name
        let value = e.target.value
        await this.setState({ [name]: value })
        if (name === 'iddiocese') {
            this.getParishByIdDiocese(this.state.iddiocese)
        }
        if (name === 'idprovince') {
            this.getDistrictByIdProvince(this.state.idprovince)
        }
        if (name === 'iddistrict') {
            this.getWardByIdDistrict(this.state.iddistrict)
        }
    }

    handleToLogin = () => {
        this.props.history.push(`login`);
        /*         window.location = '/login' */
    }

    process = async () => {
        let iconProcess = document.querySelectorAll('.icon-process-register')
        let infoProcess = document.querySelectorAll('.info-process')
        let lineProcess = document.querySelector('.line-process')
        let _formAccount = document.getElementById('_formAccount')
        let _formProfile = document.getElementById('_formProfile')
        let _formDifferent = document.getElementById('_formDifferent')

        // btn register and next prev
        let btnNext = document.querySelectorAll('.btn-next')
        let btnPrev = document.querySelectorAll('.btn-prev')

        await iconProcess[0].addEventListener('click', (e) => {
            this.setState({ pageE: 1 });
            iconProcess[0].classList.add('active')
            iconProcess[1].classList.remove('active')
            iconProcess[2].classList.remove('active')

            infoProcess[0].classList.add('active')
            infoProcess[1].classList.remove('active')
            infoProcess[2].classList.remove('active')

            lineProcess.classList.add('first-process')
            lineProcess.classList.remove('second-process')
            lineProcess.classList.remove('third-process')

            _formAccount.classList.add('active')
            _formProfile.classList.remove('active')
            _formDifferent.classList.remove('active')
        })

        await iconProcess[1].addEventListener('click', (e) => {
            this.setState({ pageE: 2 })
            iconProcess[0].classList.remove('active')
            iconProcess[1].classList.add('active')
            iconProcess[2].classList.remove('active')

            infoProcess[0].classList.remove('active')
            infoProcess[1].classList.add('active')
            infoProcess[2].classList.remove('active')

            lineProcess.classList.remove('first-process')
            lineProcess.classList.add('second-process')
            lineProcess.classList.remove('third-process')

            _formAccount.classList.remove('active')
            _formProfile.classList.add('active')
            _formDifferent.classList.remove('active')
        })

        await iconProcess[2].addEventListener('click', (e) => {
            this.setState({ pageE: 3 })
            iconProcess[0].classList.remove('active')
            iconProcess[1].classList.remove('active')
            iconProcess[2].classList.add('active')

            infoProcess[0].classList.remove('active')
            infoProcess[1].classList.remove('active')
            infoProcess[2].classList.add('active')

            lineProcess.classList.remove('first-process')
            lineProcess.classList.remove('second-process')
            lineProcess.classList.add('third-process')

            _formAccount.classList.remove('active')
            _formProfile.classList.remove('active')
            _formDifferent.classList.add('active')
        })

        await btnNext[0].addEventListener('click', (e) => {
            this.setState({ pageE: 2 })
            iconProcess[0].classList.remove('active')
            iconProcess[1].classList.add('active')
            iconProcess[2].classList.remove('active')

            infoProcess[0].classList.remove('active')
            infoProcess[1].classList.add('active')
            infoProcess[2].classList.remove('active')

            lineProcess.classList.remove('first-process')
            lineProcess.classList.add('second-process')
            lineProcess.classList.remove('third-process')

            _formAccount.classList.remove('active')
            _formProfile.classList.add('active')
            _formDifferent.classList.remove('active')
        })

        await btnNext[1].addEventListener('click', (e) => {
            this.setState({ pageE: 3 })
            iconProcess[0].classList.remove('active')
            iconProcess[1].classList.remove('active')
            iconProcess[2].classList.add('active')

            infoProcess[0].classList.remove('active')
            infoProcess[1].classList.remove('active')
            infoProcess[2].classList.add('active')

            lineProcess.classList.remove('first-process')
            lineProcess.classList.remove('second-process')
            lineProcess.classList.add('third-process')

            _formAccount.classList.remove('active')
            _formProfile.classList.remove('active')
            _formDifferent.classList.add('active')
        })

        await btnPrev[0].addEventListener('click', (e) => {
            this.setState({ pageE: 1 })
            iconProcess[0].classList.add('active')
            iconProcess[1].classList.remove('active')
            iconProcess[2].classList.remove('active')

            infoProcess[0].classList.add('active')
            infoProcess[1].classList.remove('active')
            infoProcess[2].classList.remove('active')

            lineProcess.classList.add('first-process')
            lineProcess.classList.remove('second-process')
            lineProcess.classList.remove('third-process')

            _formAccount.classList.add('active')
            _formProfile.classList.remove('active')
            _formDifferent.classList.remove('active')
        })

        await btnPrev[1].addEventListener('click', (e) => {
            this.setState({ pageE: 2 })
            iconProcess[0].classList.remove('active')
            iconProcess[1].classList.add('active')
            iconProcess[2].classList.remove('active')

            infoProcess[0].classList.remove('active')
            infoProcess[1].classList.add('active')
            infoProcess[2].classList.remove('active')

            lineProcess.classList.remove('first-process')
            lineProcess.classList.add('second-process')
            lineProcess.classList.remove('third-process')

            _formAccount.classList.remove('active')
            _formProfile.classList.add('active')
            _formDifferent.classList.remove('active')
        })
    }

    createCodeCheck = (length) => {
        let s = ''
        let randomchar = function () {
            let n = Math.floor(Math.random() * 62)
            if (n < 10) return n //1-10
            if (n < 36) return String.fromCharCode(n + 55) //A-Z
            return String.fromCharCode(n + 61) //a-z
        }
        while (s.length < length) s += randomchar()
        return s
    }

    async componentDidMount() {
        this.process()
        this.setState({ codeCheck: this.createCodeCheck(6) })
        await this.changePageE(this.state.pageE)

        /* diocese */
        this.getAllDioceses()
        this.getParishByIdDiocese(this.state.iddiocese)

        /* province district ward */
        this.getAllProvince()
        this.getDistrictByIdProvince(this.state.idprovince)
        this.getWardByIdDistrict(this.state.iddistrict)

        /* school */
        this.getAllSchool()

        /* house */
        this.getIdAndNameAllHouses()
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
            this.setState({ listSchools: list });
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
        if (this.state.pageE === 3) {
            return this.state.listDioceses.map((item) => (
                <option key={item.iddiocese} value={item.iddiocese}>{item.namediocese}</option>
            ))
        }
    }

    // map option parish
    // <option value="11">Bình Lâm</option>
    renderParish = () => {
        if (this.state.pageE === 3 && this.state.listParishes.length > 0) {
            return this.state.listParishes.map((item) => (
                <option key={item.idparish} value={item.idparish}>{item.nameparish}</option>
            ))
        }
    }

    // map option province
    // <option value="11">Đồng Nai</option>
    renderProvince = () => {
        if (this.state.pageE === 3) {
            return this.state.listProvinces.map((item) => (
                <option key={item.idprovince} value={item.idprovince}>{item.nameprovince}</option>
            ))
        }
    }

    // map option district
    // <option value="11">Tân Phú</option>
    renderDistrict = () => {
        if (this.state.pageE === 3 && this.state.listDistricts.length > 0) {
            return this.state.listDistricts.map((item) => (
                <option key={item.iddistrict} value={item.iddistrict}>{item.namedistrict}</option>
            ))
        }
    }

    // map option ward
    // <option value="11">Phú Bình</option>
    renderWard = () => {
        if (this.state.pageE === 3 && this.state.listWards.length > 0) {
            return this.state.listWards.map((item) => (
                <option key={item.idward} value={item.idward}>{item.nameward}</option>
            ))
        }
    }

    // map option school
    // <option value="1">ĐH Khoa Học Tự Nhiên</option>
    renderSchool = () => {
        if (this.state.pageE === 2) {
            return this.state.listSchools.map((item) => (
                <option key={item.idschool} value={item.idschool}>{item.nameschool}</option>
            ))
        }
    }

    // map option house
    // <option value="1">Nhà 1 - Vinh Sơn</option>
    renderHouse = () => {
        if (this.state.pageE === 2) {
            return this.state.listHouses.map((item) => (
                <option key={item.idhouse} value={item.idhouse}>Nhà {item.idhouse} - {item.namehouse}</option>
            ))
        }
    }

    // map option month
    // <option value="1">1</option>
    renderMonth = () => {
        if (this.state.pageE === 2) {
            let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            return months.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))
        }
    }

    // map option year
    // <option value="2019">2019</option>
    renderYear = () => {
        if (this.state.pageE === 2) {
            let years = []
            let yearNow = new Date().getFullYear()
            for (let i = yearNow; i >= 2007; i--) {
                years.push(i)
            }
            return years.map((item) => (
                <option key={item} value={item}>{item}</option>
            ))
        }
    }

    render() {
        return (
            <div id="_registerMember" history={this.props.history}>
                <Modal show={this.state.showModal} onHide={this.handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p  className="pModal">Chúc mừng tài khoản <b style={{ color: "#027739" }}>{this.state.phone}</b>  đã đăng ký thành công. <br /><br />
                        Nếu hiện tại bạn là thành viên thì vui lòng đợi hoặc liên hệ với Ban điều hành của nhà mình để được kích hoạt tài khoản nhé. <br /><br />
                        Xin cảm ơn !!!</p> 
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleToLogin}></i>    
                    </Modal.Footer>
                </Modal>
                <div className="form-register">
                    <div className="title-register">
                        <h5>Đăng Ký Tài Khoản</h5>
                        <small>Điền đầy đủ và chính xác nhé!!!</small> <br />
                        <small style={{ color: "red" }}> (*): Thông tin bắt buộc</small>
                    </div>
                    <hr />
                    <div className="process-register">
                        <div className="container-fluid">
                            <div className="row text-center">
                                <div className="col-4">
                                    <div className="icon-process-register active">
                                        <i className="fas fa-id-badge" />
                                    </div>
                                    <small className="info-process active">Tài khoản</small>
                                </div>
                                <div className="col-4">
                                    <div className="icon-process-register =">
                                        <i className="fas fa-user" />
                                    </div>
                                    <small className="info-process">Cá nhân</small>
                                </div>
                                <div className="col-4">
                                    <div className="icon-process-register">
                                        <i className="fas fa-hashtag" />
                                    </div>
                                    <small className="info-process =">Khác</small>
                                </div>
                            </div>
                        </div>
                        <div className="line-process first-process" />
                        <div className="line-default" />
                    </div>{/* process-register */}
                    <hr />
                    <div id="_formAccount" className={this.state.pageE === 1 ? "form-content form-account active" : "form-content form-account"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 img-avatar">
                                    <label><small><i className="far fa-image" />&nbsp;Ảnh đại diện (*)</small></label>
                                    <div className="wrapper-img-avatar">
                                        {/* <Cropper id="_fileAvatar"
                                            image={this.state.image}
                                            crop={this.state.crop}
                                            zoom={this.state.zoom}
                                            aspect={this.state.aspect}
                                            onCropChange={this.onCropChange}
                                            onCropComplete={this.onCropComplete}
                                            onZoomChange={this.onZoomChange}
                                        /> */}
                                        <img id="_fileAvatar" src={this.state.avatar !=='' ? "uploads/tmp/" + this.state.avatar : "../lib/images/avt.png"} alt="" className="img-fluid" />
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
                                </div> {/* img-avatar */}
                                <div className="col-xs-12 col-md-4 info-account">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-cross" />&nbsp;Tên Thánh (*)</small></label>
                                        <input type="text" className="form-control" name="holyname" onChange={this.onChange} value={this.state.holyname} placeholder="Giuse" />
                                        <span style={{ color: "red" }}><small><i>{this.state.holynameE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="far fa-user-circle" />&nbsp;Họ tên đệm (*)</small></label>
                                        <input type="text" className="form-control" name="lastname" onChange={this.onChange} value={this.state.lastname} placeholder="Hồ Công" />
                                        <span style={{ color: "red" }}><small><i>{this.state.lastnameE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="far fa-user-circle" />&nbsp;Tên (*)</small></label>
                                        <input type="text" className="form-control" name="firstname" onChange={this.onChange} value={this.state.firstname} placeholder="Hậu" />
                                        <span style={{ color: "red" }}><small><i>{this.state.firstnameE}</i></small></span>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-4 info-account">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-mobile-alt" />&nbsp;Số điện thoại (*)</small></label>
                                        <input type="text" className="form-control" name="phone" onChange={this.onChange} value={this.state.phone} placeholder="0928143201" />
                                        <span style={{ color: "red" }}><small><i>{this.state.phoneE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-unlock-alt" />&nbsp;Mật khẩu (*)</small></label>
                                        <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" />
                                        <span style={{ color: "red" }}><small><i>{this.state.passwordE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-unlock-alt" />&nbsp;Nhập lại mật khẩu (*)</small></label>
                                        <input type="password" className="form-control" name="passwordconfirm" onChange={this.onChange} value={this.state.passwordconfirm} placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" />
                                        <span style={{ color: "red" }}><small><i>{this.state.passwordconfirmE}</i></small></span>
                                    </div>
                                </div> {/* info-account */}
                            </div>
                        </div>
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 col-md-4">
                                </div>
                                <div className="d-none d-md-block col-md-4" />
                                <div className="col-6 col-md-4">
                                    <button className="btn btn-block btn-success btn-next">Tiếp theo&nbsp;<i className="fas fa-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>{/*  form-account */}
                    <div id="_formProfile" className={this.state.pageE === 2 ? "form-content form-profile  active" : "form-content form-profile"} >
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 info-profile">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-birthday-cake" />&nbsp;Năm sinh (*)</small></label>
                                        <input type="date" className="form-control" name="birth" onChange={this.onChange} />
                                        <span style={{ color: "red" }}><small><i>{this.state.birthE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-home" />&nbsp;Quê quán (*)</small></label>
                                        <input type="text" className="form-control" name="nativeland" onChange={this.onChange} value={this.state.nativeland} placeholder="Đồng Nai" />
                                        <span style={{ color: "red" }}><small><i>{this.state.nativelandE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="far fa-envelope" />&nbsp;Email (*)</small></label>
                                        <input type="text" className="form-control" name="email" onChange={this.onChange} value={this.state.email} placeholder="daminhsinhvien@gmail.com" />
                                        <span style={{ color: "red" }}><small><i>{this.state.emailE}</i></small></span>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-4 info-profile">
                                    <div className="form-group">
                                        <label ><small><i className="fab fa-facebook" />&nbsp;Facebook</small></label>
                                        <input type="text" className="form-control" name="facebook" onChange={this.onChange} value={this.state.facebook} placeholder="BanMucVuSinhVienDaMinh" />
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-school" />&nbsp;Trường (*)</small></label>
                                        <select className="form-control" name="idschool" onChange={this.onChange} value={this.state.idschool} style={{ textTransform: 'capitalize' }}>
                                            {this.renderSchool()}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fab fa-whmcs" />&nbsp;Chuyên ngành (*)</small></label>
                                        <input type="text" className="form-control" name="specialized" onChange={this.onChange} value={this.state.specialized} placeholder="Khoa học máy tính" />
                                        <span style={{ color: "red" }}><small><i>{this.state.specializedE}</i></small></span>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-4 info-profile">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-user-graduate" />&nbsp;Sinh viên năm (*)</small></label>
                                        <select className="form-control" name="yearstudent" onChange={this.onChange} value={this.state.yearstudent}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-place-of-worship" />&nbsp;Lưu xá (*)</small></label>
                                        <select className="form-control" name="idhouse" onChange={this.onChange} value={this.state.idhouse} style={{ textTransform: 'capitalize' }}>
                                            {this.renderHouse()}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="far fa-calendar-alt" />&nbsp;Thời gian vào (*)</small></label>
                                        <div className="container-fluid w-container">
                                            <div className="row">
                                                <div className="col-6">
                                                    <select className="form-control" name="monthjoin" onChange={this.onChange} value={this.state.monthjoin}>
                                                        {this.renderMonth()}
                                                    </select>
                                                </div>
                                                <div className="col-6  w-col">
                                                    <select className="form-control" name="yearjoin" onChange={this.onChange} value={this.state.yearjoin}>
                                                        {this.renderYear()}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* info-account */}
                            </div>
                        </div>
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 col-md-4">
                                    <button className="btn btn-block btn-success btn-prev"><i className="fas fa-angle-left" />&nbsp;Trước đó</button>
                                </div>
                                <div className="d-none d-md-block col-md-4" />
                                <div className="col-6 col-md-4">
                                    <button className="btn btn-block btn-success btn-next">Tiếp theo&nbsp;<i className="fas fa-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>{/* _formProfile */}
                    <div id="_formDifferent" className={this.state.pageE === 3 ? "form-content form-different  active" : "form-content form-different"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 info-profile">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-user-friends" />&nbsp;Tên thánh - Họ tên Cha (*)</small></label>
                                        <input type="text" className="form-control" name="fathername" onChange={this.onChange} value={this.state.fathername} placeholder="Giuse Nguyễn Văn Cảnh" />
                                        <span style={{ color: "red" }}><small><i>{this.state.fathernameE}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-user-friends" />&nbsp;Tên thánh - Họ tên Mẹ (*)</small></label>
                                        <input type="text" className="form-control" name="mothername" onChange={this.onChange} value={this.state.mothername} placeholder="Anna Nguyễn Thùy Trang" />
                                        <span style={{ color: "red" }}><small><i>{this.state.mothernameE}</i></small></span>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-4 info-profile">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-phone-volume" />&nbsp;SĐT Cha / Mẹ 1 (*)</small></label>
                                        <input type="text" className="form-control" name="numberparent1" onChange={this.onChange} value={this.state.numberparent1} placeholder="0123586942" />
                                        <span style={{ color: "red" }}><small><i>{this.state.numberparent1E}</i></small></span>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-phone-volume" />&nbsp;SĐT Cha / Mẹ 2</small></label>
                                        <input type="text" className="form-control" name="numberparent2" onChange={this.onChange} value={this.state.numberparent2} placeholder="0123586942" />
                                        <span style={{ color: "red" }}><small><i>{this.state.numberparent2E}</i></small></span>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-4 info-profile">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-church" />&nbsp;Giáo phận (*)</small></label>
                                        <select className="form-control" name="iddiocese" onChange={this.onChange} value={this.state.iddiocese} style={{ textTransform: 'capitalize' }}>
                                            {this.renderDiocese()}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-cross" />&nbsp;Giáo xứ (*)</small></label>
                                        <select className="form-control" name="idparish" onChange={this.onChange} value={this.state.idparish} style={{ textTransform: 'capitalize' }}>
                                            {this.renderParish()}
                                        </select>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-12 info-address">
                                    <div className="row">
                                        <div className="col-xs-12 col-md-4">
                                            <div className="form-group">
                                                <label ><small><i className="fas fa-home" />
                                                    &nbsp;Địa chỉ nhà (*)</small></label>
                                                <select className="form-control" name="idprovince" onChange={this.onChange} value={this.state.idprovince} style={{ textTransform: 'capitalize' }}>
                                                    {this.renderProvince()}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="form-group">
                                                <label >&nbsp;</label>
                                                <select className="form-control" name="iddistrict" onChange={this.onChange} value={this.state.iddistrict} style={{ textTransform: 'capitalize' }}>
                                                    {this.renderDistrict()}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="form-group">
                                                <label >&nbsp;</label>
                                                <select className="form-control" name="idward" onChange={this.onChange} value={this.state.idward} style={{ textTransform: 'capitalize' }}>
                                                    {this.renderWard()}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" rows={3} placeholder="112 tổ 7, ấp Phú Dũng" name="address" onChange={this.onChange} value={this.state.address} />
                                                <span style={{ color: "red" }}><small><i>{this.state.addressE}</i></small></span>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-8 info-profile cn-border-left">
                                    <div className="form-group">
                                        <label ><small><i className="fas fa-skating" />&nbsp;Năng khiếu</small></label>
                                        <input type="text" className="form-control" name="skill" onChange={this.onChange} value={this.state.skill} placeholder="Guitar, Piano, Bơi lội ..." />
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-xs-12 col-md-4 info-profile cn-border-left display-flex-center">
                                    <div className="form-group margin-bottom-0">
                                        <label className="container-check margin-bottom-0"><small>Cựu thành viên lưu xá</small>
                                            <input type="checkbox" name="oldmember" onChange={this.handleOldMember} value={this.state.oldmember} />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div> {/* info-account */}
                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12 col-sm-6 info-profile cn-border-left display-flex-center">
                                    <div className="verification">
                                        <span className="code" >{this.state.codeCheck}</span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 info-profile cn-border-left">
                                    <div className="form-group">
                                        <label ><small><i className="far fa-credit-card" />&nbsp;Nhập mã kiểm tra (*)</small></label>
                                        <input type="text" className="form-control" name="check" onChange={this.onChange} value={this.state.check} />
                                        <span style={{ color: "red" }}><small><i>{this.state.checkE}</i></small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 col-md-4">
                                    <button className="btn btn-block btn-success btn-prev"><i className="fas fa-angle-left" />&nbsp;Trước đó</button>
                                </div>
                                <div className="d-none d-md-block col-md-4" />
                                <div className="col-6 col-md-4">
                                    <button className="btn btn-block btn-success btn-register" onClick={this.handleRegister}>Đăng Ký&nbsp;<i className="far fa-edit" /></button>
                                </div>
                            </div>
                        </div>
                    </div>{/* formDifferent */}
                </div>
            </div>
        )
    }
}

export default withRouter(Register)