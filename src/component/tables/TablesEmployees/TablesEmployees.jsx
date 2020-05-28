import React, {useState} from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faPlay, faPause, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

import { filter } from '../../../utils/filter';
import ConfirmationsForm from '../../form/ConfirmationsForm';
import ModalWindow from '../../../component/ModalWindow'; 
import StatusSvg from '../../../component/StatusSvg'; 
import s from '../GlobalTables.module.scss';

const TablesEmployees = ({ mass, loading, error, foto }) => {
    const [ sortUpDown, setSortUpDown ] = useState(false);//Индикатор сортировки
    const [ showModalDeleteOffices, setShowModalDeleteOffices ] = useState(false); //Индикатор отображения модального окна

    return (
        <>
        <div className={s.tableGlobal}>
            <Table responsive="xl" striped bordered>  
                <thead>
                    <tr>
                        <td>Филиалы <FontAwesomeIcon icon={ faSort } onClick={ () => {  filter(mass, 'officeName', sortUpDown, setSortUpDown) } }/></td>
                        <td>Сотрудники <FontAwesomeIcon icon={ faSort } onClick={ () => {  filter(mass, 'employeeName', sortUpDown, setSortUpDown) } }/></td> 
                        <td>Дожности <FontAwesomeIcon icon={ faSort } onClick={ () => {  filter(mass, 'employeeJobPositionName', sortUpDown, setSortUpDown) } }/></td>
                        <td>Статус</td> 
                        <td>Активность</td>
                        <td>Действия</td>
                    </tr>
                </thead> 
                <tbody>
                    {
                        mass.map( (item, index) => (
                            <tr key={index}> 
                                <td>{item.officeName}</td>
                                <td>{item.employeeName}</td>
                                <td>{item.employeeJobPositionName}</td>
                                <td><StatusSvg id={ item.employeeStatusId } /></td>
                                <td>{ item.employeeIsActiv ? <FontAwesomeIcon icon={ faPlay } color='green'/> 
                                                            : <FontAwesomeIcon icon={ faPause } color='red'/> }</td>
                                <td className={s.act}>
                                    <Link  to={{
                                        pathname: '/PersonalArea',
                                        state: { id: item.employeeId }
                                    }}> 
                                        <FontAwesomeIcon icon={ faEye } /> 
                                    </Link> 
                                    <FontAwesomeIcon onClick={ () => { setShowModalDeleteOffices(true) } } icon={ faTrash } />
                                </td> 
                            </tr>  
                        ))
                    }
                </tbody>
            </Table>
        </div>
            
            <ModalWindow 
                size='lm'
                show={showModalDeleteOffices}
                title='Удаление сотрудника'
                onClose={ () => setShowModalDeleteOffices(false) }
                body={
                        <ConfirmationsForm onClose={ () => setShowModalDeleteOffices(false) } />
                    }
            /> 

        </>
    )
}

export default TablesEmployees;