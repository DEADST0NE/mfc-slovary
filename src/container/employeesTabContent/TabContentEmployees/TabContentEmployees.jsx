
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';  

import Spinner from '../../../component/Spinner';
import Error from '../../../component/Error';
import ModalWindowForm from '../../../container/ModalWindowForm';
import { getEmployees } from '../../../redux/getEmployees/actions';   
import TablesEmployees from '../../../component/tables/TablesEmployees';
import PostEmployeesForm from '../../../component/form/employeesForm/PostEmployeesForm';
import SearchButton from '../../../component/SearchButton'; 

const TabContentEmployees = ({getEmployees, loading, error, employees}) => {

    const [showModalPostEmployee, setShowModalPostEmployee] = useState(false);
    const [searchText, setSearchText] = useState(''); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    useEffect(() => { getEmployees() },[getEmployees]);

    if(loading){
        return <Spinner />  
    } 
    if(error){
        return <Error text={'Сервис не доступен в данный момент времени'}/>
    }
    
    return ( 
        <> 
            <SearchButton 
                searchText={searchText} 
                setSearchText={setSearchText} 
                setSearch={setSearch} 
                setSearchOn={setSearchOn} 
                mass={employees}
                formModalOpen={() => setShowModalPostEmployee(true)}/>   
    
            { 
                searchOn ? 
                    search.length ? <TablesEmployees mass={search} /> : 'Не найден' 
                : <TablesEmployees mass={employees} />
            }
            
            <ModalWindowForm 
                size='xl'
                show={showModalPostEmployee}
                title='Добавление сотрудника'
                onClose={ () => setShowModalPostEmployee(false) }
                body={
                        <PostEmployeesForm  onClose={ () => setShowModalPostEmployee(false) } />
                    }
            />
        </>
        )
}

const mapStateToProps = (state) => ({ 
    loading: state.getEmployees.loading,
    error: state.getEmployees.error,
    employees: state.getEmployees.data
})  
    
const mapDispatchToProps = { 
    getEmployees, 
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentEmployees); 
