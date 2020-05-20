import React from 'react'; 
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, getIn } from 'formik';
import { connect } from 'react-redux'; 
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import InputGrupForm from '../../../InputGrupForm';
import FormFileFotoUpload from '../../../../container/FormFileFotoUpload';
import DatePickerField from '../../../../component/DatePickerField'; 
import { postEmployees } from '../../../../redux/form/postEmployees/actions'; 
import ErrorsFormInput from '../../../../component/ErrorsFormInput';
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

const postEmployeesForm = ({ onClose, postEmployees, offices, positions, foto }) => { 
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
                foto: '',
                snils: '',
                inn: '',
                login: '',
                password: '',
                passwordHelp: '',
                personalNumber: '',
                certificateNumber: '',
                officeId: offices[0].id,
                dateStart: '',
                dateStop: '',
                jobPositionId: positions[0].id,
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
                values.foto = foto;
                postEmployees(values);
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
                                        <ErrorsFormInput touched={getIn(touched, 'fio.lastName')} message={getIn(errors, 'fio.lastName')} />
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
                                        <ErrorsFormInput touched={getIn(touched, 'fio.name')} message={getIn(errors, 'fio.name')} />
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
                                        <ErrorsFormInput touched={touched.email} message={errors.email}/>
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
                                            <ErrorsFormInput touched={getIn(touched, 'passport.serial')} message={getIn(errors, 'passport.serial')} />
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
                                            <ErrorsFormInput touched={getIn(touched, 'passport.number')} message={getIn(errors, 'passport.number')} />
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
                                            type="text"
                                            className={`form-control ${getIn(errors, 'passport.snils') && getIn(touched, 'passport.snils') ? s.inputError : null}`}
                                            placeholder="СНИЛС"
                                            name='snils'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.snils}
                                            mask="999-999-999-99" 
                                            maskChar=" " />
                                            <ErrorsFormInput touched={getIn(touched, 'passport.snils')} message={getIn(errors, 'passport.snils')} />
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
                                            type="text" 
                                            className={`form-control ${getIn(errors, 'passport.inn') && getIn(touched, 'passport.inn') ? s.inputError : null}`}
                                            placeholder="ИНН"
                                            name='inn'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.inn} 
                                            mask="999-999-999-999"
                                            maskChar=" " />
                                            <ErrorsFormInput touched={getIn(touched, 'passport.inn')} message={getIn(errors, 'passport.inn')} />
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
                                        <ErrorsFormInput touched={touched.login} message={errors.login}/>
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
                                        <ErrorsFormInput touched={touched.password} message={errors.password}/>
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
                                        <ErrorsFormInput touched={touched.dateStart} message={errors.dateStart}/>
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
                                            <ErrorsFormInput touched={touched.statusId} message={errors.statusId}/>
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
                                        <ErrorsFormInput touched={touched.statusDateStart} message={errors.statusDateStart}/>
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
                                            <ErrorsFormInput touched={touched.isActive} message={errors.isActive}/>
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
                                        <ErrorsFormInput touched={touched.isActiveDateStart} message={errors.isActiveDateStart}/>
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

                            <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.intensity} 
                                    touched={touched.intensity} 
                                    errors={errors.intensity} 
                                    name={'intensity'} 
                                    title={'Интенсивность'} 
                                    type='number'/> 

                            <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.rate} 
                                    touched={touched.rate} 
                                    errors={errors.rate} 
                                    name={'rate'} 
                                    title={'Ставка'} 
                                    type='number'/> 

                            <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.employeeFioAdd} 
                                    touched={touched.employeeFioAdd} 
                                    errors={errors.employeeFioAdd} 
                                    name={'employeeFioAdd'} 
                                    title={'ФИО сотудника добавивший записть'} 
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
    offices: state.getOffices.data,
    positions: state.getPosition.data,
    foto: state.fotoFile.file,
})

const mapDispatchToProps = {
    postEmployees,
}

export default connect(mapStateToProps, mapDispatchToProps)(postEmployeesForm);
