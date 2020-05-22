
import React from 'react'

import Modal from './Modal'

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}> 
        <div>
            <h1>¿Estas seguro?</h1>
            <p>Estas a punto de borrar este badge</p>

            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal