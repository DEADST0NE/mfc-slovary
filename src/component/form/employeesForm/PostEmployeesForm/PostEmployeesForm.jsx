import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, getIn } from 'formik';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import Spinner from 'react-bootstrap/Spinner';

import FormFileFotoUpload from '../../../../components/FormFileFotoUpload';
import DatePickerField from '../../../../components/DatePickerField';
import Error from '../../../Error';
import { postEmployee } from '../../../../redux/employees/postEmployees/actions';
import ErrorText from '../../../../components/ErrorsTest';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    fio: Yup.object().shape({
        name: Yup.string().required('Обязательное поле'),
        lastName: Yup.string().required('Обязательное поле'),
    }),
    login: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
    dateStart: Yup.string().required('Обязательное поле'),
    statusId: Yup.string().required('Обязательное поле'),
    statusDateStart: Yup.string().required('Обязательное поле'),
    isActive: Yup.string().required('Обязательное поле'),
    isActiveDateStart: Yup.string().required('Обязательное поле'),
    intensity: Yup.string().required('Обязательное поле'),
    rate: Yup.string().required('Обязательное поле'), 
    employeeFioAdd: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Не коректный email'),
    inn: Yup.number().min(12, 'Не верно введен инн'),
    snils: Yup.number().min(11, 'Не верно введен снилс'),
    passport: Yup.object().shape({
        serial: Yup.string().min(4, 'Не верно введена серия паспорта'),
        number: Yup.string().min(6, 'Не верно введен номер паспорта'),
    }),
})

const PostEmployeesForm = ({ onClose, postEmployee, loading, error, success, offices, positions }) => {

    return (
        <Formik
            initialValues={{
                fio:{
                    lastName: '',
                    name: '',
                    middleName: ''
                },
                passport:{
                    birthDate: '',
                    birthPlace: '',
                    serial: '',
                    number: '',
                    issueDate: '',
                    issuePlace: '',
                    code: '', 
                },
                phoneNumber: '',
                email: '',
                snils: '',
                inn: '',
                login: '',
                password: '',
                passwordHelp: '',
                personalNumber: '',
                certificateNumber: '',
                officeId: '',
                dateStart: '',
                dateStop: '',
                jobPositionId: '',
                statusId: '',
                statusDateStart: '',
                statusDateStop: '',
                isActive: true,
                isActiveDateStart: '',
                isActiveDateStop: '',
                intensity: '',
                rate: '',
                employeeFioAdd: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values);
                postEmployee(values);
            }}
        >
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue
            }) => {
                if (loading) {
                    return (
                        <div className={s.statusBlock}>
                            <Spinner animation="border" className={s.spiner} />
                        </div>
                    )
                }
                if (error) {
                    setTimeout(onClose, 2000)
                    return (
                        <div className={s.statusBlock}>
                            <Error />
                        </div>
                    )
                }
                if (success) {
                    setTimeout(onClose, 2000)
                    return (
                        <div className={s.statusBlock}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                    )
                } 
                return (
                    <form onSubmit={handleSubmit} className={s.forms}>
                        <Modal.Body>
                            <h5 className='normalText'>Данные о сотруднике</h5>
                            <hr />
                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Фотография </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <FormFileFotoUpload />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Фамилия </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Фамилия"
                                            name='fio.lastName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fio.lastName}
                                            className={getIn(errors, 'fio.lastName') && getIn(touched, 'fio.lastName') ? s.inputError : null}
                                        />
                                        <ErrorText touched={getIn(touched, 'fio.lastName')} message={getIn(errors, 'fio.lastName')} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Имя </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Имя"
                                            name='fio.name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fio.name}
                                            className={getIn(errors, 'fio.name') && getIn(touched, 'fio.name') ? s.inputError : null} 
                                        />
                                        <ErrorText touched={getIn(touched, 'fio.name')} message={getIn(errors, 'fio.name')} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Отчество </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Отчество"
                                            name='fio.middleName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fio.middleName}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата рождения </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="passport.birthDate"
                                            value={values.passport.birthDate}
                                            onChange={setFieldValue}
                                            className='form-control'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Место рождения </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="passport.birthPlace"
                                            value={values.passport.birthPlace}
                                            onChange={setFieldValue}
                                            className='form-control'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <h5 className='normalText'>Контактная информация сотрудника</h5>
                            <hr />

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Номер телефона </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <InputMask
                                            type="text"
                                            className='form-control'
                                            placeholder="Номер телефона"
                                            name='phoneNumber'
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                            value={values.phoneNumber}
                                            mask="+7(999)-999-99-99"
                                            maskChar=" " />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Адрес электронной почты </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Адрес электронной почты"
                                            name='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? s.inputError : null}   
                                        />
                                        <ErrorText touched={touched.email} message={errors.email}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <h5 className='normalText'>Пастортные данные сотрудника</h5>
                            <hr />

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Серия </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <InputMask
                                            type="text"
                                            className={`form-control ${getIn(errors, 'passport.serial') && getIn(touched, 'passport.serial') ? s.inputError : null}`}
                                            placeholder="Серия"
                                            name='passport.serial'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.serial}
                                            mask="99-99" 
                                            maskChar=" " />
                                            <ErrorText touched={getIn(touched, 'passport.serial')} message={getIn(errors, 'passport.serial')} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Номер </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <InputMask
                                            type="text" 
                                            className={`form-control ${getIn(errors, 'passport.number') && getIn(touched, 'passport.number') ? s.inputError : null}`}
                                            placeholder="Номер"
                                            name='passport.number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.number}
                                            mask="999999" 
                                            maskChar=" " />
                                            <ErrorText touched={getIn(touched, 'passport.number')} message={getIn(errors, 'passport.number')} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата выдачи </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="passport.issueDate"
                                            value={values.passport.issueDate}
                                            onChange={setFieldValue}
                                            className='form-control'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Место выдачи паспорта </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Место выдачи паспорта"
                                            name='passport.issuePlace'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.issuePlace}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Код документа </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <InputMask
                                            type="text"
                                            className='form-control'
                                            placeholder="Код документа"
                                            name='passport.code' 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.code}
                                            mask="999-999"
                                            maskChar=" " />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <h5 className='normalText'>Дополнительные документы сотрудника</h5>
                            <hr />

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> СНИЛС </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <InputMask
                                            type="number"
                                            className={`form-control ${getIn(errors, 'passport.snils') && getIn(touched, 'passport.snils') ? s.inputError : null}`}
                                            placeholder="СНИЛС"
                                            name='snils'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.snils}
                                            mask="999-999-999-99" 
                                            maskChar=" " />
                                            <ErrorText touched={getIn(touched, 'passport.snils')} message={getIn(errors, 'passport.snils')} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> ИНН </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <InputMask
                                            type="number" 
                                            className={`form-control ${getIn(errors, 'passport.inn') && getIn(touched, 'passport.inn') ? s.inputError : null}`}
                                            placeholder="ИНН"
                                            name='inn'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.inn} 
                                            mask="999-999-999-999"
                                            maskChar=" " />
                                            <ErrorText touched={getIn(touched, 'passport.inn')} message={getIn(errors, 'passport.inn')} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <h5 className='normalText'>Данные доступа сотрудника к работе</h5>
                            <hr />
                            
                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Логин для в входа в АИС </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Логин для в входа в АИС"
                                            name='login'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.login}
                                            className={touched.login && errors.login ? s.inputError : null}   
                                        />
                                        <ErrorText touched={touched.login} message={errors.login}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Пароль для в входа в АИС </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Пароль для в входа в АИС"
                                            name='password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className={touched.password && errors.password ? s.inputError : null}   
                                        />
                                        <ErrorText touched={touched.password} message={errors.password}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Подсказка к паролю </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Подсказка к паролю"
                                            name='passwordHelp'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passwordHelp}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Табельный номер </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Табельный номер"
                                            name='personalNumber'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.personalNumber}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Серийный номер ЭЦП сертификата </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Серийный номер ЭЦП сертификата"
                                            name='certificateNumber'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.certificateNumber}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Oфис </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                            <Form.Control  
                                                name="officeId"
                                                value={values.officeId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                as="select"
                                            >
                                                {offices.map((item, index)=>(
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))} 
                                            </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата начала действия УЗ </Form.Label>
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
                                        <Form.Label> Дата окончания действия УЗ </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="dateStop"
                                            value={values.dateStop}
                                            onChange={setFieldValue}
                                            className='form-control'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Должность </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                            <Form.Control  
                                                name="jobPositionId"
                                                value={values.jobPositionId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                as="select"
                                            >
                                                {positions.map((item, index)=>(
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))} 
                                            </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Статус </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                            <Form.Control  
                                                name="statusId"
                                                value={values.statusId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                as="select"
                                                className={touched.statusId && errors.statusId ? s.inputError : null}   
                                            > 
                                                <option value={null}>Не выбран</option>
                                                <option value={1}>Болеет</option>
                                                <option value={2}>В отпуске</option>
                                                <option value={3}>Декретный отпуск</option>
                                                <option value={4}>Работает</option> 
                                            </Form.Control>
                                            <ErrorText touched={touched.statusId} message={errors.statusId}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата начала действия статуса </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="statusDateStart"
                                            value={values.statusDateStart}
                                            onChange={setFieldValue}
                                            className={`form-control ${touched.statusDateStart && errors.statusDateStart ? s.inputError : ''}`}
                                        />
                                        <ErrorText touched={touched.statusDateStart} message={errors.statusDateStart}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата окончания действия статуса </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="statusDateStop"
                                            value={values.statusDateStop}
                                            onChange={setFieldValue}
                                            className='form-control'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Статус активности УЗ </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                            <Form.Control  
                                                name="isActive"
                                                value={values.isActive}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={touched.isActive && errors.isActive ? s.inputError : null}   
                                                as="select" 
                                            > 
                                                <option value={true}>Активный</option>
                                                <option value={false}>Не активный</option>
                                            </Form.Control>
                                            <ErrorText touched={touched.isActive} message={errors.isActive}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата начала действия аккаунта </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="isActiveDateStart"
                                            value={values.isActiveDateStart}
                                            onChange={setFieldValue} 
                                            className={`form-control ${touched.isActiveDateStart && errors.isActiveDateStart ? s.inputError : ''}`}
                                        />
                                        <ErrorText touched={touched.isActiveDateStart} message={errors.isActiveDateStart}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Дата окончания действия аккаунта </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <DatePickerField
                                            name="isActiveDateStop"
                                            value={values.isActiveDateStop}
                                            onChange={setFieldValue}
                                            className='form-control'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Интенсивность </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="number"
                                            placeholder="Интенсивность"
                                            name='intensity'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.intensity}
                                            className={touched.intensity && errors.intensity ? s.inputError : null} 
                                        />
                                        <ErrorText touched={touched.intensity} message={errors.intensity}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> Ставка </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="number"
                                            placeholder="Ставка"
                                            name='rate'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.rate}
                                            className={touched.rate && errors.rate ? s.inputError : null} 
                                        />
                                        <ErrorText touched={touched.rate} message={errors.rate}/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group>
                                <Form.Row>
                                    <Col sm="5" className={s.labelCenter}>
                                        <Form.Label> ФИО сотудника добавивший записть </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control
                                            type="text"
                                            placeholder="ФИО сотудника добавивший записть"
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
    loading: state.postEmployees.loading,
    error: state.postEmployees.error,
    success: state.postEmployees.success,
    offices: state.getOffices.data,
    positions: state.getPosition.data,
})

const mapDispatchToProps = {
    postEmployee,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEmployeesForm);
