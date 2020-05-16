import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerFull, faThermometer, faBaby } from '@fortawesome/free-solid-svg-icons';

const StatusSvg = ({ id }) => {
    switch(id){
        case 2:
            return(<FontAwesomeIcon icon={ faThermometer } /> );
        case 3:
            return(<FontAwesomeIcon icon={ faBaby } /> );
        default:
            return(<FontAwesomeIcon icon={ faThermometerFull } /> );

    }
}

export default StatusSvg; 