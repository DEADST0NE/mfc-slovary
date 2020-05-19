import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import ModalWindowForm from '../ModalWindowForm';

import Spinner from 'react-bootstrap/Spinner';
import Error from '../../component/Error';
import PutEmployeesForm from '../../component/form/employeesForm/PutEmployeesForm';
import { getEmployeesAccount } from '../../redux/getEmployeesAccount/actions';
import s from './PersonalAreaEmployees.module.scss';

const PersonalAreaPositions = ({ id, getEmployeesAccount, loading, error, data }) => { 
    useEffect(() => { getEmployeesAccount(id) },[getEmployeesAccount, id]);
    const [showWindow, setShowWindow] = useState(false); 

    if(loading){
        return <Spinner />
    }

    if(error){
        return <Error text={'Сервис в данный момент времени не доступен'}/>
    }

    return (
        <>
            <div className={s.accountBlock}>
                <div className={s.end}>
                    <h3>Основные данные</h3>
                    <Button variant="primary" onClick={ () => { setShowWindow(true) } }>Изменить</Button>
                </div>
                
                <hr/>
                <ul>
                    {data.fio.fio ? <li><span>ФИО: <b>{data.fio.fio}</b></span></li> : ''}
                    {data.login ? <li><span>Логин: <b>{data.login}</b></span></li> : ''}
                    {data.passwordHelp ? <li><span>Подсказка к паролю: <b>{data.passwordHelp}</b></span></li> : ''}
                    {data.password ? <li><span>Пароль: <b>{data.password}</b></span></li> : ''}
                    {data.phoneNumber ? <li><span>Номер телефона: <b>{data.phoneNumber}</b></span></li> : ''}
                    {data.email ? <li><span>Email: <b>{data.email}</b></span></li> : ''}
                    {data.personalNumber ? <li><span>Персональный номер: <b>{data.personalNumber}</b></span></li> : ''}
                    {data.certificateNumber ? <li><span>Номер сертификата: <b>{data.certificateNumber}</b></span></li> : ''}
                    {data.passport.birthDate ? <li><span>Дата рождения: <b>{new Date(Date.parse(data.passport.birthDate)).toLocaleDateString()}</b></span></li> : ''}
                    {data.passport.birthPlace ? <li><span>Место рождения: <b>{data.passport.birthPlace}</b></span></li> : ''}
                    {data.passport.serial ? <li><span>Серия: <b>{data.passport.serial}</b></span></li> : ''}
                    {data.passport.number ? <li><span>Номер: <b>{data.passport.number}</b></span></li> : ''}
                    {data.passport.issueDate ? <li><span>Дата выдачи паспорта: <b>{new Date(Date.parse(data.passport.issueDate)).toLocaleDateString()}</b></span></li> : ''}
                    {data.passport.issuePlace ? <li><span>Место выдачи паспорта: <b>{data.passport.issuePlace}</b></span></li> : ''}
                    {data.passport.code ? <li><span>Код подразделения: <b>{data.passport.code}</b></span></li> : ''}
                    {data.snils ? <li><span>Снилс: <b>{data.snils}</b></span></li> : ''}
                    {data.inn ? <li><span>Инн: <b>{data.inn}</b></span></li> : ''}
                    {data.officeName ? <li><span>Наименования офиса: <b>{data.officeName}</b></span></li> : ''}
                    {data.jobPositionName ? <li><span>Должность: <b>{data.jobPositionName}</b></span></li> : ''}
                    {data.statusName ? <li><span>Статус: <b>{data.statusName}</b></span></li> : ''}
                </ul> 
            </div>

            <ModalWindowForm 
                size='xl'
                show={showWindow}
                title='Изменение данных сотрудника'
                onClose={ () => setShowWindow(false) }
                body={
                        <PutEmployeesForm id={id} object={data} onClose={ () => setShowWindow(false) }/>
                    }
            />

        </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.getEmployeesAccount.loading,
    error: state.getEmployeesAccount.error,
    data: state.getEmployeesAccount.data,  
})  
    
const mapDispatchToProps = { 
    getEmployeesAccount,
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAreaPositions);