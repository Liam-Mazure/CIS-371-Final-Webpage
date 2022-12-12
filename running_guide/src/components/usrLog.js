import React from "react";
import Entry from "./log_entry";
import AddEntry from "./addEntry";

const Log = ({notes, handleAddLog, handleDeleteLog}) => {
    return (
        <div className = "log_list">
            {notes.map((note) => (
                <Entry id = {note.id} text = {note.text} date = {note.date} handleDeleteLog = {handleDeleteLog}/>
            ))}
            <AddEntry handleAddLog = {handleAddLog}/>
        </div>
    );
}


export default Log;