import React, {useState} from 'react';
import {connect} from "react-redux";
import {addTask} from "../redux/actions";

const AddTask = ({onAdd}) => {

    const [newTask, setNewTask] = useState('');

    const handleChange = e => {
        setNewTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onAdd(newTask);
        setNewTask('');
    };

    return (
        <form>
            <h1>
                <input style={{fontSize: "1em"}} placeholder={"Wprowadź zadanie"} type={"text"} onChange={handleChange}
                       value={newTask}/>
                <button style={{fontSize: "1em"}} onClick={handleSubmit}>Dodaj</button>
            </h1>
        </form>
    )
};

const mapDispatch = dispatch => ({
    onAdd: newTask => dispatch(addTask(newTask)),
})

export default connect(null, mapDispatch)(AddTask);