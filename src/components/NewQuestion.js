import React, { Component } from 'react'

class NewQuestion extends Component {

  render() {

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
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Option One Text Here" />
                    </div>
                    <div className='form-group text-center h5'><strong>OR</strong></div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            placeholder="Enter Option Two Text Here" />
                    </div>
                    <button type="button" className="btn btn-success btn-lg btn-block">Submit</button>
                </form>
            </div>
        </div>
    )
  }
}

export default NewQuestion