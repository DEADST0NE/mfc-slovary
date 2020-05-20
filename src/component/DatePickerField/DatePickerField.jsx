import React from 'react';
import { useField, useFormikContext } from "formik";
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker 
            {...field}
            {...props}
            locale={ru}
            placeholderText='дд.мм.гггг'
            dateFormat='dd.MM.yyyy'
            selected={field.value}
            onChange={val => {  
                setFieldValue(field.name, val);
            }}
        />
    );
};

export default DatePickerField;