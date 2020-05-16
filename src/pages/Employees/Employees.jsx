import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Employess.scss'; 
import TabContentPositions from '../../container/employeesTabContent/TabContentPositions';
import TabContentSalaries from '../../container/employeesTabContent/TabContentSalaries';
import TabContentOffices from '../../container/employeesTabContent/TabContentOffices';
import TabContentEmployees from '../../container/employeesTabContent/TabContentEmployees';

const Employees = () => {

    const [key, setKey] = useState('employees');

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
                        <TabContentPositions />
                    </Tab>
                    <Tab eventKey="salaries" title="Оклады" > 
                        <TabContentSalaries />
                    </Tab>
                </Tabs>  
            </div>
    )
}

export default Employees; 