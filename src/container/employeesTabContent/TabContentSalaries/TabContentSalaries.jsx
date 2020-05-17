import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';  

import { getSalaries } from '../../../redux/getSalaries/actions';
//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import ModalWindowForm from '../../../container/ModalWindowForm'; 
import PostSalariesForm from '../../../component/form/salariesForm/PostSalariesForm';
import TablesSalaries from '../../../component/tables/TablesSalaries'; 
import SearchButton from '../../../component/SearchButton'; 

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
            <SearchButton 
                searchText={searchText} 
                setSearchText={setSearchText} 
                setSearch={setSearch} 
                setSearchOn={setSearchOn} 
                mass={salaries}
                formModalOpen={ () => setShowModalPostAddJobSalaries(true) }/>  

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