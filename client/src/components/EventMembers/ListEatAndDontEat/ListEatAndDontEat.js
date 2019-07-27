import React, { Component } from 'react';
import BlockStatisticalEatDontEat from './BlockStatisticalEatDontEat';
import ListEat from './ListEat';
import ListDontEat from './ListDontEat';
import axios from "axios";
import jwt_decode from 'jwt-decode';
const linkMembers = `http://localhost:8000/members/`;
class ListEatAndDontEat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: this.props.day < 10 ? "0" + this.props.day : this.props.day,
            month: this.props.month < 10 ? "0" + this.props.month : this.props.month,
            year: this.props.year,
            listEatRiceNoon: false,
            listEatRiceAfternoon: false,
            listDontEatRiceNoon: false,
            listDontEatRiceAfternoon: false,
            lengthEatRiceNoon:"0",
            lengthEatRiceAfternoon:"0",
            lengthDontEatRiceNoon:"0",
            lengthDontEatRiceAfternoon:"0"
        }
    }
    getDataEat = async () => {
        const link = `${linkMembers}GetDataEat`;
        await axios
            .post(link, { date: this.state.year + "-" + this.state.month + "-" + this.state.day }).then((res) => {
                this.setState({
                    listEatRiceNoon: res.data.listEatRiceNoon,
                    listEatRiceAfternoon: res.data.listEatRiceAfternoon,
                    listDontEatRiceNoon: res.data.listDontEatRiceNoon,
                    listDontEatRiceAfternoon: res.data.listDontEatRiceAfternoon,
                    lengthEatRiceNoon:res.data.lengthEatRieceNoon< 10 ? "0" + res.data.lengthDontEatRiceNoon :res.data.lengthDontEatRiceNoon,
                    lengthEatRiceAfternoon:res.data.lengthEatRiceAfternoon< 10 ? "0" + res.data.lengthEatRiceAfternoon : res.data.lengthEatRiceAfternoon,
                    lengthDontEatRiceNoon:res.data.lengthDontEatRiceNoon< 10 ? "0" + res.data.lengthDontEatRiceNoon : res.data.lengthDontEatRiceNoon,
                    lengthDontEatRiceAfternoon:res.data.lengthDontEatRiceAfternoon< 10 ? "0" + res.data.lengthDontEatRiceAfternoon : res.data.lengthDontEatRiceAfternoon
                });
            })
    }
     componentDidMount() {
          this.getDataEat();
    }
    render() {
        return (
            <div id="_danhSachComTre" className="tab-content">
                <div className="w-list-rice">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <BlockStatisticalEatDontEat eat={this.state.lengthEatRiceNoon} donteat={this.state.lengthDontEatRiceNoon}>bữa trưa</BlockStatisticalEatDontEat>
                            </div>
                            <div className="col-12 col-sm-6">
                                <BlockStatisticalEatDontEat eat={this.state.lengthEatRiceAfternoon} donteat={this.state.lengthDontEatRiceAfternoon}>bữa chiều</BlockStatisticalEatDontEat>
                            </div>
                            <div className="col-12 col-sm-6">
                                <ListEat list={this.state.listEatRiceNoon}>Cơm trễ trưa</ListEat>
                                <ListDontEat list={this.state.listDontEatRiceNoon}>Không ăn cơm trưa</ListDontEat>
                            </div>
                            <div className="col-12 col-sm-6">
                                <ListEat list={this.state.listEatRiceAfternoon}>Cơm trễ chiều</ListEat>
                                <ListDontEat list={this.state.listDontEatRiceAfternoon}>Không ăn cơm chiều</ListDontEat>
                            </div>
                        </div>
                    </div>
                </div> {/*  w-list-rice */}
            </div>
        );
    }
}

export default ListEatAndDontEat;