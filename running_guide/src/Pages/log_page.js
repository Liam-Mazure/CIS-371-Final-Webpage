import React, { useEffect } from 'react';
import Nav from '../components/navbar';
import Log from '../components/usrLog';
import {nanoid} from 'nanoid';
import {useState} from 'react';

function LogPage() {
    const[notes, setNotes] = useState([
        {id: nanoid(), text: "Example Log", date: "12/12/2022",},
        {id: nanoid(), text: "Example Log2", date: "12/13/2022",},
        {id: nanoid(), text: "Example Log3", date: "12/14/2022",},
    ]);

    const addLog = (text) => {
        const date = new Date();
        const newLog = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        }
        const newLogs = [...notes, newLog];
        setNotes(newLogs);
    }

    const deleteLog = (id) => {
        const newLogs = notes.filter((note) => note.id !== id);
        setNotes(newLogs);
    }
  
  return (
    <div className="Login">
        <Nav/>
        <Log notes = {notes} handleAddLog = {addLog} handleDeleteLog = {deleteLog}/>
    </div>
  );
}

export default LogPage;