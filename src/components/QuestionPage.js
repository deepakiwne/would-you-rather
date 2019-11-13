import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

class QuestionPage extends Component {

  render() {
    const { id, question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    console.log(this.props)

    return (
        <QuestionCard id={id} highlight={false}/>
    )
  }
}

function mapStateToProps ({authedUser, questions}, props) {

  const { id } = props.match.params
  const question = questions[id]

  return {
    id,
    authedUser,
    question: question
      ? question
      : null
  }
}

export default connect(mapStateToProps)(QuestionPage)