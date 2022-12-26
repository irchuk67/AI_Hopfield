import {CHANGE_LETTER_COLOR} from "../types";

const INITIAL_STATE = new Array(81).fill(-1)
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CHANGE_LETTER_COLOR:
            return action.payload
        default:
            return state
    }
}