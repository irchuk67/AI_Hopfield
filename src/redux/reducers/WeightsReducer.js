import {TRAIN_AI} from "../types";

const INITIAL_STATE = [];
export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case TRAIN_AI:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}