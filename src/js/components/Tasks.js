import React from 'react';
import {connect} from "react-redux";
import {removeTask} from "../redux/actions";
import Task from "./Task";
import {selectOperations} from "../redux/selectors";

const Tasks = ({tasks, onRemove, operations}) => {

    const handleRemove = id => {
        onRemove(id);
    }

    return (
        <div style={{paddingLeft: "100px", textAlign: "left"}}>
            {/*<h2>*/}
                <ol>
                        {tasks.map(task => <Task key={'task' + task.id} task={task}
                                                 operations={selectOperations(operations, task.id)}
                                                 handleRemove={() => handleRemove(task.id)}/>)}
                </ol>
            {/*</h2>*/}
        </div>
    );
}

const mapState = state => ({
    tasks: state.tasks,
    operations: state.operations
});

const mapDispatch = dispatch => ({
    onRemove: id => dispatch(removeTask(id)),
});

export default connect(mapState, mapDispatch)(Tasks);