import React, {useEffect} from "react";
import Letter from "./letter";
import {connect} from "react-redux";
import {readFiles, train} from "../redux/actions";
import './letters.scss';

let Letters = (props) => {
    useEffect( () => {
        props.readFiles();
    }, [])

    let letters = props.data.map(letterArray => <Letter array={letterArray}/>)
    return (
        <div className={'letters'}>
            {letters}
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        data: state.data
    }
}
export default connect(mapStateToProps, {readFiles, train})(Letters);