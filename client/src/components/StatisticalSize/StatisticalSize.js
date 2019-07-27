import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import './StatisticalSize.css'
import axios from 'axios'
import 'chartjs-plugin-datalabels'

var Chart = require("chart.js");

const linkStudents = 'http://localhost:8000/students/'
const linkMembers = 'http://localhost:8000/members/'
class StatisticalSize extends Component {
    colors = [
        '#008000', '#FFAA1D', '#FF0800', '#E4D00A', '#FB0081', '#007FFF', '#00B7EB', '#3B7A57', '#FF8C00', '#FFF600', '#0247FE', '#BFFF00', '#F4C2C2', '#DFFF00'
    ]
    constructor(props) {
        super(props)
        this.state = {
            monthjoin: this.getMonthCurrent(),
            yearjoin: this.getYearCurrent(),
            monthunjoin: this.getMonthCurrent(),
            yearunjoin: this.getYearCurrent(),
            totalStudent: null,
            totalStudentJoin: null,
            totalStudentUnJoin: null,
            totalHouse: null,
            totalOleMember : null,
            totalStudentSchool: null,
            totalStudentDiocese: null,
            totalStudentProvince: null,

            iddiocese: 27, // Xuân Lộc
            listDioceses: [],

            idschool: 65, // Đại học Khoa Học Tự Nhiên
            listSchools: [],

            idprovince: 75,// Đồng Nai 
            listProvinces: [],

            showModalErr: false,
            showModalLoading: true,
        }

        this.handleShowModalErr = this.handleShowModalErr.bind(this)
        this.handleCloseModalErr = this.handleCloseModalErr.bind(this)
        this.handleShowModalLoading = this.handleShowModalLoading.bind(this)
        this.handleCloseModalLoading = this.handleCloseModalLoading.bind(this)
    }

    onChange = async (e) => {
        let name = e.target.name
        let value = e.target.value
        await this.setState({ [name]: value })
        if (name === 'monthjoin' || name === 'yearjoin') {
            this.countNumberStudentsByMonthYearJoin(this.state.monthjoin, this.state.yearjoin)
        }
        if (name === 'monthunjoin' || name === 'yearunjoin') {
            this.countNumberStudentsByMonthYearUnJoin(this.state.monthunjoin, this.state.yearunjoin)
        }
        if (name === 'iddiocese') {
            this.countNumberStudentsByIdDiocese(this.state.iddiocese)
        }
        if (name === 'idschool') {
            this.countNumberStudentsByIdSchool(this.state.idschool)
        }
        if (name === 'idprovince') {
            this.countNumberStudentsByIdProvince(this.state.idprovince)
        }
    }

    getRandomColor = () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor
    }

    // get month current. ex: july => result is 6 => + 1
    getMonthCurrent = () => {
        let month = new Date().getMonth() + 1
        return month
    }

    // get year current. ex: 2019
    getYearCurrent = () => {
        let year = new Date().getFullYear()
        return year
    }

     // get all diocese
    getAllDioceses = () => {
        const link = `${linkMembers}GetAllDioceses`
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

    // map option diocese
    // <option value="1">TGP Hà Nội</option>
    renderDiocese = () => {
        if (this.state.listDioceses.length > 0) {
            return this.state.listDioceses.map((item) => (
                <option key={item.iddiocese} value={item.iddiocese}>{item.namediocese}</option>
            ))
        }
    }

    // get all schools
    getAllSchool = () => {
        const link = `${linkMembers}GetAllSchools`
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

    // map option school
    // <option value="1">ĐH Khoa Học Tự Nhiên</option>
    renderSchool = () => {
        if (this.state.listSchools.length > 0) {
            return this.state.listSchools.map((item) => (
                <option key={item.idschool} value={item.idschool}>{item.nameschool}</option>
            ))
        }
    }

    // get all province
    getAllProvince = () => {
        const link = `${linkMembers}GetAllProvinces`
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

    // map option province
    // <option value="11">Đồng Nai</option>
    renderProvince = () => {
        if (this.state.listProvinces.length > 0) {
            return this.state.listProvinces.map((item) => (
                <option key={item.idprovince} value={item.idprovince}>{item.nameprovince}</option>
            ))
        }
    }

    // count total house 
    countNumberHouse = () => {
        const link = `${linkMembers}countnumberhouse`
        axios.post(link).then(req => {
            this.setState({ totalHouse: req.data.totalHouse });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student 
    countNumberStudents = () => {
        const link = `${linkStudents}countnumberstudents`
        axios.post(link).then(req => {
            this.setState({ totalStudent: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total old member 
    countNumberOldMember = () => {
        const link = `${linkStudents}countnumberoldmember`
        axios.post(link).then(req => {
            this.setState({ totalOldMember: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student join bases on month and year
    countNumberStudentsByMonthYearJoin = (monthjoin, yearjoin) => {
        const link = `${linkStudents}countnumberstudentsbymonthyearjoin/${monthjoin}/${yearjoin}`
        axios.post(link).then(req => {
            this.setState({ totalStudentJoin: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student join bases on month and year
    countNumberStudentsByMonthYearUnJoin = (monthunjoin, yearunjoin) => {
        const link = `${linkStudents}countnumberstudentsbymonthyearunjoin/${monthunjoin}/${yearunjoin}`
        axios.post(link).then(req => {
            this.setState({ totalStudentUnJoin: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student join bases on idschool
    countNumberStudentsByIdSchool = (idschool) => {
        const link = `${linkStudents}countnumberstudentsbyidschool/${idschool}`
        axios.post(link).then(req => {
            this.setState({ totalStudentSchool: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

     // count total student join bases on iddiocese
    countNumberStudentsByIdDiocese = (iddiocese) => {
        const link = `${linkStudents}countnumberstudentsbyiddiocese/${iddiocese}`
        axios.post(link).then(req => {
            this.setState({ totalStudentDiocese: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

     // count total student join bases on idprovince
     countNumberStudentsByIdProvince = (idprovince) => {
        const link = `${linkStudents}countnumberstudentsbyidprovince/${idprovince}`
        axios.post(link).then(req => {
            this.setState({ totalStudentProvince: req.data.totalStudent });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student each house. ex: 1: 35, 2: 15 ...
    countNumberStudentsEachHouse = () => {
        const link = `${linkMembers}countnumberstudentseachhouse`
        axios.post(link).then(req => {
            const reqCountStudent = req.data
            const list = []
            const labels = []
            const dataNumbers = []
            let backgroundColor = []
            let hoverBackgroundColor = []

            reqCountStudent.map((item, key) => {
                const { idhouse, namehouse, totalStudent } = item
                let data = { idhouse: idhouse, namehouse: namehouse, totalstudent: totalStudent }
                let dataLabel = 'Nhà ' + idhouse + ' : ' + namehouse
                let dataNumber = parseInt(totalStudent)
                list.push(data)
                labels.push(dataLabel)
                dataNumbers.push(dataNumber)

                /* let colorBackgroundRan = this.getRandomColor() */
                backgroundColor.push(this.colors[key])
                /* let colorHoverBackgroundRan = this.getRandomColor() */
                hoverBackgroundColor.push(this.colors[key])
            })

            // create chart pie
            const pieStudentEachHouse = this.pieStudentEachHouse;
            new Chart(pieStudentEachHouse, {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "# of Likes",
                            data: dataNumbers,
                            backgroundColor: backgroundColor,
                            borderColor: '#f4f7fa'
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỉ lệ % số thành viên các lưu xá',
                        fontSize: '16',
                    },
                    tooltips: {
                        enabled: true
                    },
                    legend: {
                        position: 'bottom'
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                });
                                let percentage = (value * 100 / sum).toFixed(1) + "%";
                                return percentage;
                            },
                            color: 'black',
                            textAlign: 'center',
                        }
                    }
                }
            });

            // create chart bar
            const barStudentEachHouse = this.barStudentEachHouse;
            new Chart(barStudentEachHouse, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            data: dataNumbers,
                            backgroundColor: backgroundColor,
                            borderColor: '#f4f7fa'
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Số thành viên các lưu xá',
                        fontSize: '16',
                    },
                    tooltips: {
                        enabled: true // show info when hover
                    },
                    legend: {
                        display: false // hiden note
                    },
                    scales: {
                        yAxes: [{
                            display: true, 
                            gridLines: {
                                display: true
                            },
                            ticks: {
                                display: true,
                                beginAtZero: true // show column left value
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: true
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            formatter: (value) => {
                                return value;
                            },
                            color: 'black',
                            textAlign: 'center',
                            anchor: 'center'
                        }
                    }
                }
            });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student each school year
    countNumberStudentsEachSchoolYear = () => {
        const link = `${linkStudents}countnumberstudentseachschoolyear`
        axios.post(link).then(req => {
            const reqCountStudent = req.data
            const list = []
            const labels = []
            const dataNumbers = []
            let backgroundColor = []
            let hoverBackgroundColor = []
            reqCountStudent.map((item, key) => {
                const { yearstudent, totalStudent } = item
                let data = { yearstudent: yearstudent, totalstudent: totalStudent }
                let dataLabel = 'Năm ' + yearstudent
                let dataNumber = parseInt(totalStudent)
                list.push(data)
                labels.push(dataLabel)
                dataNumbers.push(dataNumber)

                backgroundColor.push(this.colors[key])
                hoverBackgroundColor.push(this.colors[key])
            })

            // create chart pie
            const pieStudentEachSchoolYear = this.pieStudentEachSchoolYear;
            new Chart(pieStudentEachSchoolYear, {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "# of Likes",
                            data: dataNumbers,
                            backgroundColor: backgroundColor,
                            borderColor: '#f4f7fa'
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỉ lệ % số sinh viên các năm',
                        fontSize: '16',
                    },
                    tooltips: {
                        enabled: true
                    },
                    legend: {
                        position: 'bottom'
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += data;
                                });
                                let percentage = (value * 100 / sum).toFixed(1) + "%";
                                return percentage;
                            },
                            color: 'black',
                            textAlign: 'center',
                        }
                    }
                }
            });
        }).catch(err => {
            this.handleShowModalErr()
        })
    }

    // count total student each school year and house
    countNumberStudentsEachSchoolYearAndHouse = () => {
        const link = `${linkStudents}countnumberstudentseachschoolyearandhouse`
        axios.post(link).then(req => {
            const reqCountStudent = req.data
            const list = []
            const labels = []
            const dataNumbers = []
            let backgroundColor = []
            let hoverBackgroundColor = []
            let barDataSets = []
            let labelNames = []
            reqCountStudent.map((item, key) => {
                const { yearstudent, totalStudent, HouseId } = item
                let data = { yearstudent: yearstudent, houseid : HouseId, totalstudent: totalStudent }
                let dataLabel = 'Năm ' + yearstudent
                let labelName = 'Nhà ' + HouseId
                let dataNumber = parseInt(totalStudent)
                list.push(data)
                labels.push(dataLabel)
                dataNumbers.push(dataNumber)

                labelNames.push(labelName)

                backgroundColor.push(this.colors[key])
                hoverBackgroundColor.push(this.colors[key])

                let dataset = {'label': dataLabel, 'backgroundColor': this.colors[key], 'borderColor': this.colors[key], 'data': dataNumbers}

                barDataSets.push(dataset)
            })

            const barStudentEachSchoolYear = this.barStudentEachSchoolYear;
            new Chart(barStudentEachSchoolYear, {
                type: 'bar',
                data: {
                    labels: labelNames,
                    datasets: barDataSets
                },
                options: {
                    scales: {
                        xAxes: [{stacked: true}],
                        yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true 
                        }
                    }]
                    }
                }
            })
        }).catch(err => {
            this.handleShowModalErr()
        })
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

    handleShowModalErr = () => {
        this.setState({ showModalErr: true });
    }

    handleCloseModalErr = () => {
        this.setState({ showModalErr: false });
    }

    handleShowModalLoading = async () => {
        await this.setState({ showModalLoading: true });
    }

    handleCloseModalLoading = () => {
        this.setState({ showModalLoading: false });
    }

    componentDidMount() {
        this.countNumberHouse()
        this.countNumberStudents()
        this.countNumberOldMember()
        this.countNumberStudentsByMonthYearJoin(this.state.monthjoin, this.state.yearjoin)
        this.countNumberStudentsByMonthYearUnJoin(this.state.monthunjoin, this.state.yearunjoin)
        this.countNumberStudentsEachHouse()
        this.countNumberStudentsEachSchoolYear()
        this.countNumberStudentsEachSchoolYearAndHouse()
        this.countNumberStudentsByIdSchool(this.state.idschool)
        this.countNumberStudentsByIdDiocese(this.state.iddiocese)
        this.countNumberStudentsByIdProvince(this.state.idprovince)
        this.getAllDioceses()
        this.getAllSchool()
        this.getAllProvince()
        this.handleCloseModalLoading()
    }

    render() {
        return (
            <section className="main-content">
                <Modal show={this.state.showModalLoading} onHide={this.handleCloseModalLoading} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                    <Modal.Body style={{ textAlign: "center" }}>
                        <p className="pModal">Hệ thống đang truy vấn dữ liệu <br /><br />
                            Vui lòng chờ trong giây lát<br /><br />
                            Xin cảm ơn !!! <br /><br /><img src="./lib/images/loading.gif" alt="load" width="10%" /></p>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <i className="fas fa-times" onClick={this.handleCloseModalLoading}></i>
                    </Modal.Footer>
                </Modal>
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
                <div className="statistical-shared">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="block-statistical block-statistical-red">
                                    <p className="title-block-statistical">Tổng sinh viên</p>
                                    <h3 className="number">{this.state.totalStudent}</h3>
                                    <i className="fas fa-users"></i>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="block-statistical block-statistical-green">
                                    <p className="title-block-statistical">Tổng cựu sinh viên</p>
                                    <h3 className="number">{this.state.totalOldMember}</h3>
                                    <i className="fas fa-briefcase"></i>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="block-statistical block-statistical-purple">
                                    <p>
                                        <span className="title-block-statistical">Vào tháng </span>
                                        <select className="select-none-background" name="monthjoin" onChange={this.onChange} value={this.state.monthjoin}>
                                            {this.renderMonth()}
                                        </select>
                                        <span className="title-block-statistical">năm </span>
                                        <select className="select-none-background" name="yearjoin" onChange={this.onChange} value={this.state.yearjoin}>
                                            {this.renderYear()}
                                        </select>
                                    </p>
                                    <h3 className="number">{this.state.totalStudentJoin}</h3>
                                    <i className="fas fa-user-plus"></i>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="block-statistical block-statistical-yellow">
                                    <p>
                                        <span className="title-block-statistical">Ra tháng </span>
                                        <select className="select-none-background" name="monthunjoin" onChange={this.onChange} value={this.state.monthunjoin}>
                                            {this.renderMonth()}
                                        </select>
                                        <span className="title-block-statistical">năm </span>
                                        <select className="select-none-background" name="yearunjoin" onChange={this.onChange} value={this.state.yearunjoin}>
                                            {this.renderYear()}
                                        </select>
                                    </p>
                                    <h3 className="number">{this.state.totalStudentUnJoin}</h3>
                                    <i className="fas fa-user-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* statistical-shared */}
                <hr/>
                <div className="statistical-student-house">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-6" style={{ textTransform: "capitalize", height: "300px" }}>
                                <canvas
                                    ref={barStudentEachHouse => (this.barStudentEachHouse = barStudentEachHouse)}
                                />
                            </div>
                            <div className="col-12 col-md-6" style={{ textTransform: "capitalize", height: "300px" }}>
                                <canvas
                                    ref={pieStudentEachHouse => (this.pieStudentEachHouse = pieStudentEachHouse)}
                                />
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12 col-md-6" style={{ textTransform: "capitalize", height: "300px" }}>
                                <canvas
                                    ref={barStudentEachSchoolYear => (this.barStudentEachSchoolYear = barStudentEachSchoolYear)}
                                />
                            </div>
                            <div className="col-12 col-md-6" style={{ textTransform: "capitalize", height: "300px" }}>
                                <canvas
                                    ref={pieStudentEachSchoolYear => (this.pieStudentEachSchoolYear = pieStudentEachSchoolYear)}
                                />
                            </div>
                        </div>
                    </div>
                </div> {/* statistical-student-house */}
                <hr/>
                <div className="statistical-shared">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <div className="block-statistical block-statistical-red">
                                    <p>
                                        <span className="title-block-statistical">Giáo phận </span>
                                        <select className="select-none-background" name="iddiocese" onChange={this.onChange} value={this.state.iddiocese}>
                                            {this.renderDiocese()}
                                        </select>
                                    </p>
                                    <h3 className="number">{this.state.totalStudentDiocese}</h3>
                                    <i className="fas fa-church"></i>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="block-statistical block-statistical-green">
                                    <p>
                                        <select className="select-none-background" name="idschool" onChange={this.onChange} value={this.state.idschool}>
                                            {this.renderSchool()}
                                        </select>
                                    </p>
                                    <h3 className="number">{this.state.totalStudentSchool}</h3>
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="block-statistical block-statistical-yellow">
                                    <p>
                                        <select className="select-none-background" name="idprovince" onChange={this.onChange} value={this.state.idprovince}>
                                            {this.renderProvince()}
                                        </select>
                                    </p>
                                    <h3 className="number">{this.state.totalStudentProvince}</h3>
                                    <i className="fas fa-map-marked"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* statistical-shared */}
            </section>
        );
    }
}

export default withRouter(StatisticalSize)