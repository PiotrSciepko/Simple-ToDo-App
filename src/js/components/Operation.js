import React from 'react';
import {connect} from "react-redux";
import {removeOperation, setIsDone} from "../redux/actions";

const Operation = ({operation, onDone, onRemove}) => {

    const handleRemove = id => {
        onRemove(id);
    }

    return (
        <div>
                <li style={{textDecoration: operation.isDone && "line-through", display: "inline-block"}}
                    onClick={() => onDone(operation.id)}>{operation.name}
                </li>
                <button style={{display: "inline-block"}} disabled={!operation.isDone}
                        onClick={() => handleRemove(operation.id)}>Usuń
                </button>
        </div>
    );
};

const mapDispatch = dispatch => ({
    onDone: id => dispatch(setIsDone(id)),
    onRemove: id => dispatch(removeOperation(id))
})

export default connect(null, mapDispatch)(Operation);