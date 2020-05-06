import React from 'react';

import s from './ErrorText.module.scss';

const ErrorText = ({ touched, message }) => {
    if (touched && message){
        return <div className={s.formMessage}>{ message }</div>
    }
    return '';
}

export default ErrorText;