import {
  RECEIVE_USERS,
  ADD_USER_QUESTION_ANSWER,
  ADD_USER_QUESTION
} from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION :
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          questions: [...state[action.uid].questions, action.qid] }
      }
    case ADD_USER_QUESTION_ANSWER :
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          answers: {
            ...state[action.uid].answers, [action.qid]: action.answer
            }
          }
        }
    default :
      return state
  }
}