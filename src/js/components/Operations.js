import React from 'react';
import {connect} from "react-redux";
import {selectOperations} from "../redux/selectors";
import Operation from "./Operation";

const Operations = ({taskID, operations}) => {
    return (
        <div>
            <ul>
                {operations(taskID).map((operation, index) => <Operation key={'op' + index} operation={operation}/>)}
            </ul>
        </div>
    );
};

const mapState = state => ({
    operations: taskID => selectOperations(state.operations, taskID),
})

export default connect(mapState)(Operations);