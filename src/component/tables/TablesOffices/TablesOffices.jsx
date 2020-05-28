import React, {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'; 
import Table from 'react-bootstrap/Table'

import ConfirmationsForm from '../../form/ConfirmationsForm';
import { filter } from '../../../utils/filter';
import ModalWindowForm from '../../../container/ModalWindowForm';
import ModalWindow from '../../ModalWindow'; 
import PutOfficesForm from '../../form/officesForm/PutOfficesForm';
import s from '../GlobalTables.module.scss';

const TablesOffices = ({ mass }) => { 
    const [ showModalPutOffices, setShowModalPutOffices ] = useState(false);//Индикатор отображения модального окна
    const [ sortUpDown, setSortUpDown ] = useState(false);//Индикатор сортировки
    const [ putObjectOffices, setPutObjectOffices ] = useState(null);//id филиала  
    const [ showModalDeleteOffices, setShowModalDeleteOffices ] = useState(false); //Индикатор отображения модального окна


    const openModalOffices = (object) => {//Открывает модальное окно изменения должности 
        setPutObjectOffices(object);
        setShowModalPutOffices(true);
    }

    return(
        <div className={s.tableGlobal}>
            <Table responsive="xl" striped bordered> 
                <thead>
                    <tr>
                        <td>Мнемоника</td>
                        <td>Филиал  <FontAwesomeIcon 
                                    onClick={ ()=>{ filter(mass, 'name', sortUpDown, setSortUpDown) } } icon={ faSort } />
                        </td> 
                        <td>Адрес  <FontAwesomeIcon 
                                    onClick={ ()=>{ console.log('Error в обьекте нет поля') } } icon={ faSort } />
                        </td>
                        <td>Действия</td>
                    </tr>
                </thead> 
                <tbody>
                    {
                        mass.map( (item, index) => (
                            <tr key={index}> 
                                <td>{item.mnemo}</td>
                                <td>{item.smallName}</td>
                                <td>{item.CallCenterServer}</td>  
                                <td className={s.act}>
                                    <FontAwesomeIcon onClick={ () => openModalOffices(item) } icon={ faEye } /> 
                                    <FontAwesomeIcon onClick={ () => setShowModalDeleteOffices(true) } icon={ faTrash } />
                                </td> 
                            </tr>  
                        ))
                    }
                    
                </tbody>
            </Table>

            <ModalWindowForm 
                size='xl'
                show={showModalPutOffices}
                title='Изменение даных филиала'
                onClose={ () => setShowModalPutOffices(false) }
                body={
                        <PutOfficesForm object={putObjectOffices} onClose={ () => setShowModalPutOffices(false) } />
                    }
            />

            <ModalWindow 
                size='lm'
                show={showModalDeleteOffices}
                title='Удаление филиала'
                onClose={ () => setShowModalDeleteOffices(false) }
                body={
                        <ConfirmationsForm onClose={ () => setShowModalDeleteOffices(false) } />
                    }
            />  
        </div>
    )
}

export default TablesOffices; 