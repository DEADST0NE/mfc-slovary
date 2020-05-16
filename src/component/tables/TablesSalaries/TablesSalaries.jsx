import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'; 
import Table from 'react-bootstrap/Table';

import ConfirmationsForm from '../../form/ConfirmationsForm'; 
import ModalWindow from '../../../component/ModalWindow';
import ShowSalariesForm from '../../form/salariesForm/ShowSalariesForm';
import s from '../GlobalTables.module.scss';

const TablesSalaries = ({ object }) => {

    const [showModalShowJobSalaries, setShowModalShowJobSalaries] = useState(false);//Индикатор открытия модального окна
    const [dataShowJobSalaries, setDataShowJobSalaries] = useState(null);//Хранит обьект выбранного оклада
    const [ showModalDeleteOffices, setShowModalDeleteOffices ] = useState(false); //Индикатор отображения модального окна

    const showJobSalaries = (object) =>{
        setShowModalShowJobSalaries(true); 
        setDataShowJobSalaries(object);
    }

    return (
        <>
        <div className={s.tableGlobal}>
            <Table responsive="xl" striped bordered> 
                <thead>
                    <tr>
                        <td>Сумма</td>
                        <td>Стоимость минуты</td> 
                        <td>Когда добавили</td>
                        <td>Кто добавил</td>
                        <td>Действия</td>
                    </tr>
                </thead> 
                <tbody>
                    {
                        object.map( (item, index) => (
                            <tr key={index}> 
                                <td>{item.salary}</td>
                                <td>{item.costMinute}</td>
                                <td>{ new Date(Date.parse(item.dateStart)).toLocaleDateString() }</td>
                                    <td>{ item.coefficient }</td>
                                <td className={s.act}>
                                    <FontAwesomeIcon onClick={ ()=>{ showJobSalaries(item) } } icon={ faEye } /> 
                                    <FontAwesomeIcon onClick={ ()=>{ setShowModalDeleteOffices(true) } } icon={ faTrash } />
                                </td> 
                            </tr>  
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>

            <ModalWindow 
                show={showModalShowJobSalaries}
                title='Просмотр оклада к должности'
                onClose={ () => setShowModalShowJobSalaries(false) }
                body={ <ShowSalariesForm size='sm' data={ dataShowJobSalaries } onClose={ () => setShowModalShowJobSalaries(false) } /> }
            />

            <ModalWindow 
                size='lm'
                show={showModalDeleteOffices}
                title='Удаление оклада'
                onClose={ () => setShowModalDeleteOffices(false) }
                body={
                        <ConfirmationsForm onClose={ () => setShowModalDeleteOffices(false) } />
                    }
            /> 

        </>
    )
}

export default TablesSalaries; 