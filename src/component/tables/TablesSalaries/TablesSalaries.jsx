import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'; 

import ModalWindow from '../../../component/ModalWindow';
import ShowJobSalariesForm from '../../form/jobSalariesForm/ShowJobSalariesForm';
import s from '../GlobalTables.module.scss';

const TablesSalaries = ({ object }) => {

    const [showModalShowJobSalaries, setShowModalShowJobSalaries] = useState(false);//Индикатор открытия модального окна
    const [dataShowJobSalaries, setDataShowJobSalaries] = useState(null);//Хранит обьект выбранного оклада

    const showJobSalaries = (object) =>{
        setShowModalShowJobSalaries(true); 
        setDataShowJobSalaries(object);
    }

    return (
        <>
            <table className={s.tableEmployees}> 
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
                                <td>
                                    <FontAwesomeIcon onClick={ ()=>{ showJobSalaries(item) } } icon={ faEye } /> 
                                    <FontAwesomeIcon icon={ faTrash } />
                                </td> 
                            </tr>  
                        ))
                    }
                    
                </tbody>
            </table>

            <ModalWindow 
                show={showModalShowJobSalaries}
                title='Просмотр оклада к должности'
                onClose={ () => setShowModalShowJobSalaries(false) }
                body={ <ShowJobSalariesForm size='sm' data={ dataShowJobSalaries } onClose={ () => setShowModalShowJobSalaries(false) } /> }
            />

        </>
    )
}

export default TablesSalaries; 