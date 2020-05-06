import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import ModalWindow from '../../../component/ModalWindow';
import PutJobPositionsForm from '../../form/jobPositionsForm/PutJobPositionsForm';
import s from '../GlobalTables.module.scss'; 

const TablesJobPositions = ({ object, putAddJobPosition}) => {

    const [showModalPutJobPositions, setShowModalPutJobPositions] = useState(false);//Индикатор отображения модального окна
    const [putIdJobPositions, setPutIdJobPositions] = useState(null);//id должности

    const openModalPutJobPositions = (id) => {//Открывает модальное окно изменения должности 
        setPutIdJobPositions(id);
        setShowModalPutJobPositions(true);
    }

    return ( 
    <> 
        <table className={s.tableEmployees}> 
            <thead>
                <tr>
                    <td>Наименование</td>
                    <td>Кто добавил</td> 
                    <td>Когда добавили</td>
                    <td>Действия</td>
                </tr>
            </thead> 
            <tbody>
                {
                    object.map( (item, index) => (
                        <tr key={index}> 
                            <td>{item.name}</td>
                            <td>{item.smallName}</td>
                            <td>Нужно уточнить</td>  
                            <td>
                                <FontAwesomeIcon onClick={ () => openModalPutJobPositions(item.id) } icon={ faPencilAlt } /> 
                                <FontAwesomeIcon icon={ faTrash } />
                            </td> 
                        </tr>  
                    ))
                }
                
            </tbody>
        </table> 

        <ModalWindow 
            show={showModalPutJobPositions}
            title='Изменение должности'
            onClose={ () => setShowModalPutJobPositions(false) }
            body={
                    <PutJobPositionsForm id={putIdJobPositions} onClose={ () => setShowModalPutJobPositions(false) } />
                }
        />

    </>
    )
}

export default TablesJobPositions;