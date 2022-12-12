import '../App.css';
import React from 'react'
import Nav from '../components/navbar';
import Account from '../components/account';

function AccountPage() {
  
  return (
    <div className="Account">
      <Nav/>
      <Account/>
    </div>
  );
}

export default AccountPage;