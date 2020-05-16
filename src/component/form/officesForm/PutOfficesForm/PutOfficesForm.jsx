import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import { connect } from 'react-redux'; 
import InputMask from 'react-input-mask';
import { Formik } from 'formik';  
import * as Yup from 'yup'; 

import { putOffices } from '../../../../redux/form/putOffices/actions'; 
import ErrorText from '../../../../component/ErrorsText';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    mnemo: Yup.string().required('Обязательное поле'),
    name: Yup.string().required('Обязательное поле'),
    smallName: Yup.string().required('Обязательное поле'),
})

const PutOfficesForm = ({ id, onClose, putOffices }) => {  

    return (   
        <Formik 
            initialValues={{ 
                mnemo: '',
                name: '',
                smallName: '',
                address: '',
                countPopulation: '',
                phoneNumber: '',
                email: '',
                website: '',
                emailLogin: '',
                emailPassword: '',
                emailServer: '',
                inn: '',
                kpp: '',
                ogrn: '',
                oktmo: '',
                emailPort: '',
                esiaOperatorSnils: '',
                ias: '',
                esiaName: '',
                callCenterServer: '',
                isStructuralSubdivision: '',
                mdmUid: '',
                mfcEpgu: '',
                geographicCoordination: '',
                skype: '',
                schedule: '',
                tosp: '',
                convenience: '',
                comment: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true);
                console.log(values);
                putOffices(values, id);
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
                                <h5>Основные данные</h5>
                                <hr /> 
                                <Form.Group> 
                                    <Form.Row> 
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Мнемоника </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Мнемоника"  
                                                name='mnemo' 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mnemo}
                                                className={touched.mnemo && errors.mnemo ? s.inputError : null} 
                                            />
                                            <ErrorText touched={touched.mnemo} message={errors.mnemo}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Наименование МФЦ </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Наименование МФЦ"  
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
                                            <Form.Label> Краткое наименование </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Краткое наименование" 
                                                name='smallName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.smallName}
                                                className={touched.smallName && errors.smallName ? s.inputError : null}   
                                            />
                                            <ErrorText touched={touched.smallName} message={errors.smallName}/>
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Адрес </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Адрес" 
                                                name='address'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}  
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Количество населния </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="number" 
                                                placeholder="Количество населния в Н/П на МФЦ" 
                                                name='countPopulation'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.countPopulation}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5">
                                            <Form.Label > Телефон </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask 
                                                type="text"
                                                placeholder="Телефон" 
                                                className='form-control'  
                                                name='phoneNumber' 
                                                mask="+7(999)-999-99-99" 
                                                maskChar=" " 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.salary} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Сайт </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Сайт" 
                                                name='website'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.website}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <h5>Почта</h5>
                                <hr /> 

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Email </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Офицальный адрес почта" 
                                                name='email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Логин </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Логин от почты для рассылок" 
                                                name='emailLogin'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.emailLogin}  
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Пароль </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Пароль от почты для рассылок" 
                                                name='emailPassword'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.emailPassword} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Сервер </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Сервер почты для рассылок" 
                                                name='emailServer'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.emailServer}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Порт </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Порт почты для рассылок" 
                                                name='emailPort'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.emailPort}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <h5>Дополнительно</h5>
                                <hr />

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> ИНН </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask
                                                type="text" 
                                                placeholder="ИНН" 
                                                className='form-control'
                                                name='inn'
                                                mask="999-999-999-999"
                                                maskChar=" " 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.inn}  
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> КПП </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask 
                                                type="text" 
                                                placeholder="КПП" 
                                                name='kpp'
                                                className='form-control'
                                                mask="999-999-999" 
                                                maskChar=" "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.kpp} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> ОГРН </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask 
                                                type="text" 
                                                placeholder="ОГРН" 
                                                name='ogrn'
                                                className='form-control'
                                                mask="99999999999" 
                                                maskChar=" "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.ogrn}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> ОКТМО </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask
                                                type="text" 
                                                placeholder="ОКТМО" 
                                                name='oktmo'
                                                className='form-control'
                                                mask="99999999999" 
                                                maskChar=" "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.oktmo} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> ОКАТО </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask 
                                                type="text" 
                                                placeholder="ОКАТО" 
                                                name='okato'
                                                className='form-control'
                                                mask="9999999999999" 
                                                maskChar=" "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.okato}  
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> СНИЛС директора </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <InputMask 
                                                type="text" 
                                                placeholder="СНИЛС директора" 
                                                name='esiaOperatorSnils'
                                                className='form-control'
                                                mask="9999999999999" 
                                                maskChar=" "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.esiaOperatorSnils} 
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> ИАС МКГУ </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="ИАС МКГУ" 
                                                name='ias'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.ias}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> ЕСИА центр </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="ЕСИА центр" 
                                                name='esiaName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.esiaName}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Сервер Call-центра </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Сервер Call-центра" 
                                                name='callCenterServer'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.callCenterServer}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Количество окон </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Количество окон" 
                                                name='quantityWindows'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.quantityWindows}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
 
                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Структурное подразделение </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control 
                                                name='isStructuralSubdivision'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.isStructuralSubdivision} 
                                                as="select"
                                            >
                                                <option value={false}>Нет</option>
                                                <option value={true}>Да</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Индефикатор МФЦ в системе МДМ </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Индефикатор МФЦ в системе МДМ" 
                                                name='mdmUid'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mdmUid}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Индефикатор МФЦ на ЕПГУ </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Индефикатор МФЦ на ЕПГУ" 
                                                name='mfcEpgu'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mfcEpgu}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Широта, долгота </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Широта, долгота" 
                                                name='geographicCoordination'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.geographicCoordination}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Скайп </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Скайп" 
                                                name='skype'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.skype}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> График работы </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="График работы" 
                                                name='schedule'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.schedule}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Перечень ТОСПов </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Перечень ТОСПов" 
                                                name='tosp'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.tosp}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Удобства в  МФЦ </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                type="text" 
                                                placeholder="Удобства в  МФЦ" 
                                                name='convenience'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.convenience}   
                                            /> 
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Коментарий </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control  
                                                as="textarea"
                                                type="text" 
                                                placeholder="Коментарий" 
                                                name='convenience'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.comment}   
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
    putOffices,
}

export default connect( () => ({}), mapDispatchToProps)(PutOfficesForm);
