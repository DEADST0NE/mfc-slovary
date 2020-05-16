import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { getSalaries } from '../../../redux/getSalaries/actions';
//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import ModalWindowForm from '../../../container/ModalWindowForm'; 
import PostSalariesForm from '../../../component/form/salariesForm/PostSalariesForm';
import TablesSalaries from '../../../component/tables/TablesSalaries';
import {searchItem, changeSetSearchText} from '../../../utils/search';
import s from '../GlobalTab.module.scss';

const TabContentSalaries = ({salaries, loading, error, getSalaries }) => {

    useEffect(() => { getSalaries() },[getSalaries]);
    const [showModalPostAddJobSalaries, setShowModalPostAddJobSalaries] = useState(false);
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    
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
                                    searchItem(searchText, salaries, setSearch); setSearchOn(true)} }} />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" 
                            onClick={ ()=>{ searchItem(searchText, salaries, setSearch); setSearchOn(true) } }>Поиск</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Button variant="primary" onClick={ ()=>{ setShowModalPostAddJobSalaries(true) } }>Добавить</Button> 
            </div>  

            { 
                searchOn ? 
                    search.length ? <TablesSalaries object={search}/> : 'Не нйден' 
                : <TablesSalaries object={salaries}/>
            }
            
            <ModalWindowForm 
                show={showModalPostAddJobSalaries}
                title='Добавление оклада к должности'
                onClose={ () => setShowModalPostAddJobSalaries(false) }
                body={
                        <PostSalariesForm  onClose={ () => setShowModalPostAddJobSalaries(false) } />
                    }
            />
        </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.getSalaries.loading,
    error: state.getSalaries.error,
    salaries: state.getSalaries.data
})  
    
const mapDispatchToProps = { 
    getSalaries
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentSalaries)