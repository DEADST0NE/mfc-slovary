import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';  

import Spinner from '../../../component/Spinner';
import Error from '../../../component/Error'; 
import ModalWindowForm from '../../../container/ModalWindowForm'; 
import { getJobPosition } from '../../../redux/getPosition/actions';
import PostPositionsForm from '../../../component/form/positionsForm/PostPositionsForm';
import TablesPositions from '../../../component/tables/TablesPositions';
import SearchButton from '../../../component/SearchButton';  

const TabContentPositions = ({ getJobPosition, position, loading, error, postJobPosition }) => {

    const [showModalPostJobPositions, setShowModalPostJobPositions] = useState(false);
    const [searchText, setSearchText] = useState(null); //Текст поиска
    const [search, setSearch] = useState([]); //Массив обьектов удов совпад
    const [searchOn, setSearchOn] = useState(false); //Показать контент поиска
    useEffect(() => { getJobPosition() },[getJobPosition]);
        
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
            mass={position}
            formModalOpen={ () => setShowModalPostJobPositions(true) }/>   

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
