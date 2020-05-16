import React, {useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { formClear } from '../../redux/form/actions';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Error from '../../component/Error';

import './ModalWindowForm.scss';

const ModalWindowForm = ({ show, onClose, title='Модальное окно', body, size='lg', loading, error, success, formClear}) => { 

    useEffect(() => { formClear() },[formClear]); 

    const Body = () => {
        if (loading) {
            setTimeout(onClose, 2000)
            return ( 
                <div className='statusBlock'>
                    <Spinner animation="border" className='spiner' />
                </div>   
            )
        }
        if (error) {
            setTimeout(onClose, 2000)
            return ( 
                <div className='statusBlock'>
                    <Error />
                </div> 
            )
        }

        if (success) { 
            setTimeout(onClose, 2000)
            return (
                <div className='statusBlock'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
            )
        } 
        else{
            return (
                body
            )
        }
    }

    return( 
        <Modal size={size} show={show} onHide={onClose}>  
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header> 
                <Body />
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    loading: state.statusForm.loading,
    error: state.statusForm.error,
    success: state.statusForm.success, 
})

const mapDispatchToProps = { 
    formClear 
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowForm); 