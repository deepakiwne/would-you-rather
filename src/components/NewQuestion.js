import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import {
    withRouter
  } from 'react-router-dom'

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    onOptionOne = (e) => {
        this.setState({
            optionOneText: e.target.value
        })
    }
    onOptionTwo = (e) => {
        this.setState({
            optionTwoText: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
    
        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))
    
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: ''
        }))

        // Navigate to home
        this.props.history.push('/home')
      }
  render() {

    const { optionOneText, optionTwoText } = this.state

    return (
        <div className="card" style={{width: '40rem'}}>
            <div className="card-header h2 text-center">
                Create New Question
            </div>
            <div className="card-body">
                <form>
                    <div className="form-text mb-4">Complete the question:</div>
                    <div className='h5 mb-2'><strong>Would you rather ...</strong></div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            value={optionOneText}
                            onChange={this.onOptionOne}
                            placeholder="Enter Option One Text Here"
                            maxLength={280}/>
                    </div>
                    <div className='form-group text-center h5'><strong>OR</strong></div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            value={optionTwoText}
                            onChange={this.onOptionTwo}
                            placeholder="Enter Option Two Text Here"
                            maxLength={280} />
                    </div>
                    <button type="button" className="btn btn-success btn-lg btn-block"
                        onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
  }
}

export default withRouter(connect()(NewQuestion))