import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Employess.scss'; 
import TabJobPositions from '../../container/tabContent/TabContentJobPositions';
import TabContentSalaries from '../../container/tabContent/TabContentSalaries';
import TabContentOffices from '../../container/tabContent/TabContentOffices';
import TabContentEmployees from '../../container/tabContent/TabContentEmployees';

const Employees = () => {

    const [key, setKey] = useState('offices');

    return (
            <div className='employees'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                > 
                    <Tab eventKey="employees" title="Сотрудники"> 
                        <TabContentEmployees />
                    </Tab>
                    <Tab eventKey="offices" title="Филиалы"> 
                        <TabContentOffices />
                    </Tab>
                    <Tab eventKey="position" title="Должности" > 
                        <TabJobPositions />
                    </Tab>
                    <Tab eventKey="salaries" title="Оклады" > 
                        <TabContentSalaries />
                    </Tab>
                </Tabs>  
            </div>
    )
}

export default Employees; 