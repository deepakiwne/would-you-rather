import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class Question extends Component {

  toPoll = (e) => {
    e.preventDefault()
    // todo: View Poll
  }
  render() {
    const { owner, avatar, question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    // console.log(this.props)

    const { optionOne } = question

    return (
      <div className='question'>
        <p>{owner} asks:</p>
        <img
          src={avatar}
          alt={`Avatar of ${owner}`}
          className='avatar'
        />
        <div className='question-info'>
            <p>Would you rather</p>
            <p>...{optionOne.text}...</p>
            <p>{formatDate(question.timestamp)}</p>
            <button className='btn' onClick={this.toPoll}>View Poll</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {

  const question = questions[id]

  return {
    authedUser,
    owner: users[question.author].name,
    avatar: users[question.author].avatarURL,
    question: question
      ? question
      : null
  }
}

export default connect(mapStateToProps)(Question)