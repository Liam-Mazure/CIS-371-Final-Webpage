import '../App.css';
import React from 'react'
import Cal from '../components/calendar';
import Nav from '../components/navbar';

function CalPage() {
  
  return (
    <div className="Calender">
      <Nav/>
      <Cal/>
    </div>
  );
}

export default CalPage;