import React, { Component } from 'react'

class Login extends Component {

  state = {
      value : 'Soumya'
  }

  onSubmit = (e) => {
      e.preventDefault()
      console.log('Submit User: ', this.state.value)
  }
  onChange = (e) => {
      this.setState({
        value: e.target.value
      })
  }
  render() {

    const logo = 'https://images-na.ssl-images-amazon.com/images/I/61C+2uhGgCL.png'

    return (
        <div className="card" style={{width: '40rem'}}>
            <div className="card-header h6 text-center">
                <strong>Welcome To The Would You Rather App!</strong>
                <div className='text-muted mt-1'>Please sign in to continue</div>
            </div>
            <div className="card-body">
                <form>
                    <img src={logo}
                        className="rounded mx-auto d-block mb-4" style={{width: '250px', height: '250px'}} alt="Logo" />
                    <div className="form-group">
                        <select className="form-control" value={this.state.value} onChange={this.onChange}>
                        <option value='Soumya'>Soumya</option>
                        <option value='Ranjan'>Ranjan</option>
                        <option value='Bhuyan'>Bhuyan</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.onSubmit}>Sign In</button>
                </form>
            </div>
        </div>
    )
  }
}

export default Login