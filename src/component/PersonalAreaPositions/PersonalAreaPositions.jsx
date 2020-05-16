import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import TablesPositionHistory from '../../container/tables/TablesPositionHistory'
import TablesStatusHistory from '../../container/tables/TablesStatusHistory'
import TablesExecutionHistory from '../../container/tables/TablesExecutionHistory'
import TablesActiveHistory from '../../container/tables/TablesActiveHistory'
import TablesCombinationHistory from '../../container/tables/TablesCombinationHistory'
import './PersonalAreaPositions.scss'; 

const PersonalAreaPositions = ({ id }) => {

    const [key, setKey] = useState('officesHistory');
    
    return ( 
        <div className='personalAreaPositions'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                > 
                    <Tab eventKey="officesHistory" title="Филиал"> 
                        'Еще нет данных'
                    </Tab>
                    <Tab eventKey="positionHistory" title="Должность">  
                        <TablesPositionHistory id={id} />
                    </Tab> 
                    <Tab eventKey="statusHistory" title="Статус"> 
                        <TablesStatusHistory id={id} />
                    </Tab>
                    <Tab eventKey="executionHistory" title="Исполнение" > 
                        <TablesExecutionHistory id={id} />
                    </Tab>
                    <Tab eventKey="сombinationHistory" title="Совмещения" >
                        <TablesCombinationHistory id={id} />
                    </Tab>
                    <Tab eventKey="activeHistory" title="Активность" > 
                        <TablesActiveHistory id={id} />   
                    </Tab>
                </Tabs>  
        </div>
    )
}

export default PersonalAreaPositions;