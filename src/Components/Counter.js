import React from 'react';
import * as actionCreators from '../redux-store/actions/actionCreators';
import { connect } from 'react-redux';

export const Counter = (props) => {
    const { count, increment, decrement } = props;
    return (
        <div>
            Count = {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default connect(
    state => state,
    actionCreators,
)(Counter);