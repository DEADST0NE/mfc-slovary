import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import EmployeeAccountData from '../../сomponent/EmployeesAccountData';
import './EmployeesAccount.scss'

const EmployeesAccount = (props) => {

    const [key, setKey] = useState('employees');

    if(!props.location.state){ 
        return <h1>Вы пытаетесь перейти на страницу личного кабинета сотрудника по сылке, это запрещенно по соображением безопасности вернитесь на строницу списка сотруднкив и перейдите в личный кабинет непостредственно щелкнув на значек глаза на этой страницы </h1>
    } 

    return ( 
            <Tab.Container id="left-tabs-example" defaultActiveKey="basicData">
                <div className='employeesAccount'>
                    <Col sm={2}> 
                        <div className='accountSidebar'>
                            <div className='foto'>
                                <FontAwesomeIcon icon={ faUserAlt } color='#868686' size="7x" />
                            </div>
                            <Nav className="flex-column"
                                activeKey={key}
                                onSelect={(selectedKey) => {setKey(selectedKey)}}
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="basicData" >
                                        Основыне данные
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" >
                                        Должности
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3" >
                                        Зарплата
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4" >
                                        Журнал авторизации
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-5" >
                                        <b>Сброс пароля</b>
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-6">
                                        <b>Разблакировать</b>
                                    </Nav.Link> 
                                </Nav.Item> 
                            </Nav>
                        </div>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="basicData">
                            <EmployeeAccountData id={props.location.state.id}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-2">
                            фывфы
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </div>
            </Tab.Container> 
    )
}

export default EmployeesAccount;