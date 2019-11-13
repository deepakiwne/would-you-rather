import React, { Component } from 'react'
import { connect } from 'react-redux'
import Highlight from './Highlight'
import Poll from './Poll'
import Result from './Result'

class QuestionCard extends Component {

  switchView = (question, optionOne, optionTwo) => {
    switch(this.props.view) {
      case 'poll':
        return <Poll id={this.props.id}/>
      case 'result':
        return <Result
          optionOneText={optionOne.text}
          optionTwoText={optionTwo.text}
          optionOneVotes={optionOne.votes.length}
          optionTwoVotes={optionTwo.votes.length}
          authedUserOption={this.props.authedUserOption}/>
      default:
        return <Highlight id={this.props.id} highlight={optionOne.text} timestamp={question.timestamp}/>
    }
  }
  header = () => {
    switch(this.props.view) {
      case 'result' :
        return <strong>Asked by {this.props.owner}</strong>
      default :
        return <strong>{this.props.owner} asks:</strong>
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

      <div className="card">
        <h6 className="card-header">{this.header()}</h6>
        <div className="card-body">
          <div className="media">
            <img className="mr-3 align-self-center"
              style={{width: '100px', height: '100px'}}
              src={avatar}
              alt={`Avatar of ${owner}`}/>
            <div className="media-body">
              {this.switchView(question, optionOne, optionTwo)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id, highlight }) {

  const question = questions[id]
  const ans = Object.keys(users[authedUser].answers)
  // const qus = users[authedUser].questions

  return {
    authedUser,
    owner: users[question.author].name,
    avatar: users[question.author].avatarURL,
    authedUserOption: question.optionOne.votes.includes(authedUser)
      ? 1 
      : question.optionTwo.votes.includes(authedUser)
        ? 2
        : 0,
    question: question
      ? question
      : null,
    view: highlight
          ? 'highlight'
          : (!ans.includes(id) ? 'poll' : 'result')
  }
}

export default connect(mapStateToProps)(QuestionCard)