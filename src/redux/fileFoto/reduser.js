import {
    FILE_FORM_FOTO_UPLOADED,
    FILE_FORM_FOTO_CLEAR,
} from '../constActions';

const initialState = {
    file: null,
} 

const reducerFileFoto = (state = initialState, action) => { 
    switch(action.type){ 
        case FILE_FORM_FOTO_UPLOADED:
            console.log(action.payload)
            return {
                ...state,
                file: action.payload
            }
        case FILE_FORM_FOTO_CLEAR:
            return {
                ...state,
                file: null
            }
        default: 
            return state;
    }
}

export default reducerFileFoto;