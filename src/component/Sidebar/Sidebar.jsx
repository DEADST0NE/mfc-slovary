import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faGlobe, faHandHolding,faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

import s from './Sidebar.module.scss';

const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState(false); 
    let textSidebar = showSidebar ? s.sidebarText : s.sidebarTextDnone;
    let buttonSidebar = showSidebar ? s.sidebarBurgerOn : s.sidebarBurgerOf;
    return (
        <div className={s.sidebar}>
            <button className={buttonSidebar} onClick={ ()=>{ showSidebar ? setShowSidebar(false) : setShowSidebar(true) } }> 
                <span></span>
                <span></span>
                <span></span>
            </button> 
            <nav className={s.sidebarNav} > 
                    <ul>
                        <li> 
                            <NavLink 
                            title='Сотрудники'
                            exact to='/' 
                            activeClassName={s.active}>

                                <div className={s.listSidebar}>
                                    <FontAwesomeIcon icon={ faUserTie } />
                                    <div className={textSidebar}>Сотрудники</div> 
                                </div>

                            </NavLink>  
                        </li>
                        <li>
                            <NavLink 
                            title='Услуги'
                            exact to='/1' 
                            activeClassName={s.active}>

                                <div className={s.listSidebar}>
                                    <span> 
                                        <FontAwesomeIcon icon={ faFileAlt } /> 
                                        <FontAwesomeIcon icon={ faHandHolding } />
                                    </span>
                                    <div className={textSidebar}>Услуги</div> 
                                </div> 

                            </NavLink> 
                        </li>
                        <li>
                            <NavLink 
                            title='СМЭВ'
                            exact to='/2' 
                            activeClassName={s.active}>

                                <div className={s.listSidebar}>
                                    <FontAwesomeIcon icon={ faGlobe } />
                                    <div className={textSidebar}>СМЭВ</div>
                                </div> 

                            </NavLink> 
                        </li>
                    </ul> 
            </nav>
        </div> 
    )
} 

export default Sidebar;