import React from 'react'; 
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux'; 
import { Formik, getIn } from 'formik';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

import { putEmployees } from '../../../../redux/form/putEmployees/actions';
import FormFileFotoUpload from '../../../../container/FormFileFotoUpload';
import DatePickerField from '../../../../component/DatePickerField'; 
import ErrorsFormInput from '../../../../component/ErrorsFormInput';
import s from '../../GlobalForm.module.scss';


const validationSchema = Yup.object().shape({
    fio: Yup.object().shape({
        name: Yup.string().required('Обязательное поле'),
        lastName: Yup.string().required('Обязательное поле'),
    }),
})

const PutEmployeesForm = ({ id, object, onClose, putEmployees }) => {

    return (
        <Formik
            initialValues={object}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values);
                putEmployees(values, id);
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
                                        <Form.Control
                                            type="text"
                                            placeholder="Место рождения"
                                            name='passport.birthPlace'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.birthPlace}
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
                                            className='form-control'
                                            placeholder="Серия"
                                            name='passport.serial'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.serial}
                                            mask="99-99" 
                                            maskChar=" " /> 
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
                                            className='form-control'
                                            placeholder="Номер"
                                            name='passport.number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.passport.number}
                                            mask="999999" 
                                            maskChar=" " /> 
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
                                            className='form-control'
                                            placeholder="СНИЛС"
                                            name='snils'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.snils}
                                            mask="999-999-999-99" 
                                            maskChar=" " /> 
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
                                            className='form-control'
                                            placeholder="ИНН"
                                            name='inn'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.inn} 
                                            mask="999-999-999-999"
                                            maskChar=" " /> 
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <h5 className='normalText'>Данные доступа сотрудника к работе</h5>
                            <hr />

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
                                        /> 
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
    putEmployees,
}

export default connect( ()=>({}), mapDispatchToProps)(PutEmployeesForm);
