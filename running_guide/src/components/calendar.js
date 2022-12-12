import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US")
  }
  
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})
  
  const events = [
    {
        title: "Easy Run",
        start: new Date(2022, 11, 5),
        end: new Date(2022, 11, 5)
    },
    {
        title: "Tempo Run",
        start: new Date(2022, 11, 7),
        end: new Date(2022, 11, 7)
    },
    {
        title: "Long Run",
        start: new Date(2022, 11, 9),
        end: new Date(2022, 11, 9)
    },
]

function Cal(){
    const [newEvent, setNewEvent] = useState({title: "", start_date: "", end_date: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent])
    }
    return(
        <div className = "calendar">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input id = "event_title" type = "text" placeholder = "Add Title" value = {newEvent.title} onChange = {(e) => setNewEvent({...newEvent, title: e.target.value})} />
                <DatePicker id = "start_date" placeholderText = "Start Date" selected = {newEvent.start} onChange = {(start) => setNewEvent({...newEvent, start})} />
                <DatePicker placeholderText = "End Date" selected = {newEvent.end} onChange = {(end) => setNewEvent({...newEvent, end})} />
                <button id = "add_eventbtn" onClick = {handleAddEvent}>Add Event</button>
            </div>
            <Calendar id = "cal_style" localizer = {localizer} events = {allEvents} startAccesor = "start" endAccesor = "end" />

        </div>
    );

}

export default Cal;