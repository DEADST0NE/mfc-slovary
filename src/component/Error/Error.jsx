import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';

import s from './Error.module.scss';

const Error = ({text}) => { 
    return (
        <div className={s.contetError}>  
                <FontAwesomeIcon icon={ faDizzy } /> 
            <p> 
                {text} 
            </p>
        </div>
    ) 
}

export default Error;