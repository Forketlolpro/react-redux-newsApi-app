import { combineReducers } from 'redux';

import {REQUEST_NEWS, RECEIVE_NEWS, LOG_IN, LOG_OUT} from '../actions/actions';

function initFromLocalStorage () {
  return localStorage.getItem('loggedIn') ? true : false;
}

function app (state = {loggedIn: initFromLocalStorage()}, action) {
    switch (action.type) {
        case LOG_IN:
          return Object.assign({}, state, {
            loggedIn: true
          })
        case LOG_OUT:
          return Object.assign({}, state, {
            loggedIn: false
          })
        default:
          return state
      }
}

function news (state = {isFetching: false, items: [], lastUpdated: undefined}, action) {
    switch (action.type) {
        case REQUEST_NEWS:
          return Object.assign({}, state, {
            isFetching: true
          })
        case RECEIVE_NEWS:
          return Object.assign({}, state, {
            isFetching: false,
            items: action.news,
            lastUpdated: action.receivedAt
          })
        default:
          return state
      }
}

const rootReducer = combineReducers({app, news})

export default rootReducer