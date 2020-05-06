import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { getJobSalaries } from '../../../redux/jobSalaries/getSalaries/actions';
//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import ModalWindow from '../../../component/ModalWindow'; 
import PostJobSalariesForm from '../../../component/form/jobSalariesForm/PostJobSalariesForm';
import TablesSalaries from '../../../component/tables/TablesSalaries';
import {searchItem, changeSetSearchText} from '../../../utils/search';
import s from '../GlobalTab.module.scss';

const TabContentSalaries = ({salaries, loading, error, getJobSalaries }) => {

    useEffect(() => { getJobSalaries() },[getJobSalaries]);
    const [showModalPostAddJobSalaries, setShowModalPostAddJobSalaries] = useState(false);
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    
    const testData=[
        {
            "id": 1,
            "jobPositionId": 7,
            "jobPositionName": "Тестовая должность",
            "salary": 100,
            "costMinute": 10,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-30T00:00:00",
            "dateStop": null,
            "comment": null
        },
        {
            "id": 2,
            "jobPositionId": 2,
            "jobPositionName": "Тестовая должность",
            "salary": 100,
            "costMinute": 10,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-30T00:00:00",
            "dateStop": null,
            "comment": null
        },
        {
            "id": 3,
            "jobPositionId": 2,
            "jobPositionName": "Должность",
            "salary": 100,
            "costMinute": 18,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-31T00:00:00",
            "dateStop": null,
            "comment": null
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
                <Button variant="primary" onClick={ ()=>{ setShowModalPostAddJobSalaries(true) } }>Добавить</Button> 
            </div>  

            { 
                searchOn ? 
                    search.length ? <TablesSalaries getJobSalaries={getJobSalaries} object={search}/> : 'Не нйден' 
                : <TablesSalaries getJobSalaries={getJobSalaries} object={testData}/>
            }
            
            <ModalWindow 
            show={showModalPostAddJobSalaries}
            title='Добавление оклада к должности'
            onClose={ () => setShowModalPostAddJobSalaries(false) }
            body={
                    <PostJobSalariesForm  onClose={ () => setShowModalPostAddJobSalaries(false) } />
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
    getJobSalaries
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentSalaries)