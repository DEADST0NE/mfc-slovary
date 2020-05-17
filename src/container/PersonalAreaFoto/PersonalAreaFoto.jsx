import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCamera } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'; 

import s from './PersonalAreaFoto.module.scss'

const PersonalAreaFoto = ({data}) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className={s.foto} 
            onMouseEnter={() => setIsShown(true)} 
            onMouseLeave={() => setIsShown(false)}>
                { data.foto === '' ? <FontAwesomeIcon icon={ faUserAlt } color='#868686' size="7x" /> : <img src={data.foto} alt='FotoEmployees'/>} 
                { isShown ? <FontAwesomeIcon className={s.addFoto} icon={ faCamera } color='#d3531a' size="7x" /> : null} 
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.getEmployeesAccount.data,  
})  
    
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAreaFoto); 