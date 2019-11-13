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
  }
  onTwo = (e) => {
    e.preventDefault()
    this.setState({
      selection: 'two'
    })
  }
  onSubmit = (e) => {
    e.preventDefault()

    const { id, dispatch } = this.props

    dispatch(handleAddUserAnswer(id, this.state.selection === 'one' ? 'optionOne' : 'optionTwo'))

  }
  render() {

    const { optionOne, optionTwo } = this.props

    return (

      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title mb-4" style={{fontSize: 20, fontWeight: 'bold'}}>Would you rather ...</h5>
          <div className="form-check">
            <input className="form-check-input" type="radio"
              value={this.state.selection} onChange={this.onOne}/>
            <label className="card-subtitle mb-2">
              {optionOne}
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio"
              value={this.state.selection} onChange={this.onTwo}/>
            <label className="card-subtitle mb-2">
              {optionTwo}
            </label>
          </div>
          <button className='mt-3 btn btn-success btn-block' onClick={this.onSubmit}>Submit</button>
        </div>
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