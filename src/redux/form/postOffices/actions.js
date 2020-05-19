import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {getOffices} from '../../getOffices/actions';

//Запрос на добавление филиала
    const postOfficesRequest = async ( object ) => {
        return await axios.post(`Offices`, object) 
    };

    export const postOffices = (object) => (dispatch) => { 
        setTimeout( () => { dispatch( getOffices() )}, 5000 );//Обновляем список филиалов 
        let formdata = new FormData(); 
        Object.keys(object).forEach(item => formdata.append(item, object[item])); // Переводим объект в форм дату
        dispatch( formRequested() );
        postOfficesRequest(formdata)
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--