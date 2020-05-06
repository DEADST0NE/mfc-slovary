import React from 'react'; 
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux'; 

import FormFileUpload from '../../../../components/FormFileUpload';
import { Input, PhoneInput, InputDatePicker, SnilsInput, InnInput } from '../../../../components/FormControls/FormControls';
import { required } from '../../../../utils/validators';
import s from '../../GlobalForm.module.scss';

let PutEmployeesForm = ({ handleSubmit, onClose }) => {

    return (   
            <Form onSubmit={ handleSubmit } className={s.forms}>
                <Modal.Body>
                    <h5  className='normalText'>Данные о сотруднике</h5>
                    <hr /> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Фотография </Form.Label>
                            </Col>
                            <Col sm="6">
                                <FormFileUpload />  
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Фамилия </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field  validate={required} type="text" placeholder="Фамилия" name='fio.lastName' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Имя </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field validate={required} type="text" placeholder="Имя" name='fio.name' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>  
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Отчество </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Отчество" name='fio.middleName' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата рождения </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field className='form-control' placeholder="Дата рождения" name='passport.birthDate' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Место рождения </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Место рождения" name='passport.birthPlace' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <h5  className='normalText'>Контактная информация сотрудника</h5>
                    <hr /> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Номер телефона </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="Номер телефона" name='phoneNumber' component={PhoneInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Адрес электронной почты </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Адрес электронной почты" name='email' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group> 

                    <h5  className='normalText'>Пастортные данные сотрудника</h5>
                    <hr /> 
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Серия </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Серия" name='passport.serial' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Номер </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Номер" name='passport.number' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата выдачи </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field className='form-control' placeholder="Дата выдачи" name='passport.number' component={InputDatePicker}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Место выдачи паспорта </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Место выдачи паспорта" name='passport.issuePlace' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Код документа </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Код документа" name='passport.code' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <h5  className='normalText'>Дополнительные документы сотрудника</h5>
                    <hr /> 
                    
                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> СНИЛС </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="СНИЛС" name='snils' component={SnilsInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> ИНН </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" className='form-control' placeholder="ИНН" name='inn' component={InnInput}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <h5  className='normalText'>Данные доступа сотрудника к работе</h5>
                    <hr /> 

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Табельный номер </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Табельный номер" name='personalNumber' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Серийный номер ЭЦП сертификата </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Серийный номер ЭЦП сертификата" name='certificateNumber' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Пароль для в входа в АИС </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Пароль для в входа в АИС" name='password' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Подсказка к паролю </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Field type="text" placeholder="Подсказка к паролю" name='passwordHelp' component={Input}/> 
                            </Col>
                        </Form.Row>
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>  
                    <Button type='button' variant="secondary" onClick={onClose}>Отмена</Button>
                    <Button type='submit' variant="primary">Добавить</Button>
                </Modal.Footer> 
            </Form>   
    )
}


PutEmployeesForm = reduxForm({ 
    form: 'putEmployees'
}) (PutEmployeesForm)

PutEmployeesForm = connect(
    state => ({
        initialValues: state.employeesAccountData.data
    }),               
)(PutEmployeesForm)

export default PutEmployeesForm; 
