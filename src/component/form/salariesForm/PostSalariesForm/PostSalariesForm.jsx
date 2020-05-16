import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import { Formik } from 'formik'; 
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { postSalaries } from '../../../../redux/form/postSalaries/actions';
import DatePickerField from '../../../../component/DatePickerField';
import ErrorText from '../../../../component/ErrorsText';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    salary: Yup.string().required('Обязательное поле'),
    dateStart: Yup.string().required('Обязательное поле'),
    employeeFioAdd: Yup.string().required('Обязательное поле'),
})

const PostSalariesForm = ({ onClose, postSalaries, position }) => {  

    const [positionId, setPositionId] = useState(null);//Id Должности
    const [positionName, setPositionName] = useState(null);//Наименование должности

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
                employeeFioAdd: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true);
                values.jobPositionId = positionId;
                values.jobPositionName = positionName;
                console.log(values);
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
                                
                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Оклад </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Оклад"  
                                                name='salary' 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.salary}
                                                className={touched.salary && errors.salary ? s.inputError : null} 
                                            />
                                            <ErrorText touched={touched.salary} message={errors.salary}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Стоимость минуты </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="number" 
                                                placeholder="Стоимость минуты"  
                                                name='costMinute' 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.costMinute}
                                                className={touched.costMinute && errors.costMinute ? s.inputError : null} 
                                            />
                                            <ErrorText touched={touched.costMinute} message={errors.costMinute}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Коэффициент </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="number" 
                                                placeholder="Коэффициент" 
                                                name='coefficient'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.coefficient}
                                                className={touched.coefficient && errors.coefficient ? s.inputError : null}   
                                            />
                                            <ErrorText touched={touched.coefficient} message={errors.coefficient}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Норма стоимости </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="number" 
                                                placeholder="Норма стоимости"  
                                                name='costNormal'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.costNormal}
                                                className={touched.costNormal && errors.costNormal ? s.inputError : null}   
                                            /> 
                                            <ErrorText touched={touched.costNormal} message={errors.costNormal}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Коэффициент должности </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Коэффициент должности"  
                                                name='coefficientJobPosition'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.coefficientJobPosition}
                                                className={touched.coefficientJobPosition && errors.coefficientJobPosition ? s.inputError : null} 
                                            />  
                                            <ErrorText touched={touched.coefficientJobPosition} message={errors.coefficientJobPosition}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>  
                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Дата начала </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <DatePickerField
                                                name="dateStart"
                                                value={values.dateStart}
                                                onChange={setFieldValue}
                                                className={`form-control ${touched.dateStart && errors.dateStart ? s.inputError : ''}`} 
                                            />  
                                            <ErrorText touched={touched.dateStart} message={errors.dateStart}/>
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
                                            <ErrorText touched={touched.dateStop} message={errors.dateStop}/>
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

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Сотрудник добавивщий запись </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Сотрудник добавивщий запись" 
                                                name='employeeFioAdd'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.employeeFioAdd}
                                                className={touched.employeeFioAdd && errors.employeeFioAdd ? s.inputError : null} 
                                            />
                                            <ErrorText touched={touched.employeeFioAdd} message={errors.employeeFioAdd}/> 
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
    position: state.getPosition.data
})  
    
const mapDispatchToProps = { 
    postSalaries,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSalariesForm);
