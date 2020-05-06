import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import ModalWindow from '../../../component/ModalWindow';
import { getJobPosition } from '../../../redux/jobPosition/getPosition/actions';
import PostJobPositionsForm from '../../../component/form/jobPositionsForm/PostJobPositionsForm';
import TablesJobPositions from '../../../component/tables/TablesJobPositions';
import {searchItem, changeSetSearchText} from '../../../utils/search';
import s from '../GlobalTab.module.scss';

const TabJobPositions = ({ getJobPosition, jobPosition, loading, error, postJobPosition }) => {

    const [showModalPostJobPositions, setShowModalPostJobPositions] = useState(false);
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    useEffect(() => { getJobPosition() },[getJobPosition]);
    
const testData = [
    {
        "id": 1,
        "name": "Оператор",
        "comment": null
    },
    {
        "id": 2,
        "name": "Курьер",
        "comment": null
    },
    {
        "id": 7,
        "name": "Редактирование должности",
        "comment": "Редактирование комментария к новой тестовой должности"
    }
]
    
    //if(loading){
    //    return <Spiner />
    //}
    //else(error){
    //    return <Error />
    //}

    return ( 
    <>
        <div className={s.searchBLeft}>
            <InputGroup  className={s.inputGroup}>
                <FormControl placeholder="Строка поиска" onChange={ (event)=>{ changeSetSearchText(event, setSearchText, setSearchOn, setSearch) } }/>
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={ ()=>{ searchItem(searchText, testData, setSearch); setSearchOn(true) } }>Поиск</Button>
                </InputGroup.Append>
            </InputGroup>
            <Button variant="primary" onClick={ ()=>setShowModalPostJobPositions(true) }>Добавить</Button> 
        </div>  

        { 
            searchOn ? 
                search.length ? <TablesJobPositions object={search} /> : 'Не нйден' 
            : <TablesJobPositions object={testData} />
        }
        
        <ModalWindow 
            show={showModalPostJobPositions}
            title='Добавление должности'
            onClose={ () => setShowModalPostJobPositions(false) }
            body={
                    <PostJobPositionsForm  onClose={ () => setShowModalPostJobPositions(false) } />
                }
        />
    </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.getPosition.loading,
    error: state.getPosition.error,
    jobPosition: state.getPosition.data
})  
    
const mapDispatchToProps = { 
    getJobPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabJobPositions);
