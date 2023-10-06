import React from "react";
import "./Modal.css";
import Modal from "react-modal";

class LinterModal extends React.Component {
    render () {
        return (
            <div className="modalContainer">
                <Modal style="" isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">TSP Genetic Algorithm</h2>
                        <div className="modalText">
                        In a team of 3, we designed and implemented a flexible framework using different 
                        Object-Oriented design patterns. The Java ASM library was used to analyze 
                        input Java Projects. 
                        </div>
                        <div className="modalText">                        
                            Our linter is able to identify some cursory violations, OO principle violations, and identify modular design patterns.
                        </div>
                        <h2 className="modalHeader">Our Design</h2>
                        <div className="imageContainer">
                            <img className="modalDescImg" src="images/LinterDesign.PNG" alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a href=""></a>tspGeneticAlgorithm</div>
                        <button className="closeModalButton" onClick={this.props.onRequestClose}>Close Modal</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }
}

export default LinterModal;