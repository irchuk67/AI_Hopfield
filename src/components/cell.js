import './cell.scss';

let Cell = ({number, onClick, index}) => {
    let cellColor = number === 1 ? "black" : "white";
    return(
        <div className={'cell'} style={{backgroundColor: cellColor}} onClick={event => onClick(event)} index={index}></div>
    )
}
export default Cell;