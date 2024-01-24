import React, {useEffect} from "react";
import "./Modal.css";
import Modal from 'react-modal';

Modal.setAppElement('body');

function StockWatchModal({isOpen, onRequestClose}) {
    useEffect(() => {    
        if(isOpen){
          document.body.style.overflow = 'hidden';
        }  
    }, [isOpen])

        return (
            <div className="modalContainer">
                <Modal style="" isOpen={isOpen} onRequestClose={onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Stock Watch Project</h2>
                        <div className="modalText">
                            A Reactjs project hosted with AWS. It is currently hosted at: <a className="link" href="https://main.kernansstockwatchproject.com/">Project Link</a>
                        </div>
                        <div className="modalText">
                            This was a solo project to learn both Reactjs and build a tool to help manage my retirement investment account. It's worth mentioning
                            that this site has an API request rate limit.
                        </div>
                        <div className="imageContainer">
                            <img className="modalDescImg" src={`${process.env.PUBLIC_URL}/images/stockWatchProject.PNG`} alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a className="link" href=""></a>will share upon request</div>
                        <button className="closeModalButton" onClick={onRequestClose}>Close Project</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }

export default StockWatchModal;
