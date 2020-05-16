import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import ModalWindowForm from '../../../container/ModalWindowForm'; 
import { getJobPosition } from '../../../redux/getPosition/actions';
import PostPositionsForm from '../../../component/form/positionsForm/PostPositionsForm';
import TablesPositions from '../../../component/tables/TablesPositions';
import {searchItem, changeSetSearchText} from '../../../utils/search';
import s from '../GlobalTab.module.scss';

const TabContentPositions = ({ getJobPosition, position, loading, error, postJobPosition }) => {

    const [showModalPostJobPositions, setShowModalPostJobPositions] = useState(false);
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    useEffect(() => { getJobPosition() },[getJobPosition]);
        
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
                <FormControl placeholder="Строка поиска" 
                            onChange={ (event)=>{ changeSetSearchText(event, setSearchText, setSearchOn, setSearch) } }
                            onKeyDown={(event)=>{ if(event.keyCode === 13) {
                                searchItem(searchText, position, setSearch); setSearchOn(true)} }} />
                <InputGroup.Append>
                    <Button variant="outline-secondary" 
                        onClick={ ()=>{ searchItem(searchText, position, setSearch); setSearchOn(true) } }>Поиск</Button>
                </InputGroup.Append>
            </InputGroup>
            <Button variant="primary" onClick={ ()=>setShowModalPostJobPositions(true) }>Добавить</Button> 
        </div>  

        { 
            searchOn ? 
                search.length ? <TablesPositions mass={search} /> : 'Не нйден' 
            : <TablesPositions mass={position} />
        }
        
        <ModalWindowForm 
            show={showModalPostJobPositions}
            title='Добавление должности'
            onClose={ () => setShowModalPostJobPositions(false) }
            body={
                    <PostPositionsForm  onClose={ () => setShowModalPostJobPositions(false) } />
                }
        />
    </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.getPosition.loading,
    error: state.getPosition.error,
    position: state.getPosition.data
})  
    
const mapDispatchToProps = { 
    getJobPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentPositions);
