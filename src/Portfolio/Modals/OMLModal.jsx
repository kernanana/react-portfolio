import React from "react";
import "./Modal.css";
import Modal from 'react-modal';

Modal.setAppElement('body');

class OMLModal extends React.Component {

    render () {
        return (
            <div className="modalContainer">
                <Modal style="" isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Senior Project: Organize My Life</h2>
                        <div className="modalText">
                            A cross-platform application to file receipts, warranties, and documents on 
                            personal & business assets.
                        </div>
                        <div className="modalText">
                            Technologies used are React Native, AWS, and 
                            MongoDB. This is a year long senior design project completed in a team of 
                            4 following the Extreme Programming development approach.
                        </div>
                        <div className="imageContainer">
                            <img className="modalDescImg" src={`${process.env.PUBLIC_URL}/images/OMLWireframes.PNG`} alt="" />
                        </div>
                        <div className="githubLink">Github Link: <a className="link" href=""></a>not available in respect of client privacy</div>
                        <button className="closeModalButton" onClick={this.props.onRequestClose}>Close Modal</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }
}

export default OMLModal;
