import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import { Formik } from 'formik'; 
import { connect } from 'react-redux';
import * as Yup from 'yup';

import InputGrupForm from '../../../InputGrupForm';
import { postSalaries } from '../../../../redux/form/postSalaries/actions';
import DatePickerField from '../../../../component/DatePickerField';
import ErrorsFormInput from '../../../../component/ErrorsFormInput';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    salary: Yup.string().required('Обязательное поле'),
    dateStart: Yup.string().required('Обязательное поле'),
    employeeFioAdd: Yup.string().required('Обязательное поле'),
    costMinute: Yup.string().required('Обязательное поле'), 
})

const PostSalariesForm = ({ onClose, postSalaries, position }) => {  

    const [positionId, setPositionId] = useState(position[0].id);//Id Должности
    const [positionName, setPositionName] = useState(position[0].name);//Наименование должности

    const autoPositionSelect = (event) =>{//Для автоматического занесение id должности и наименования
        event.persist(); 
        setPositionId(event.target.value); 
        setPositionName(event.target.options[event.target.selectedIndex].text);
    }

    return (   
        <Formik 
            initialValues={{ 
                jobPositionId: position[0].id,//Значения id Должности по умолчанию первого элемента массива
                jobPositionName: position[0].name, //Значения name Должности по умолчанию первого элемента массива
                salary: '', 
                costMinute: '', 
                coefficient: '', 
                costNormal: '', 
                dateStart: '', 
                dateStop: '', 
                comment: '', 
                employeeFioAdd: '',
                coefficientServices: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true);
                values.jobPositionId = positionId;
                values.jobPositionName = positionName; 
                postSalaries(values);
            }}
        >
            {({ values, 
                errors, 
                touched, 
                handleChange, 
                handleBlur, 
                handleSubmit,
                setFieldValue, 
                isSubmitting 
            }) => 
                {
                    console.log(values.dateStart);
                    return(
                        <form onSubmit={ handleSubmit } className={s.forms}>
                            <Modal.Body>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Должность </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                onChange={ (event) => { autoPositionSelect(event) } }
                                                as="select">
                                                {position.map((item, index)=>(
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))} 
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.salary} 
                                    touched={touched.salary} 
                                    errors={errors.salary} 
                                    name={'salary'} 
                                    title={'Оклад'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.costMinute} 
                                    touched={touched.costMinute} 
                                    errors={errors.costMinute} 
                                    name={'costMinute'} 
                                    title={'Стоимость минуты'} 
                                    type='number'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.coefficient} 
                                    touched={touched.coefficient} 
                                    errors={errors.coefficient} 
                                    name={'coefficient'} 
                                    title={'Коэффициент'} 
                                    type='number'/>    

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.costNormal} 
                                    touched={touched.costNormal} 
                                    errors={errors.costNormal} 
                                    name={'costNormal'} 
                                    title={'Норма стоимости'} 
                                    type='number'/>  

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.coefficientServices} 
                                    touched={touched.coefficientServices} 
                                    errors={errors.coefficientServices} 
                                    name={'coefficientServices'} 
                                    title={'Коэффициент за стоимость оказанных услуг'} 
                                    type='number'/> 
                                
                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Дата начала </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <DatePickerField
                                                name="dateStart"
                                                handleChange={handleChange} 
                                                value={values.dateStart}
                                                onChange={setFieldValue}
                                                handleBlur={handleBlur} 
                                                className={`form-control ${touched.dateStart && errors.dateStart ? s.inputError : ''}`} 
                                            />  
                                            <ErrorsFormInput touched={touched.dateStart} message={errors.dateStart}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Дата окончания </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <DatePickerField
                                                name="dateStop"
                                                value={values.dateStop}
                                                onChange={setFieldValue}
                                                className='form-control' 
                                            />
                                            <ErrorsFormInput touched={touched.dateStop} message={errors.dateStop}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

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

const mapStateToProps = (state) => ({  
    position: state.getPosition.data
})  
    
const mapDispatchToProps = { 
    postSalaries,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSalariesForm);
