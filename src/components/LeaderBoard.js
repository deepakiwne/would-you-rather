import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardCard from './LeaderBoardCard'

class LeaderBoard extends Component {

  render() {

    const { ids } = this.props

    return (
      <div className='mb-3'>
        <div className='mb-3'>
          {ids.map((id) => (
            <LeaderBoardCard key={id} id={id}/>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {

  return {
    ids: Object.keys(users)
      .sort((a,b) => 
        (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(LeaderBoard)