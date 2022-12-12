import {useState} from 'react';

const AddEntry = ({handleAddLog}) => {
    const [logText, setLogText] = useState('');

    const handleChange = (event) => {
        setLogText(event.target.value);
    }

    const handleSaveClick = () => {
        if(logText.trim().length > 0){
            handleAddLog(logText);
            setLogText('');
        }
    }

    return(
        <div className = "single_entry new">
            <textarea id = "entry_text" rows = "10" cols = "30" placeholder="Type Log Here" value = {logText} onChange = {handleChange}></textarea>
            <div className = "log_footer">
                <button className = "save" onClick = {handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddEntry;