import { combineReducers } from 'redux';

import reducerGetPosition from './getPosition/reducer';  
import reducerGetSalaries from './getSalaries/reducer';   
import reducerGetOffices from './getOffices/reducer';  
import reducerGetEmployees from './getEmployees/reducer';  
import reducerGetEmployeesAccount from './getEmployeesAccount/reducer'; 
import reducerFileFoto from './fileFoto/reducer';   
import reducerFormStatus from './form/reducer';
import reducerGetPositionHistory from './getPositionHistory/reducer';
import reducerGetStatusHistory from './getStatusHistory/reducer';
import reducerGetExecutionHistory from './getExecutionHistory/reducer';
import reducerGetActiveHistory from './getActiveHistory/reducer';

const rootReducers = combineReducers({ 
    getPosition: reducerGetPosition,  
    getSalaries: reducerGetSalaries,   
    getOffices: reducerGetOffices,  
    getEmployees: reducerGetEmployees,
    getEmployeesAccount: reducerGetEmployeesAccount, 
    statusForm: reducerFormStatus,
    fotoFile: reducerFileFoto,
    getPositionHistory: reducerGetPositionHistory,
    getStatusHistory: reducerGetStatusHistory,
    getExecutionHistory: reducerGetExecutionHistory,
    getActiveHistory: reducerGetActiveHistory,
});

export default rootReducers;