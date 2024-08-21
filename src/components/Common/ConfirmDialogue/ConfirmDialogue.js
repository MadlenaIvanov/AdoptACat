import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDialogue = ({
    show,
    onClose, 
    onSave
}) => {

     
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton> 
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Are you sure you want to delete this listing?</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Close</Button>
            <Button variant="primary" onClick={onSave}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default ConfirmDialogue