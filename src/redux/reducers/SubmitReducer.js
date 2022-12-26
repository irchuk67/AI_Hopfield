import {SUBMIT_FORM} from "../types";

export default (state = false, action) => {
    switch (action.type){
        case SUBMIT_FORM:
            return action.payload
        default:
            return state
    }
}