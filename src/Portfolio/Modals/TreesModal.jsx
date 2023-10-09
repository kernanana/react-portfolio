import React from "react";
import "./Modal.css";
import Modal from "react-modal";

class TreesModal extends React.Component {
    render () {
        return (
            <div className="modalContainer">
                <Modal style="" isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
                    <div className="modalInfoContainer">
                        <h2 className="modalHeader">Editor Trees</h2>
                        <div className="modalText">
                        The concept of our editor tree was taken from height balance and binary search concepts. 
                        This was completed with a parter as the closing project to Data Structures 
                        and Algorithms at RHIT.
                        </div>
                        <div className="modalText">                        
                        The idea of an 'Editor Tree' is that it models a type cursor. It is able to add/delete 
                        characters (synonymous to nodes) to a word (synonymous to trees) in O(logn) 
                        time without creating degenerate trees.
                        </div>
                        <div className="githubLink">Github Link: <a className="link" href="https://github.com/kernanana/EditorTrees.git">Link To Editor Trees</a></div>
                        <button className="closeModalButton" onClick={this.props.onRequestClose}>Close Modal</button>
                    </div>
                    
                </Modal>
            </div>
        )
    }
}

export default TreesModal;