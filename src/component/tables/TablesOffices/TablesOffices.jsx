import React, {useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'; 

import { filter } from '../../../components/Filter';
import ModalWindow from '../../ModalWindow'; 
import PutOfficesForm from '../../form/officesForm/PutOfficesForm';
import s from '../GlobalTables.module.scss';

const TablesOffices = ({mass, putOffices}) => { 
    const [ showModalPutOffices, setShowModalPutOffices ] = useState(false);//Индикатор отображения модального окна
    const [ sortUpDown, setSortUpDown ] = useState(false);//Индикатор сортировки
    const [ putIdOffices, setPutIdOffices ] = useState(null);//id филиала  



    const openModalOffices = (object) => {//Открывает модальное окно изменения должности 
        setPutIdOffices(object.id);
        setShowModalPutOffices(true);
    }

    return(
        <>
        <table className={s.tableEmployees}> 
            <thead>
                <tr>
                    <td>Мнемоника</td>
                    <td>Филиал <FontAwesomeIcon onClick={ ()=>{ filter(mass, 'name', sortUpDown, setSortUpDown) } } icon={ faFilter } /></td> 
                    <td>Адрес <FontAwesomeIcon onClick={ ()=>{ console.log('Error в обьекте нет поля') } } icon={ faFilter } /></td>
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
                            <td>
                                <FontAwesomeIcon onClick={ () => openModalOffices(item) } icon={ faEye } /> 
                                <FontAwesomeIcon icon={ faTrash } />
                            </td> 
                        </tr>  
                    ))
                }
                
            </tbody>
        </table>

        <ModalWindow 
            size='xl'
            show={showModalPutOffices}
            title='Изменение даных филиала'
            onClose={ () => setShowModalPutOffices(false) }
            body={
                    <PutOfficesForm id={putIdOffices} onClose={ () => setShowModalPutOffices(false) } />
                }
        />

        </>
    )
}

export default TablesOffices; 