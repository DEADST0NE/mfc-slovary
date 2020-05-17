import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {searchItem, changeSetSearchText} from '../../utils/search';
import Button from 'react-bootstrap/Button';

import s from './SearchButton.module.scss'

const SearchButton = ({ searchText, setSearchText, setSearch, setSearchOn, mass, formModalOpen }) => { 
    return(
        <div className={s.searchBLeft}>
            <InputGroup>
                <FormControl placeholder="Строка поиска" 
                            onChange={ (event)=>{ changeSetSearchText(event, setSearchText, setSearchOn, setSearch) } }
                            onKeyDown={(event)=>{ if(event.keyCode === 13) {
                                searchItem(searchText, mass, setSearch); setSearchOn(true)} }} />
                <InputGroup.Append>
                    <Button variant="outline-secondary" 
                        onClick={ ()=>{ searchItem(searchText, mass, setSearch); setSearchOn(true) } }>Поиск</Button>
                </InputGroup.Append>
            </InputGroup>
            <Button className={s.formAdd} variant="primary" onClick={ formModalOpen }>Добавить</Button> 
        </div>  
    ) 
}

export default SearchButton;