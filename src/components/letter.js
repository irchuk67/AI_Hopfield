import React from "react";
import Cell from './cell';
import './letter.scss';

let Letter = ({array}) => {
    let letter = array.map(number => <Cell number={number}/>)
    return (
        <div className={'letter'}>
            {letter}
        </div>)
}
export default Letter;