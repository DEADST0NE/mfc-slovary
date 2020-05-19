import React, { useEffect } from 'react'; 
import {connect} from 'react-redux'; 
import {getPositionHistory} from '../../../redux/getPositionHistory/actions';
import Table from 'react-bootstrap/Table'

import Spinner from '../../../component/Spinner';
import Error from '../../../component/Error';
import s from '../GlobalTables.module.scss'; 

const TablesPositionHistory = ({ id, getPositionHistory, data, error, loading}) => {

    useEffect(() => { getPositionHistory(id) },[getPositionHistory, id]);  
    
    if(loading){
        return <Spinner />
    }
    if(error){
        return <Error />
    }

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
                        <td>Наименование МФЦ</td>
                        <td>Должность</td>
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
                                <td>{ item.officeName }</td>
                                <td>{ item.jobPositionName }</td>
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
    loading: state.getPositionHistory.loading,
    error: state.getPositionHistory.error,
    data: state.getPositionHistory.data
})  
    
const mapDispatchToProps = { 
    getPositionHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(TablesPositionHistory);