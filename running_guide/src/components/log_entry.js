import React from "react";
import {MdDeleteForever} from 'react-icons/md';

const Entry = ({ id, text, date, handleDeleteLog}) => {
    return (
        <div className = "single_enrty">
            <span>{text}</span>
            <div className = "log_footer">
                <small>{date}</small>
                <MdDeleteForever className = "delete_icon" size = "1.3em" onClick = {() => handleDeleteLog(id)}/>
            </div>
        </div>
    );
}

export default Entry;