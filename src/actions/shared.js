import { getInitialData, saveQuestion } from '../utils/api'
import { receiveUsers, addUserQuestion } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { receiveQuestions, addQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(authedUser, question.id))
        dispatch(hideLoading())
      })
  }
}