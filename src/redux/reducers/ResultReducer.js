import {FIND_CORRECT_LETTER} from "../types";

const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) =>  {
    switch (action.type){
        case FIND_CORRECT_LETTER:
            return action.payload;
        default:
            return state;
    }
}