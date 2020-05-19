import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import { connect } from 'react-redux'; 
import InputMask from 'react-input-mask';
import { Formik } from 'formik';  
import * as Yup from 'yup'; 
import { postOffices } from '../../../../redux/form/postOffices/actions'; 
import ErrorsFormInput from '../../../../component/ErrorsFormInput';
import s from '../../GlobalForm.module.scss';

const validationSchema = Yup.object().shape({
    mnemo: Yup.string().required('Обязательное поле'),
    name: Yup.string().required('Обязательное поле'),
    smallName: Yup.string().required('Обязательное поле'),
    minTrudRequestNumber: Yup.string().required('Обязательное поле'),
})

const InputGrupForm = ({handleChange, handleBlur, valueInput, touched, errors, name, title, type}) =>{
    return (
        <Form.Group> 
            <Form.Row> 
                <Col sm="5" className={s.labelCenter}>
                    <Form.Label> {title} </Form.Label>
                </Col>
                <Col sm="6">
                    <Form.Control 
                        type={type}
                        placeholder={title}
                        name={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={valueInput}
                        className={touched && errors ? s.inputError : null} 
                    />
                    <ErrorsFormInput touched={touched} message={errors}/>
                </Col>
            </Form.Row>
        </Form.Group>
    )
}

const PostOfficesForm = ({ onClose, postOffices }) => {   
    return (   
        <Formik 
            initialValues={{ 
                mnemo: '',
                isHeadOperatorHall: '',
                name: '',
                smallName: '',
                number: '',
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
                esiaName: '',
                callCenterServer: '',
                isStructuralSubdivision: '',
                mdmUid: '', 
                esiaCenttId: '',
                geographicCoordination: '',
                skype: '',
                schedule: '',
                tosp: '',
                convenience: '',
                comment: '',
                vendorId: '',
                eуsiaCenttId: '',
                cikId: '',
                officeCikName: '',
                minTrudRequestNumber: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>{
                setSubmitting(true); 
                postOffices(values);
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

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.mnemo} 
                                    touched={touched.mnemo} 
                                    errors={errors.mnemo} 
                                    name={'mnemo'} 
                                    title={'Мнемоника'} 
                                    type='text'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.name} 
                                    touched={touched.name} 
                                    errors={errors.name} 
                                    name={'name'} 
                                    title={'Наименование филиала'} 
                                    type='text'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.smallName} 
                                    touched={touched.smallName} 
                                    errors={errors.smallName} 
                                    name={'smallName'} 
                                    title={'Краткое наименование филиала'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.number} 
                                    touched={touched.number} 
                                    errors={errors.number} 
                                    name={'number'} 
                                    title={'Номер филиала'} 
                                    type='number'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.address} 
                                    touched={touched.address} 
                                    errors={errors.address} 
                                    name={'address'} 
                                    title={'Адрес'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.countPopulation} 
                                    touched={touched.countPopulation} 
                                    errors={errors.countPopulation} 
                                    name={'countPopulation'} 
                                    title={'Количество населния в Н/П на МФЦ'} 
                                    type='number'/>  

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

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.website} 
                                    touched={touched.website} 
                                    errors={errors.website} 
                                    name={'website'} 
                                    title={'Сайт'} 
                                    type='text'/>

                                <h5>Почта</h5>
                                <hr /> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.email} 
                                    touched={touched.email} 
                                    errors={errors.email} 
                                    name={'email'} 
                                    title={'Офицальный адрес почты'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.emailLogin} 
                                    touched={touched.emailLogin} 
                                    errors={errors.emailLogin} 
                                    name={'emailLogin'} 
                                    title={'Логин от почты для рассылок'} 
                                    type='text'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.emailPassword} 
                                    touched={touched.emailPassword} 
                                    errors={errors.emailPassword} 
                                    name={'emailPassword'} 
                                    title={'Пароль от почты для рассылок'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.emailServer} 
                                    touched={touched.emailServer} 
                                    errors={errors.emailServer} 
                                    name={'emailServer'} 
                                    title={'Сервер почты для рассылок'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.emailPort} 
                                    touched={touched.emailPort} 
                                    errors={errors.emailPort} 
                                    name={'emailPort'} 
                                    title={'Порт почты для рассылок'} 
                                    type='text'/> 

                                <h5>Документы</h5>
                                <hr />

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

                                <h5>Данные для интеграции с разными службами</h5>
                                <hr />

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.esiaCenttId} 
                                    touched={touched.esiaCenttId} 
                                    errors={errors.esiaCenttId} 
                                    name={'esiaCenttId'} 
                                    title={'Идентификатор центра регистрации'} 
                                    type='text'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.mdmUid} 
                                    touched={touched.mdmUid} 
                                    errors={errors.mdmUid} 
                                    name={'mdmUid'} 
                                    title={'Индефикатор МФЦ в системе МДМ'} 
                                    type='text'/>  

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.cikId} 
                                    touched={touched.cikId} 
                                    errors={errors.cikId} 
                                    name={'cikId'} 
                                    title={'Идентификатор МФЦ в ЦИК'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.officeCikName} 
                                    touched={touched.officeCikName} 
                                    errors={errors.officeCikName} 
                                    name={'officeCikName'} 
                                    title={'Наименование МФЦ для ЦИК'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.minTrudRequestNumber} 
                                    touched={touched.minTrudRequestNumber} 
                                    errors={errors.minTrudRequestNumber} 
                                    name={'minTrudRequestNumber'} 
                                    title={'Номер запроса для интерграции с МинТрудом'} 
                                    type='numder'/>   

                                <h5>Дополнительно</h5>
                                <hr />

                                <Form.Group> 
                                    <Form.Row>
                                        <Col sm="5" className={s.labelCenter}>
                                            <Form.Label> Наличие начальника операторского зала </Form.Label>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Control 
                                                name='isHeadOperatorHall'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.isHeadOperatorHall} 
                                                as="select"
                                            >
                                                <option value={false}>Нет</option>
                                                <option value={true}>Да</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.vendorId} 
                                    touched={touched.vendorId} 
                                    errors={errors.vendorId} 
                                    name={'vendorId'} 
                                    title={'Номер филиала'} 
                                    type='number'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.eуsiaCenttId} 
                                    touched={touched.eуsiaCenttId} 
                                    errors={errors.eуsiaCenttId} 
                                    name={'eуsiaCenttId'} 
                                    title={'Идентификатор центра регистрации'} 
                                    type='number'/>   

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.esiaName} 
                                    touched={touched.esiaName} 
                                    errors={errors.esiaName} 
                                    name={'esiaName'} 
                                    title={'ЕСИА центр'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.callCenterServer} 
                                    touched={touched.callCenterServer} 
                                    errors={errors.callCenterServer} 
                                    name={'callCenterServer'} 
                                    title={'Сервер Call-центра'} 
                                    type='text'/>  

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.quantityWindows} 
                                    touched={touched.quantityWindows} 
                                    errors={errors.quantityWindows} 
                                    name={'quantityWindows'} 
                                    title={'Количество окон'} 
                                    type='number'/> 

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
 
                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.geographicCoordination} 
                                    touched={touched.geographicCoordination} 
                                    errors={errors.geographicCoordination} 
                                    name={'mfcEpgu'} 
                                    title={'Географические координаты'} 
                                    type='text'/>

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.skype} 
                                    touched={touched.skype} 
                                    errors={errors.skype} 
                                    name={'skype'} 
                                    title={'Скайп'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.schedule} 
                                    touched={touched.schedule} 
                                    errors={errors.schedule} 
                                    name={'schedule'} 
                                    title={'График работы'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.tosp} 
                                    touched={touched.tosp} 
                                    errors={errors.tosp} 
                                    name={'tosp'} 
                                    title={'Перечень ТОСПов'} 
                                    type='text'/>  

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.convenience} 
                                    touched={touched.convenience} 
                                    errors={errors.convenience} 
                                    name={'convenience'} 
                                    title={'Удобства в  МФЦ'} 
                                    type='text'/> 

                                <InputGrupForm 
                                    handleChange={handleChange} 
                                    handleBlur={handleBlur} 
                                    valueInput={values.comment} 
                                    touched={touched.comment} 
                                    errors={errors.comment} 
                                    name={'convenience'} 
                                    title={'Коментарий'} 
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
    postOffices,
}

export default connect( () => ({}), mapDispatchToProps)(PostOfficesForm);
