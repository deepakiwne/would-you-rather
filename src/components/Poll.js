import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddUserAnswer } from '../actions/shared'

class Poll extends Component {

  state = {
    selection: 'one'
  }

  onOne = (e) => {
    e.preventDefault()
    this.setState({
      selection: 'one'
    })
    console.log('onOne')
  }
  onTwo = (e) => {
    e.preventDefault()
    this.setState({
      selection: 'two'
    })
    console.log('onTwo')
  }
  onSubmit = (e) => {
    e.preventDefault()
    // TODO: Submit

    const { id, dispatch } = this.props

    dispatch(handleAddUserAnswer(id, this.state.selection === 'one' ? 'optionOne' : 'optionTwo'))

  }
  render() {

    const { optionOne, optionTwo } = this.props

    return (
      <div>
        <p>Would you rather ...</p>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
            value={this.state.selection} onChange={this.onOne}/>
          <label className="form-check-label" htmlFor="exampleRadios1">
            {optionOne}
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
            value={this.state.selection} onChange={this.onTwo}/>
          <label className="form-check-label" htmlFor="exampleRadios2">
            {optionTwo}
          </label>
        </div>
        <button className='btn btn-success' onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps ({ questions }, { id }) {

  return {
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text
  }
}

export default connect(mapStateToProps)(Poll)