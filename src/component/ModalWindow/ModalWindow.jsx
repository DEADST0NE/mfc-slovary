import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './ModalWindow.scss';

const ModalWindow = ({ show, onClose, title='Модальное окно', body, size='lg'}) => { 
    return( 
        <Modal size={size} show={show} onHide={onClose}>  
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header> 
                {body}
        </Modal>
    )
}

export default ModalWindow;