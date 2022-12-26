import Cell from "./cell";
import React from "react";
import {connect} from "react-redux";

let Result = (props) => {
    console.log(props.result)
    let resultLetter = props.result.map(number => <Cell number={number}/>)
    return (
        <div className={'letter'}>
            {resultLetter}
        </div>)
}

const mapStateToProps = state => {
    return {
        result: state.result
    }
}
export default connect(mapStateToProps)(Result)