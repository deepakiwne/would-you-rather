export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserQuestion (uid, qid) {
  return {
    type: ADD_USER_QUESTION,
    uid,
    qid,
  }
}

export function addUserQuestionAnswer (uid, qid, answer) {
  return {
    type: ADD_USER_QUESTION_ANSWER,
    uid,
    qid,
    answer,
  }
}