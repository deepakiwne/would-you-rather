import React, { Component } from 'react'

function ResultCard ({ option, votes, totalVotes, percent, color, textColor }) {

  return (
    <div className="card mb-3" style={{background: color}}>
      <div className="card-body">
        <h6 className="card-title" style={{color: textColor}}>Would you rather {option}?</h6>
        <div className="progress" style={{height: '35px'}}>
          <div className="progress-bar bg-success" role="progressbar"
            style={{width: percent + '%', height: '35px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            {percent}%
          </div>
        </div>
        <div className='text-center mt-1' style={{fontSize: 15, fontWeight: 'bold'}}>{votes} out of {totalVotes} votes</div>
      </div>
    </div>
  )
}

class Result extends Component {

  render() {

    const { optionOneText, optionTwoText, optionOneVotes, optionTwoVotes } = this.props
    const optionOnePercent = optionOneVotes + optionTwoVotes === 0 ? 0 : ((optionOneVotes * 100)/(optionOneVotes + optionTwoVotes)).toFixed(1)
    const optionTwoPercent = optionOneVotes + optionTwoVotes === 0 ? 0 : ((optionTwoVotes * 100)/(optionOneVotes + optionTwoVotes)).toFixed(1)

    return (

      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Results:</h5>
          <ResultCard
            option={optionOneText}
            votes={optionOneVotes}
            totalVotes={optionOneVotes + optionTwoVotes}
            percent={optionOnePercent}
            color={'#E8F5E9'}
            textColor={'#00796b'}/>
          <ResultCard
            option={optionTwoText}
            votes={optionTwoVotes}
            totalVotes={optionOneVotes + optionTwoVotes}
            percent={optionTwoPercent}/>
        </div>
      </div>
    )
  }
}

export default Result