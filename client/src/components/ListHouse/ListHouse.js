import React, { Component } from 'react';
import axios from 'axios'
import './ListHouse.css'
import House from './House';
import SlideHouse from './SlideHouse';
import TitleShared from '../TitleShared/TitleShared';
const linkHouses = 'http://localhost:8000/houses/'
const linkMembers = 'http://localhost:8000/members/'

class ListHouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHouses: [],

            nameprovince: '',
            typeprovince: '',

            namedistrict: '',
            typedistrict: '',

            nameward: '',
            typeward: '',

            /* showModal */
            showModalErr: false,
        }
        this.handleShowModalErr = this.handleShowModalErr.bind(this)
        this.handleCloseModalErr = this.handleCloseModalErr.bind(this)
    }

    getAllHousesActive = () => {
        let link = `${linkHouses}GetAllHousesActive`
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
            console.log(this.state)
        }).catch(err => {
            console.log(err)
        })
    }

    GetNameAndTypeProvinceByIdProvince = async (idprovince) =>{
        const link = `${linkMembers}GetNameAndTypeProvinceByIdProvince/${idprovince}`
        await axios.get(link).then(async (req) => {
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

    componentDidMount() {
        this.getAllHousesActive()     
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState !== this.state){
            return nextState
        } 
        return false
    }

    renderHouse = () => {
        return this.state.listHouses.map((item, key) => (
            <div key={key} className="d-none d-sm-block col-sm-6 col-md-4">
                <House
                    namehouse={"Nhà " + item.idhouse + " - " + item.namehouse}
                    imghouse={item.imghouse}
                    address= {
                        item.address + ", " + item.WardIdward + ", " + item.DistrictIddistrict + ", " + item.ProvinceIdprovince
                    }
                ></House>
            </div>
        ))
    }


    render() {
        return (
            <div id="_listHouse">
                <TitleShared title="hệ thống lưu học xá"  color="green"></TitleShared>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {this.renderHouse()}
                            <div className="col-12 d-sm-none">
                                <SlideHouse></SlideHouse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListHouse;