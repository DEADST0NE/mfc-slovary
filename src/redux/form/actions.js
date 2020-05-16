import {
    FORM_STATUS_REQUEST,
    FORM_STATUS_SUCCESS,
    FORM_STATUS_ERROR,
    FORM_STATUS_CLEAR
} from '../constActions';

export const formRequested = () => ({
    type: FORM_STATUS_REQUEST
});
export const formSuccess = () => ({
    type: FORM_STATUS_SUCCESS
});
export const formError = () => ({
    type: FORM_STATUS_ERROR
});
export const formClear = () => ({
    type: FORM_STATUS_CLEAR
});
