import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Formik } from 'formik'; 
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup'; 

import { putPosition } from '../../../../redux/form/putPosition/actions';
import ErrorsFormInput from '../../../../component/ErrorsFormInput';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле')
})

const putPositionsForm = ({ onClose, putPosition, object }) => {  

    return (   
        <Formik 
            initialValues={object}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true);
                console.log(values);
                putPosition(values, object.id);
            }}
        >
            {({ values, 
                errors, 
                touched, 
                handleChange, 
                handleBlur, 
                handleSubmit,
                isSubmitting 
            }) => 
                {
                    return(
                        <form onSubmit={ handleSubmit } className={s.forms}>
                            <Modal.Body> 
                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Наименование должности </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Наименование должности"  
                                                name='name' 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                className={touched.name && errors.name ? s.inputError : null} 
                                            />
                                            <ErrorsFormInput touched={touched.name} message={errors.name}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Комментарий </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Комментарий"  
                                                name='comment'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.comment}
                                                className={touched.comment && errors.comment ? s.inputError : null} 
                                            />
                                            <ErrorsFormInput touched={touched.comment} message={errors.comment}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                            </Modal.Body> 

                            <Modal.Footer>  
                                <Button type='button' variant="secondary" onClick={onClose}>Закрыть</Button>
                                <Button type='submit' variant="primary" disabled={isSubmitting}>Добавить</Button> 
                            </Modal.Footer> 
                        </form>
                    )
                } 
            }
        </Formik>   
    )
}

const mapDispatchToProps = { 
    putPosition,
}

export default connect( () => ({}), mapDispatchToProps)(putPositionsForm);
