import React, { useEffect } from 'react'; 
import {connect} from 'react-redux'; 
import {getActiveHistory} from '../../../redux/getActiveHistory/actions';
import Table from 'react-bootstrap/Table'

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import s from '../GlobalTables.module.scss'; 

const TablesActiveHistory = ({ id, getActiveHistory, data, error, loading}) => {

    useEffect(() => { getActiveHistory(id) },[getActiveHistory, id]); 
    
    //if(loading){
    //    return <Spiner />
    //}
    //else(error){
    //    return <Error />
    //}  
    
    if(!data.length){ 
        return (
            <div className={s.noneData}> 
                <p>Нет данных истории</p> 
            </div>
        )
    }
    
    return ( 
        <div className={s.tablePersonalArea}>
            <Table responsive="xl" striped bordered>
                <thead>
                    <tr>  
                        <td>Активность</td>
                        <td>Дата начала</td> 
                        <td>Дата окончания</td>
                        <td>Дата установки</td>
                        <td>Имя сотрудника <br/> добавивший запись</td>
                    </tr>
                </thead> 
                <tbody>
                    {
                        data.map( (item, index) => (
                            <tr key={index}> 
                                <td>{ item.isActive ? 'Активный' : 'Не активный' }</td> 
                                <td>{ item.dateStart ? new Date(Date.parse(item.dateStart)).toLocaleDateString() : '-' }</td>  
                                <td>{ item.dateStop ? new Date(Date.parse(item.dateStop)).toLocaleDateString() : '-' }</td> 
                                <td>{ item.dateAdd ? new Date(Date.parse(item.dateAdd)).toLocaleDateString() : '-' }</td> 
                                <td>{ item.employeeNameAdd }</td> 
                            </tr>  
                        ))
                    }
                    
                </tbody>
            </Table>   
        </div> 
    )
}

const mapStateToProps = (state) => ({ 
    loading: state.getActiveHistory.loading,
    error: state.getActiveHistory.error,
    data: state.getActiveHistory.data
})  
    
const mapDispatchToProps = { 
    getActiveHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(TablesActiveHistory);