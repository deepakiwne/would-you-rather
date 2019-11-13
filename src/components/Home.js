import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

class Home extends Component {

  render() {
    return (
    <div className='card'>
      <div className='card-body'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="unanswered-tab"
              data-toggle="tab" href="#unanswered" role="tab"
              aria-controls="unanswered" aria-selected="true">Unanswered Questions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="answered-tab"
              data-toggle="tab" href="#answered" role="tab"
              aria-controls="answered" aria-selected="false">Answered Questions</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="unanswered" role="tabpanel" aria-labelledby="unanswered-tab">
            <ul className='dashboard-list'>
              {this.props.unanswered.map((id) => (
                <li key={id}>
                  <QuestionCard id={id} highlight={true} />
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab">
            <ul className='dashboard-list'>
              {this.props.answered.map((id) => (
                <li key={id}>
                  <QuestionCard id={id} highlight={true} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  
  const user = users[authedUser]

  const answered = Object.keys(user.answers)
  .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  return {
    qIds: Object.keys(questions),
    answered,
    unanswered: Object.keys(questions).filter((id) => !answered.includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)