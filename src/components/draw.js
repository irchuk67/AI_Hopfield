import Cell from "./cell";
import './letter.scss';
import {Component} from "react";
import {connect} from "react-redux";
import {changeCellColor, drawLetter} from "../redux/actions";

class Draw extends Component{
    componentDidMount() {
        this.props.drawLetter(this.props.draw, this.onCellClick)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.draw !== this.props.draw){
            this.props.drawLetter(this.props.draw, this.onCellClick)
        }
    }

    onCellClick = (event) => {
       let index = +event.target.attributes.index.value;
       this.props.changeCellColor(index, this.props.draw)
    }

    render() {
        return(
            <div className={'letter'}>
                {this.props.cells}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        draw: state.draw,
        cells: state.cells
    })
}
export default connect(mapStateToProps, {changeCellColor, drawLetter})(Draw)