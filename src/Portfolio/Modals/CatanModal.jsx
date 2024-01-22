import React, {useEffect} from "react";
import "./Modal.css";
import Modal from "react-modal";

function CatanModal({isOpen, onRequestClose}) {

    useEffect(() => {    
        if(isOpen){
          document.body.style.overflow = 'hidden';
        }  
    }, [isOpen])


        return (
            <div className="modalContainer">
                <Modal style="" isOpen={isOpen} onRequestClose={onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Settlers of Catan Test Suite</h2>
                        <div className="modalText">
                            This Java implementation of Settlers of Catan was programmed following Test-Driven Development.
                        </div>
                        <div className="modalText">
                            Over 470 JUnit tests instituted following the TDD workflow, Boundary Value Analysis, mocking, and 100% basis path and mutation test coverage.
                        </div>
                        <div className="imageContainer">
                            <img className="modalDescImg" src={`${process.env.PUBLIC_URL}/images/CatanTestCoverage.PNG`} alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a className="link" href="https://github.com/kernanana/CatanTestSuite.git">LinkToCatanTestSuite</a></div>
                        <button className="closeModalButton" onClick={onRequestClose}>Close Project</button>
                    </div>
                    
                </Modal>
            </div>
        )
}

export default CatanModal;