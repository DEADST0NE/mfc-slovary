import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {getOffices} from '../../getOffices/actions';

//Запрос на добавление оклада 
    const postSalariesRequest = async (object) => {
        return await axios.post(`JobSalaries`, object) 
    };

    export const postSalaries = (object) => (dispatch) => {
        setTimeout( () => { dispatch( getOffices() )}, 5000 );//Обновляем список филиалов  
        let formdata = new FormData(); 
        Object.keys(object).forEach(item => formdata.append(item, object[item])); // Переводим объект в форм дату
        dispatch( formRequested() );
        postSalariesRequest(formdata)
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--