import React, { Component } from 'react'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    onOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }
    onOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
    
        const { optionOne, optionTwo } = this.state
    
        // todo: Add Question to Store

        console.group()
        console.log('New Question')
        console.log('Option One: ', optionOne)
        console.log('Option Two: ', optionTwo)
        console.groupEnd()
    
        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
      }
  render() {

    const { optionOne, optionTwo } = this.state

    return (
        <div className="card" style={{width: '40rem'}}>
            <div className="card-header h2 text-center">
                Create New Question
            </div>
            <div className="card-body">
                <form>
                    <div className="form-text text-muted mb-4">Complete the question:</div>
                    <div className='h5 mb-2'><strong>Would you rather ...</strong></div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            value={optionOne}
                            onChange={this.onOptionOne}
                            placeholder="Enter Option One Text Here"
                            maxLength={280}/>
                    </div>
                    <div className='form-group text-center h5'><strong>OR</strong></div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            value={optionTwo}
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

export default NewQuestion