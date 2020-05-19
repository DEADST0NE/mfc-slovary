import React from 'react';
import Form from 'react-bootstrap/Form';  
import { Col } from 'react-bootstrap';

import ErrorsFormInput from '../ErrorsFormInput';
import s from './InputGrupForm.module.scss'

const InputGrupForm = ({handleChange, handleBlur, valueInput, touched, errors, name, title, type}) =>{
    return (
        <Form.Group> 
            <Form.Row> 
                <Col sm="5" className={s.labelCenter}>
                    <Form.Label> {title} </Form.Label>
                </Col>
                <Col sm="6">
                    <Form.Control 
                        type={type}
                        placeholder={title}
                        name={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={valueInput}
                        className={touched && errors ? s.inputError : null} 
                    />
                    <ErrorsFormInput touched={touched} message={errors}/>
                </Col>
            </Form.Row>
        </Form.Group>
    )
}

export default InputGrupForm