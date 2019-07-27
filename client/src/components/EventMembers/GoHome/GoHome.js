import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import Modal from 'react-bootstrap/Modal'
CKEditor.editorUrl = "https://cdn.ckeditor.com/4.11.4/full-all/ckeditor.js"

const linkGoHome = 'http://localhost:8000/gohomeovernight/';
const linkStudents = 'http://localhost:8000/students/'

class GoHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateGoHome: this.getYMD(), // get current date format with "-"" character [2019-06-15]
            timeGoHome: this.getHMS(),
            dateComeBack: this.getYMD(), // get current date format with "-"" character [2019-06-15]
            timeComeBack: this.getHMS(),
            changeData: false,
            errorChangeDate: '',
            content: 'content',

            idaccount: '',
            infoAccount: [],

            goHome: true,

            /* showModal */
            showModalWait: false,
            showModalSuccess: false  ,
            showModalExists: false,
            showModalErr: false
        }
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleShowModalWait = this.handleShowModalWait.bind(this)
        this.handleShowModalSuccess = this.handleShowModalSuccess.bind(this)
        this.handleCloseModalWait = this.handleCloseModalWait.bind(this)
        this.handleCloseModalSuccess = this.handleCloseModalSuccess.bind(this)
    }

    updateContent(newContent) {
        this.setState({
            content: newContent,
            changeData: true
        });
    }

    getYMD() {
        /* 2019-06-06 */
        var offset = +7;
        var today = new Date(
            new Date().getTime() + offset * 3600 * 1000
        ).toJSON();
        var dd =
            today.substr(8, 2).length < 2
                ? "0" + today.substr(8, 2)
                : today.substr(8, 2);
        var mm =
            today.substr(5, 2).length < 2
                ? "0" + today.substr(5, 2)
                : today.substr(5, 2);
        var yyyy = today.substr(0, 4);
        return yyyy + "-" + mm + "-" + dd;
    }

    getHMS(){
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes()
        return hour+":"+minute
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.changeData === false){
            this.setState({ errorChangeDate: 'Vui lòng nhập đầy đủ thông tin'  });
        }else{
            const link = `${linkGoHome}gohomeovernight`;
            let data = {
            idaccount: this.state.idaccount,
            fullname: this.state.infoAccount.lastname + " " + this.state.infoAccount.firstname,
            goHomeOrOvernight: this.state.goHome,
            email: this.state.infoAccount.email,
            dateGoHome: this.state.dateGoHome, 
            timeGoHome: this.state.timeGoHome, 
            dateComeBack: this.state.dateComeBack, 
            timeComeBack: this.state.timeComeBack, 
            content: this.state.content.editor.getData() 
        }
        console.log(data)
        this.handleShowModalWait()
        axios
            .post(link, data).then(req=>{
                console.log(req)
                if(req.data==='success'){
                    this.handleCloseModalWait()
                    this.handleShowModalSuccess()
                }else if(req.data === 'exists'){
                    this.handleCloseModalWait()
                    this.handleShowModalExists()
                }else if(req.data === 'error'){
                    this.handleCloseModalWait()
                    this.handleShowModalErr()  
                }
            }).catch(err=>{
                this.handleCloseModalWait()
                this.handleShowModalErr()
            })
        }
        
    }

    onChangeCK(evt) {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent,
            changeData: true
        })
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    componentWillMount(){
        if(localStorage.getItem('id_token')){
            const token = localStorage.getItem('id_token');
            const decoded = jwt_decode(token);
            this.setState({ 
                idaccount : decoded.username,
                username : decoded.firstname 
            });
        }
    }

    getAccountById = (id) =>{
        const link = `${linkStudents}GetAccountById/${id}`
        axios.post(link).then(req => {
            const reqAccount = req.data
            this.setState({ infoAccount : reqAccount });
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.setState.infoAccount !== nextState.infoAccount){
            return nextState.infoAccount
        }else return false
    }
    

    componentDidMount(){
        this.getAccountById(this.state.idaccount)
    }

    handleShowModalWait = () => {
        this.setState({ showModalWait: true });
    }

    handleShowModalSuccess = () => {
        this.setState({ showModalSuccess: true });
    }

    handleShowModalExists = () => {
        this.setState({ showModalExists: true });
    }

    handleCloseModalWait = () => {
        this.setState({ showModalWait: false });
    }

    handleCloseModalSuccess = () => {
        this.setState({ showModalSuccess: false });
    }

    handleCloseModalExists = () => {
        this.setState({ showModalExists: false });
    }

    handleShowModalErr = () => {
        this.setState({ showModalErr: true });
    }

    handleCloseModalErr = () => {
        this.setState({ showModalErr: false });
    }

    handleGoHomeOrOvernight = async (event) => {
        let change = event.target.value;
        if(change === 'overnight'){
            await this.setState({ goHome : false });
        }else{
            await this.setState({ goHome : true });
        }
        console.log(this.state.goHome);
    }

    render() {
        let goHomeOrOvernight = this.state.goHome ? "Về quê":"Qua đêm"
        return (
            <div id="_veQue" className="tab-content">
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
                        Hệ thống đang gửi mail. Vui lòng chờ ... <br/>
                        <img src="./lib/images/loading.gif" alt="load" width="10%"/>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showModalSuccess} onHide={this.handleCloseModalSuccess} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Email {goHomeOrOvernight} của bạn đã được gửi thành công.
                        <br/> Để chắc chắn xin vào email cá nhân để kiểm tra<br/>
                        Xin cảm ơn !!!</p>
                        <img src="./lib/images/successemail.gif" alt="load" width="35%"/>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalSuccess}></i>    
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModalExists} onHide={this.handleCloseModalExists} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Email {goHomeOrOvernight} của bạn đã đăng ký trước đó
                        <br/> Vui lòng kiểm tra lại<br/>
                        Xin cảm ơn !!!</p> <br/>
                        <img src="./lib/images/warning.gif" alt="load" width="10%"/>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalExists}></i>    
                    </Modal.Footer>
                </Modal>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="form-group" style={{textAlign: "center"}} onChange={this.handleGoHomeOrOvernight.bind(this)}>
                                    <div className="form-check-inline">
                                        <label className="form-check-label containerRadio" htmlFor="radio1">
                                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="gohome" defaultChecked/>Về Quê
                                            <span className="checkmark"></span>
                                        </label>
                                        </div>
                                        <div className="form-check-inline">
                                        <label className="form-check-label containerRadio" htmlFor="radio2">
                                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="overnight"/>Qua Đêm
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group" onSubmit={this.onSubmit}>
                                    <label ><small><i className="fas fa-calendar-day" />&nbsp;Ngày {goHomeOrOvernight}</small></label>
                                    <input type="date" className="form-control" name="dateGoHome" value={this.state.dateGoHome} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="far fa-clock" />&nbsp;Giờ {goHomeOrOvernight}</small></label>
                                    <input type="time" className="form-control" name="timeGoHome" value={this.state.timeGoHome} onChange={this.onChange} />
                                </div>
                                <hr />
                                <div className="form-group">
                                    <label ><small><i className="fas fa-calendar-day" />&nbsp;Ngày xuống SG</small></label>
                                    <input type="date" className="form-control" name="dateComeBack" value={this.state.dateComeBack} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label ><small><i className="far fa-clock" />&nbsp;Giờ xuống SG</small></label>
                                    <input type="time" className="form-control" name="timeComeBack" value={this.state.timeComeBack} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <label ><small><i className="fas fa-pencil-alt" />&nbsp;Nội dung email</small></label>
                                <CKEditor
                                    config={{
                                        height: 400
                                    }}
                                    activeClass="p10"
                                    content={this.state.content}
                                    onChange={this.updateContent}
                                    events={{
                                        "blur": this.onBlur,
                                        "afterPaste": this.afterPaste,
                                        "change": this.onChangeCK
                                    }}
                                    data='<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
                                    <tbody>
                                        <tr>
                                            <td style="text-align:center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsaItJzuuEhtaoQn-NqSUo6PLccRwm6ZhMyPDxmf9DixKPvKP4KGHiMo" style="height:100px; width:100px" /></td>
                                            <td>
                                            <blockquote>
                                            <h2><span style="color:#ff0000"><strong>XIN PH&Eacute;P (viết tại đ&acirc;y ......)</strong></span></h2>
                                
                                            <p><em>Giuse Khang, ng&agrave;y 22 th&aacute;ng 06 năm 2019</em></p>
                                            </blockquote>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <hr />
                                <p><span style="color:#2c3e50">K&iacute;nh gửi, Cha Giuse Ho&agrave;ng Huy Cường, đặc tr&aacute;ch lưu học x&aacute; sinh vi&ecirc;n Đaminh</span></p>
                                
                                <p><span style="color:#2c3e50">Con l&agrave; : <strong>Giuse Hồ C&ocirc;ng Hậu</strong>, hiện đang sống tại <strong>nh&agrave;&nbsp;5 - Giuse Khang</strong></span></p>
                                
                                <p><span style="color:#2c3e50">Sinh vi&ecirc;n năm 3, trường Đại Học Khoa Học Tự Nhi&ecirc;n</span></p>
                                
                                <ul>
                                    <li><span style="color:#2c3e50">L&yacute; do:&nbsp;<strong> (viết tại đ&acirc;y...........)</strong></span></li>
                                    <li><span style="color:#2c3e50">Thời gian :&nbsp;<strong>(viết tại đ&acirc;y...........)</strong></span></li>
                                    <li><span style="color:#2c3e50">Cam kết : <strong>(viết tại đ&acirc;y..........)</strong></span></li>
                                </ul>
                                
                                <p><span style="color:#2c3e50">Lời ch&uacute;c v&agrave; c&aacute;m ơn <strong>(viết tại đ&acirc;y..........)</strong></span></p>
                                
                                <p>&nbsp;</p>
                                '
                                >
                                </CKEditor>
                                {this.state.errorChangeDate === '' ? "": <span><small style={{color:"red"}}>{this.state.errorChangeDate}</small></span>}
                            </div>
                            <div className="col-12 text-right" style={{margin: "10px 0"}}>
                                <button className="btn btn-success"><i className="fas fa-edit" />&nbsp;Gửi mail</button>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="title-register-event-content">
                                Lịch đã đăng ký
                            </p> {/* title-register-event-content */}
                            <div className="table-responsive text-center">
                                <table className="table table-bordered">
                                    <thead className="thead-success">
                                        <tr>
                                            <th width="3%">STT</th>
                                            <th width="15%">Ngày về</th>
                                            <th width="15%">Ngày xuống</th>
                                            <th width="15%">Giờ về</th>
                                            <th width="15%">Giờ xuống</th>
                                            <th width="37%">Nội dung</th>
                                            <th>Hủy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2019-11-07</td>
                                            <td>2019-15-07</td>
                                            <td>13:30</td>
                                            <td>8:10</td>
                                            <td>Về quê</td>
                                            <td>
                                                <button className="btn btn-block btn-danger" onClick={this.handleCancelRegister}>
                                                <i className="fas fa-trash-alt"></i>
                                                </button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoHome;