import React from 'react';

import s from './ErrorsFormInput.module.scss';

const ErrorsFormInput = ({ touched, message }) => {
    if (touched && message){
        return <div className={s.formMessage}>{ message }</div>
    }
    return '';
}

export default ErrorsFormInput;