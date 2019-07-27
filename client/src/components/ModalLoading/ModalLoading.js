import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'

class ModalLoading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModalLoading: this.props.showModalLoading,
        }

        this.handleShowModalLoading = this.handleShowModalLoading.bind(this)
        this.handleShowModalLoading = this.handleShowModalLoading.bind(this)
    }

    handleShowModalLoading = async () => {
        await this.setState({ showModalLoading: true });
    }

    handleCloseModalLoading = () => {
        this.setState({ showModalLoading: false });
    }

    render() {
        return (
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
        );
    }
}

export default ModalLoading;