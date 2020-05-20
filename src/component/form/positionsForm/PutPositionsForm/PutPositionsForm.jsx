import React from 'react';
import { Formik } from 'formik'; 
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup'; 

import InputGrupForm from '../../../InputGrupForm';
import { putPosition } from '../../../../redux/form/putPosition/actions';
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
                                <InputGrupForm 
                                        handleChange={handleChange} 
                                        handleBlur={handleBlur} 
                                        valueInput={values.name} 
                                        touched={touched.name} 
                                        errors={errors.name} 
                                        name={'name'} 
                                        title={'Наименование должности'} 
                                        type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.comment} 
                                    touched={touched.comment} 
                                    errors={errors.comment} 
                                    name={'comment'} 
                                    title={'Комментарий'} 
                                    type='text'/>  
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
