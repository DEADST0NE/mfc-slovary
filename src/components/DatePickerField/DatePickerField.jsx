import React from 'react';
import { useField, useFormikContext } from "formik";
import DatePicker from 'react-datepicker';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const locale = {
    localize: {
        month: n => months[n],
        day: n => days[n]
    },
    formatLong: {}
}

const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker
            {...field}
            {...props}
            locale={locale}
            placeholderText='дд.мм.гггг'
            dateFormat="dd.MM.yyyy"
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};

export default DatePickerField;