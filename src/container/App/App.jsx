import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Employees from '../../pages/Employees/';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalArea from '../../pages/PersonalArea';
import s from './App.module.scss'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header /> 
          <div className={s.conteiner}>
            <Sidebar />
            <Route exact path="/" component={ () => <Employees/> }/> 
            <Route path="/PersonalArea" 
              component={ (props) => <PersonalArea {...props}/> }/>
          </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
