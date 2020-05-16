import React, { useEffect } from 'react'; 
import {connect} from 'react-redux'; 
import {getExecutionHistory} from '../../../redux/getExecutionHistory/actions';
import Table from 'react-bootstrap/Table'

//import Spiner from '../../../сomponent/Spiner';
//import Error from '../../../сomponent/Error'; 
import s from '../GlobalTables.module.scss'; 

const TablesExecutionHistory = ({ id, getExecutionHistory, data, error, loading}) => {

    useEffect(() => { getExecutionHistory(id) },[getExecutionHistory, id]); 
    
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
                        <td>Исполнено</td> 
                        <td>Дата начала</td> 
                        <td>Дата окончания</td>
                        <td>Дата</td>
                        <td>Имя сотрудника <br/> добавивший запись</td>
                    </tr>
                </thead> 
                <tbody>
                    {
                        data.map( (item, index) => (
                            <tr key={index}> 
                                <td>{ item.isExecution ? 'Исполнено' : 'Просроченно' }</td> 
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
    loading: state.getExecutionHistory.loading,
    error: state.getExecutionHistory.error,
    data: state.getExecutionHistory.data
})  
    
const mapDispatchToProps = { 
    getExecutionHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(TablesExecutionHistory);