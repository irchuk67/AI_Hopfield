import {connect} from "react-redux";
import {train, findCorrectLetter, submitForm} from "../redux/actions";
import './button.scss'

let Button = (props) => {
    let onSubmit = () => {
        console.log(props.data)
        props.train(props.data);
        props.findCorrectLetter(props.draw, props.data, props.weights)
        props.submitForm()
    }
    return <button className={'button'} onClick={() => onSubmit()}>Submit</button>
}

const mapStateToProps = (state) => {
  return(
      {
          draw: state.draw,
          weights: state.weights,
          data: state.data
      }
  )
}

export default connect(mapStateToProps, {train, findCorrectLetter, submitForm})(Button)