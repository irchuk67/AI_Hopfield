import DataReducer from "./DataReducer";
import {combineReducers} from "redux";
import DrawReducer from "./DrawReducer";
import CellsReducer from "./CellsReduser";
import WeightsReducer from "./WeightsReducer";
import ResultReducer from "./ResultReducer";
import SubmitReducer from "./SubmitReducer";

export default combineReducers({
    data: DataReducer,
    draw: DrawReducer,
    cells: CellsReducer,
    weights: WeightsReducer,
    result: ResultReducer,
    isSubmitted: SubmitReducer
})