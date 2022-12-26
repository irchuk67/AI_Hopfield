import {READ_FILES} from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case READ_FILES:
            return action.payload
        default:
            return state
    }
}