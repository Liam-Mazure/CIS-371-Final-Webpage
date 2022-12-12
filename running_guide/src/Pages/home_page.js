import '../App.css';
import React from 'react'
import Nav from '../components/navbar';
import Home from '../components/home'

function HomePage() {
  
  return (
    <div className="Home">
      <Nav/>
      <Home/>
    </div>
  );
}

export default HomePage;