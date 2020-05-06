import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Formik } from 'formik'; 
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Error from '../../../Error'; 
import { putJobPosition } from '../../../../redux/jobPosition/putPosition/actions';
import ErrorText from '../../../../components/ErrorsTest';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле')
})

const PutJobPositionsForm = ({ onClose, id, putJobPosition, loading, error, success }) => {  

    return (   
        <Formik 
            initialValues={{ 
                name: '',
                comment: '', 
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true);
                console.log(values);
                putJobPosition(values, id);
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
                    if(loading){
                        return (
                            <div className={s.statusBlock}>
                                <Spinner animation="border" className={s.spiner} />
                            </div>
                        )
                    }
                    if(error){
                        setTimeout(onClose,2000)
                        return (
                            <div className={s.statusBlock}>
                                <Error />
                            </div>
                        )
                    }
                    if(success){
                        setTimeout(onClose,2000)
                        return (
                            <div className={s.statusBlock}>
                                <FontAwesomeIcon icon={ faCheckCircle } />
                            </div>
                        )
                    }
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
                                            <ErrorText touched={touched.name} message={errors.name}/>
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
                                            <ErrorText touched={touched.comment} message={errors.comment}/>
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


const mapStateToProps = (state) => ({ 
    loading: state.putPosition.loading,
    error: state.putPosition.error,
    success: state.putPosition.success, 
})  
    
const mapDispatchToProps = { 
    putJobPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(PutJobPositionsForm);