import React from "react";
import "./Modal.css";
import Modal from "react-modal";

class CatanModal extends React.Component {
    render () {
        return (
            <div className="modalContainer">
                <Modal style="" isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Settlers of Catan Test Suite</h2>
                        <div className="modalText">
                            This Java implementation of Settlers of Catan was programmed following Test-Driven Development.
                        </div>
                        <div className="modalText">
                            Over 470 JUnit tests instituted following the TDD workflow, Boundary Value Analysis, mocking, and 100% basis path and mutation test coverage.
                        </div>
                        {/* <div className="imageContainer">
                            <img className="modalDescImg" src="images/TSPGraph.PNG" alt="" />
                        </div> */}
                        <div className="githubLink">Github Link: <a href=""></a>tspGeneticAlgorithm</div>
                        <button className="closeModalButton" onClick={this.props.onRequestClose}>Close Project</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }
}

export default CatanModal;