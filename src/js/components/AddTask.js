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
            <h1 className={'text-center'}>
                <div className={'input-group'}>
                    <input className={'form-control'} placeholder={"Wprowadź zadanie"} type={"text"} onChange={handleChange}
                           value={newTask}/>
                    <button className={"btn btn-primary"} onClick={handleSubmit}>Dodaj</button>
                </div>

            </h1>
        </form>
    )
};

const mapDispatch = dispatch => ({
    onAdd: newTask => dispatch(addTask(newTask)),
})

export default connect(null, mapDispatch)(AddTask);