import fetch from 'isomorphic-fetch'

const API_KEY = '1e8b4dc819d6466ea8058c7e399eba6e';
const ROOT_URL = `https://newsapi.org/v2/top-headlines?country=ru&apiKey=${API_KEY}`;

export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';


function requestNews() {
  return {
    type: REQUEST_NEWS
  }
}

function receiveNews(json) {
  return {
    type: RECEIVE_NEWS,
    news: json.articles,
    receivedAt: Date.now()
  }
}

export const logIn = () => {
    return {
      type: LOG_IN
    }
}

export const logOut = () => {
    return {
      type: LOG_OUT
    }
}

function shouldFetchNews(state) {
  const news = state.news.items
  if (!news.lenght) {
    return true
  } else if (news.isFetching) {
    return false
  }
}

export function fetchNewsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState())) {
      return dispatch(fetchNews())
    }
  }
}

export function fetchNews() {
    return (dispatch) => {
      dispatch(requestNews());
      return fetch(ROOT_URL)
        .then(response => response.json())
        .then(json => {
            dispatch(receiveNews(json))
        })    
    }
}