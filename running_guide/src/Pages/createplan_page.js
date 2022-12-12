import '../App.css';
import React from 'react'
import Nav from '../components/navbar';
import CreatePlan from '../components/createPlan';

function PlanPage() {
  
  return (
    <div className="CreatePlan">
      <Nav/>
      <CreatePlan/>
    </div>
  );
}

export default PlanPage;