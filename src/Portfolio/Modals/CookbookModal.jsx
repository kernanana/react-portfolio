import React, {useEffect} from "react";
import "./Modal.css";
import Modal from "react-modal";

function CookbookModal({isOpen, onRequestClose}) {

    useEffect(() => {    
        if(isOpen){
          document.body.style.overflow = 'hidden';
        }  
    }, [isOpen])
      
    return (
        <div className="modalContainer">
            <Modal style="" isOpen={isOpen} onRequestClose={onRequestClose}>
                <div className="modalInfoContainer">
                    <h2 className="modalHeader">Cookbook Database</h2>
                    <div className="modalText">
                    Used MSSQL, HTML, and Javascript to create an online cookbook that allows users 
                    to view and share recipies. Collaborated with two other Rose-Hulman CS students credited in GitHub.
                    </div>
                    <div className="imageContainer">
                        <img className="modalDescImg" src={`${process.env.PUBLIC_URL}/images/CookbookDBCode.PNG`} alt="" />
                    </div>
                    <div className="githubLink">Github Link: <a className="link" href="https://github.com/kernanana/CookbookDBFrontend.git">Cookbook Code</a></div>
                    <button className="closeModalButton" onClick={onRequestClose}>Close Project</button>
                </div>
                
            </Modal>
        </div>
    )
}

export default CookbookModal;