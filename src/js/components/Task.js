import React, {useState} from 'react';
import Operations from "./Operations";
import {addOperation} from "../redux/actions";
import {connect} from "react-redux";

const Task = ({task, handleRemove, operations, onAdd}) => {

    const [newOperation, setNewOperation] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const operation = {
            name: newOperation.trim(),
            isDone: false,
            taskID: task.id
        }
        onAdd(operation);
        setNewOperation('');
        setIsVisible(false);
    }

    const handleClose = e => {
        e.preventDefault();
        setIsVisible(false);
    }

    return (
        <div>
            <h2>
                <li>
                    {task.name}
                    <button className={"btn btn-outline-danger"} disabled={operations.length} onClick={() => handleRemove(task.id)}>Usuń</button>
                    <button className={"btn btn-outline-info"} hidden={isVisible} onClick={() => setIsVisible(true)}>Dodaj operację</button>
                    <form style={{display: isVisible ? "inline-block" : "none"}}>
                        <input onChange={e => setNewOperation(e.target.value)} value={newOperation}
                               placeholder={'Podaj nazwę'}/>
                        <button className={"btn btn-outline-primary"} onClick={handleSubmit}>Dodaj</button>
                        <button className={"btn btn-outline-secondary"} onClick={handleClose}>Zamknij</button>
                    </form>
                </li>
            </h2>
            <h3>
                <Operations taskID={task.id}/>
            </h3>

        </div>
    );
};

const mapDispatch = dispatch => ({
    onAdd: operation => dispatch(addOperation(operation)),
})

export default connect(null, mapDispatch)(Task);