import React from "react";
import "./Modal.css";
import Modal from 'react-modal';

Modal.setAppElement('body');

class TSPModal extends React.Component {

    render () {
        return (
            <div className="modalContainer">
                <Modal style="" isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">TSP Genetic Algorithm</h2>
                        <div className="modalText">
                            A Java implementation of a traveling salesman optimization algorithm. The MatPlotLib library was 
                            used in Python to generate graphs.
                        </div>
                        <div className="modalText">
                            An initial set of random routes are evolved to be the shortest through artificial selection, mutation, 
                            and crossover. The experiment below shows the genome fitnesses on a dataset of 92 locations, wtih a 
                            population size of 100, elitism of 1, crossover rate of 50%, and mutation rate of 1%.  
                        </div>
                        <div className="imageContainer">
                            <img className="modalDescImg" src="images/TSPGraph.PNG" alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a href=""></a>tspGeneticAlgorithm</div>
                        <button className="closeModalButton" onClick={this.props.onRequestClose}>Close Modal</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }
}

export default TSPModal;
