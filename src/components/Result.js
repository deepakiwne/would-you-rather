import React, { Component } from 'react'

function ResultCard ({ option, votes, totalVotes, percent }) {

  return (
    <div className="card mb-3" style={{width: '18rem'}}>
      <div className="card-body">
        <p className="card-text">Would you rather be {option}?</p>
        <div className="progress" style={{height: '35px'}}>
          <div className="progress-bar bg-success" role="progressbar"
            style={{width: percent + '%', height: '35px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            {percent}%
          </div>
        </div>
      </div>
      <p>{votes} out of {totalVotes} votes</p>
    </div>
  )
}

class Result extends Component {

  render() {

    const { optionOneText, optionTwoText, optionOneVotes, optionTwoVotes } = this.props
    const optionOnePercent = optionOneVotes + optionTwoVotes === 0 ? 0 : ((optionOneVotes * 100)/(optionOneVotes + optionTwoVotes)).toFixed(1)
    const optionTwoPercent = optionOneVotes + optionTwoVotes === 0 ? 0 : ((optionTwoVotes * 100)/(optionOneVotes + optionTwoVotes)).toFixed(1)

    return (
      <div className='question-info'>
        <p>Results</p>
        <ResultCard
          option={optionOneText}
          votes={optionOneVotes}
          totalVotes={optionOneVotes + optionTwoVotes}
          percent={optionOnePercent}/>
        <ResultCard
          option={optionTwoText}
          votes={optionTwoVotes}
          totalVotes={optionOneVotes + optionTwoVotes}
          percent={optionTwoPercent}/>
      </div>
    )
  }
}

export default Result