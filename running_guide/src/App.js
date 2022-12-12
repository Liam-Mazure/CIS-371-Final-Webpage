import './App.css';
import React from 'react'
import CalPage from './Pages/calendar_page';
import MapPage from './Pages/map_page';
import CreateUsrPage from './Pages/createusr_page';
import LoginPage from './Pages/login_page';
import HomePage from './Pages/home_page';
import AccountPage from './Pages/account_page';
import PlanPage from './Pages/createplan_page';
import LogPage from './Pages/log_page';
import EditUsrPage from './Pages/editusr_page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <body className = "App">
      <BrowserRouter>
        <Routes>
          <Route path = '/calendar' element = {<CalPage/>} />
          <Route path = '/map' element = {<MapPage/>} />
          <Route path = '/createusr' element = {<CreateUsrPage/>} />
          <Route path = '/editusr' element = {<EditUsrPage/>} />
          <Route path = '/login' element = {<LoginPage/>} />
          <Route path = '/' element = {<LoginPage />} />
          <Route path = '/home' element = {<HomePage/>} />
          <Route path = '/account' element = {<AccountPage/>} />
          <Route path = '/createplan' element = {<PlanPage/>} />
          <Route path = '/log' element = {<LogPage/>} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
