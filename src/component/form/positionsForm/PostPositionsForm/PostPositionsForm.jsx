import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik'; 
import { connect } from 'react-redux';
import * as Yup from 'yup';

import InputGrupForm from '../../../InputGrupForm';
import { postPosition } from '../../../../redux/form/postPosition/actions'; 
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
    employeeFioAdd: Yup.string().required('Обязательное поле')
})

const PostPositionsForm = ({ onClose, postPosition }) => {  

    return (   
        <Formik 
            initialValues={{ 
                name: '',
                comment: '',
                employeeFioAdd: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true);
                console.log(values);
                postPosition(values);
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

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.employeeFioAdd} 
                                    touched={touched.employeeFioAdd} 
                                    errors={errors.employeeFioAdd} 
                                    name={'employeeFioAdd'} 
                                    title={'Сотрудник добавивщий запись'} 
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
    postPosition,
}

export default connect( () => ({}), mapDispatchToProps)(PostPositionsForm);
