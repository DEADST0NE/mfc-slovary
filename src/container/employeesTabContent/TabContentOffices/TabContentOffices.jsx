import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';   

import PostOfficesForm from '../../../component/form/officesForm/PostOfficesForm';
import ModalWindowForm from '../../../container/ModalWindowForm'; 
import TablesOffices from '../../../component/tables/TablesOffices';
import { getOffices } from '../../../redux/getOffices/actions';
import SearchButton from '../../../component/SearchButton';  

const TabContentOffices = ({ getOffices, offices, loading, error }) => {

    useEffect(() => { getOffices() },[getOffices]); 
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    const [ showModalPostOffices, setShowModalPostOffices ] = useState(false); //Индикатор отображения модального окна
    
    //if(loading){
    //    return <Spiner />
    //}
    //else(error){
    //    return <Error />
    //}

    return(
        <> 
            <SearchButton 
                searchText={searchText} 
                setSearchText={setSearchText} 
                setSearch={setSearch} 
                setSearchOn={setSearchOn} 
                mass={offices}
                formModalOpen={ () => setShowModalPostOffices(true) }/>   

            { 
                searchOn ? 
                    search.length ? <TablesOffices mass={search} /> : 'Не нйден' 
                : <TablesOffices mass={offices} />
            }

            <ModalWindowForm 
                size='xl'
                show={showModalPostOffices}
                title='Добавление филиала'
                onClose={ () => setShowModalPostOffices(false) }
                body={
                        <PostOfficesForm onClose={ () => setShowModalPostOffices(false) } />
                    }
            /> 
        </>
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.getOffices.loading,
    error: state.getOffices.error,
    offices: state.getOffices.data
})  
    
const mapDispatchToProps = { 
    getOffices
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContentOffices);