import React from 'react'
import Spiner from 'react-bootstrap/Spinner';

import s from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={s.spinnerBlok}>
            <Spiner animation="border" className={`spinner-border ${s.spinner}`}/>
        </div>
    )
}

export default Spinner;