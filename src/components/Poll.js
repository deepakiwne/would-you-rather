import React, { Component } from 'react'

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
        <button className='btn' onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

export default Poll