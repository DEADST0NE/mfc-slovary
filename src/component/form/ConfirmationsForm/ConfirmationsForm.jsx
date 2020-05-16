import React from 'react'; 
import Button from 'react-bootstrap/Button';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import s from './ConfirmationsForm.module.scss';

const ConfirmationsForm = ({ onClose, onSubmit, title='Подтвердите удаление' }) => {
    return ( 
        <div className={s.confirmationForm}>

            <div className={s.img}>
                <FontAwesomeIcon icon={faExclamationCircle} /> 
            </div>
            
            <p>{title}</p> 
            
            <div className={s.buttonBlock}>
                <Button type='button' variant="secondary" onClick={onClose}>Отмена</Button>
                <Button type='submit' variant="primary" onClick={onSubmit}>Подтвердить</Button>
            </div> 
        </div> 
    )
}

export default ConfirmationsForm