import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import Error from '../../component/Error';
import { resetPasswordEmployees } from '../../redux/form/resetPasswordEmployees/actions';
import ConfirmationsForm from '../../component/form/ConfirmationsForm'; 
import ModalWindowForm from '../../container/ModalWindowForm';
import PersonalAreaEmployees from '../../container/PersonalAreaEmployees';
import PersonalAreaPositions from '../../component/PersonalAreaPositions';
import './PersonalArea.scss'

const PersonalArea = ({location, resetPasswordEmployees }) => { 
    const [key, setKey] = useState('employees');
    const [ showModalResetPassword, setShowModalResetPassword ] = useState(false); //Индикатор отображения модального окна

    if(!location.state){ 
        return (<Error text='Вы пытаетесь перейти на страницу личного кабинета сотрудника по ссылке, 
                            это запрещенно по соображением безопасности вернитесь на страницу списка 
                            сотруднкив и перейдите в личный кабинет непостредственно щелкнув на значек глаза'/>)
    } 
    
    return ( 
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="basicData">
                <div className='personalArea'>
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
                                    <Nav.Link onClick={ ()=>{ setShowModalResetPassword(true) } }>
                                        <b>Сброс пароля</b>
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <b>Разблокировать</b>
                                    </Nav.Link> 
                                </Nav.Item> 
                            </Nav>
                        </div>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="basicData">
                            <PersonalAreaEmployees id={location.state.id}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-2">
                            <PersonalAreaPositions id={location.state.id}/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </div>
            </Tab.Container> 

            <ModalWindowForm 
                size='lm'
                show={showModalResetPassword}
                title='Сброс пароля'
                onClose={ () => setShowModalResetPassword(false) }
                body={
                        <ConfirmationsForm title='Подтвердите сброс пароля' 
                        onClose={ () => setShowModalResetPassword(false) }  
                        onSubmit={ () =>  resetPasswordEmployees(location.state.id) }/>
                    }
            /> 

        </>
    )
}

const mapDispatchToProps = { 
    resetPasswordEmployees,
}

export default connect( () => ({}), mapDispatchToProps)(PersonalArea); 