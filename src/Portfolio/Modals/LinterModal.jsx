import React, {useEffect} from "react";
import "./Modal.css";
import Modal from "react-modal";

function LinterModal({isOpen, onRequestClose}) {

    useEffect(() => {    
        if(isOpen){
          document.body.style.overflow = 'hidden';
        }  
    }, [isOpen])


        return (
            <div className="modalContainer">
                <Modal style="" isOpen={isOpen} onRequestClose={onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Java Linter</h2>
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
                            <img className="modalDescImg" src={`${process.env.PUBLIC_URL}/images/LinterDesign.png`} alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a className="link" href="https://github.com/kernanana/Team6JavaLinter.git">LinkToLinter</a></div>
                        <button className="closeModalButton" onClick={onRequestClose}>Close Project</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }

export default LinterModal;