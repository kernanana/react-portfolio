import React from "react";
import "./Modal.css";
import Modal from "react-modal";

class CookbookModal extends React.Component {
    render () {
        return (
            <div className="modalContainer">
                <Modal style="" isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Cookbook Database</h2>
                        <div className="modalText">
                        Used MSSQL, HTML, and Javascript to create an online cookbook that allows users 
                        to view and share recipies. Collaborated with two other Rose-Hulman CS students credited in GitHub.
                        </div>
                        <div className="githubLink">Github Link: <a href=""></a>tspGeneticAlgorithm</div>
                        <button className="closeModalButton" onClick={this.props.onRequestClose}>Close Modal</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }
}

export default CookbookModal;