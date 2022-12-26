import Letter from "./components/letter";
import Cell from "./components/cell";
import './App.scss';
import Letters from "./components/letters";
import Draw from "./components/draw";
import Button from "./components/button";
import Result from "./components/result";
import {connect} from "react-redux";
import {train} from "./redux/actions";
import {useEffect} from "react";

const App = (props) => {

    return (
        <div className="App">
            <div className={'letters-section'}>
                <h3>Letters that can be recognised</h3>
                <Letters/>
            </div>
            <div className={'draw-section'}>
                <h3>Place for drawing letter</h3>
                <Draw />
            </div>
            <Button/>
            {props.isSubmitted ? <div className={'result-section'}>
                <h3>Correct letter: </h3>
                <Result/>
            </div> : null}
        </div>
    );
}


const mapStateToProps = state => {
    return({
        data: state.data,
        isSubmitted: state.isSubmitted
    })
}
export default connect(mapStateToProps, {train})(App);
