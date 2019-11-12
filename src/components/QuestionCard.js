import React, { Component } from 'react'
import { connect } from 'react-redux'
import Highlight from './Highlight'
import Poll from './Poll'
import Result from './Result'

class QuestionCard extends Component {
  
  state = {
    view: 'highlight'
  }

  toPoll = (e) => {
    e.preventDefault()
    // todo: View Poll
  }
  switchView = (question, optionOne, optionTwo) => {
    switch(this.state.view) {
      case 'highlight':
        return <Highlight highlight={optionOne.text} timestamp={question.timestamp}/>
      case 'poll':
        return <Poll optionOne={optionOne.text} optionTwo={optionTwo.text}/>
      default:
        return <Result optionOne={optionOne.text} optionTwo={optionTwo.text}/>
    }
  }
  render() {
    const { owner, avatar, question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    // console.log(this.props)

    const { optionOne, optionTwo } = question

    return (
      <div className='question'>
        <p>{owner} asks:</p>
        <img
          src={avatar}
          alt={`Avatar of ${owner}`}
          className='avatar'
        />
        {this.switchView(question, optionOne, optionTwo)}
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

export default connect(mapStateToProps)(QuestionCard)