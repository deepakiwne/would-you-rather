import { RECEIVE_USERS } from '../actions/users'
import { ADD_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION :

      const { uid, qid } = action

      return {
        ...state,
        [uid]: {
          ...state[uid],
          questions: [...state[uid].questions, qid] }
      }
    default :
      return state
  }
}