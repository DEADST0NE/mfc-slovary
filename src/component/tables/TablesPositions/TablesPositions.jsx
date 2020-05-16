import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';

import ConfirmationsForm from '../../form/ConfirmationsForm';
import ModalWindowForm from '../../../container/ModalWindowForm';
import ModalWindow from '../../ModalWindow';
import PutPositionsForm from '../../form/positionsForm/PutPositionsForm';
import s from '../GlobalTables.module.scss'; 

const TablesPositions = ({ mass, putAddJobPosition}) => {

    const [showModalPutJobPositions, setShowModalPutJobPositions] = useState(false);//Индикатор отображения модального окна
    const [putObjectJobPositions, setPutObjectJobPositions] = useState(null);//Обьект должность которую выьрали для изменения 
    const [ showModalDeleteOffices, setShowModalDeleteOffices ] = useState(false); //Индикатор отображения модального окна

    const openModalPutJobPositions = (id) => {//Открывает модальное окно изменения должности 
        setPutObjectJobPositions(id);
        setShowModalPutJobPositions(true);
    }

    return ( 
        <> 
        <div className={s.tableGlobal}>
            <Table responsive="xl" striped bordered> 
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
                        mass.map( (item, index) => (
                            <tr key={index}> 
                                <td>{item.name}</td>
                                <td>{item.smallName}</td>
                                <td>Нужно уточнить</td>  
                                <td className={s.act}>
                                    <FontAwesomeIcon onClick={ () => openModalPutJobPositions(item) } icon={ faPencilAlt } /> 
                                    <FontAwesomeIcon onClick={ () => setShowModalDeleteOffices(true) } icon={ faTrash } />
                                </td> 
                            </tr>  
                        ))
                    }
                    
                </tbody>
            </Table> 
        </div>

            <ModalWindowForm 
                show={showModalPutJobPositions}
                title='Изменение должности'
                onClose={ () => setShowModalPutJobPositions(false) }
                body={
                        <PutPositionsForm object={putObjectJobPositions} onClose={ () => setShowModalPutJobPositions(false) } />
                    }
            />

            <ModalWindow 
                size='lm'
                show={showModalDeleteOffices}
                title='Удаление должности'
                onClose={ () => setShowModalDeleteOffices(false) }
                body={
                        <ConfirmationsForm onClose={ () => setShowModalDeleteOffices(false) } />
                    }
            />  
        </>
    )
}

export default TablesPositions;