import { combineReducers } from 'redux';

import reducerGetPosition from './jobPosition/getPosition/reduser';
import reducerPostPosition from './jobPosition/postPosition/reduser';
import reducerPutPosition from './jobPosition/putPosition/reduser';

import reducerGetSalaries from './jobSalaries/getSalaries/reduser'; 
import reducerPostSalaries from './jobSalaries/postSalaries/reduser';

import reducerGetOffices from './offices/getOffices/reduser';
import reducerPostOffices from './offices/postOffices/reduser';
import reducerPutOffices from './offices/putOffices/reduser';

import reducerGetEmployees from './employees/getEmployees/reduser';
import reducerPostEmployees from './employees/postEmployees/reduser';

import reducerFileFoto from './fileFoto/reduser'; 
import reducerEmployeeAccountData from './employeesAccountData/reduser';

const rootReducers = combineReducers({ 
    getPosition: reducerGetPosition,
    postPosition: reducerPostPosition,
    putPosition: reducerPutPosition,

    getSalaries: reducerGetSalaries,
    postSalaries: reducerPostSalaries,

    getOffices: reducerGetOffices,
    postOffices: reducerPostOffices,
    putOffices: reducerPutOffices,

    getEmployees: reducerGetEmployees,
    postEmployees: reducerPostEmployees,

    fotoFile: reducerFileFoto,
    employeesAccountData: reducerEmployeeAccountData,
});

export default rootReducers;