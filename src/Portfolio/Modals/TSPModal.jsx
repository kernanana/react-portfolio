import React, {useEffect} from "react";
import "./Modal.css";
import Modal from 'react-modal';

Modal.setAppElement('body');

function TSPModal ({isOpen, onRequestClose}) {

    useEffect(() => {    
        if(isOpen){
          document.body.style.overflow = 'hidden';
        }  
    }, [isOpen])


        return (
            <div className="modalContainer">
                <Modal style="" isOpen={isOpen} onRequestClose={onRequestClose}>
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
                            <img className="modalDescImg" src={`${process.env.PUBLIC_URL}/images/TSPGraph.PNG`} alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a className="link" href="https://github.com/kernanana/TSPGeneticAlgorithm.git">LinkToTSPGeneticAlgorithm</a></div>
                        <button className="closeModalButton" onClick={onRequestClose}>Close Project</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }

export default TSPModal;
