import * as types from '../actions/actionTypes';

const initialValue = 0;
export default function countReducer(count= initialValue, action) {
    switch (action.type) {
        case types.INCREMENT:
            return count + 1;
        case types.DECREMENT:
            return count - 1;
        default:
            return count;
    }
}