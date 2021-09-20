import { createStore, applyMiddleware, compose } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initialState = {
  rooms: [],
  roomsUsage: [],
  clients: [],
  loading: true,
  error: null,
  newRoomUsage: [],
  user: []
}

export function fetchHomePage() {
  return (dispatch) => {
    axios({
      url: 'http://localhost:3001/usage',
      method: 'GET'
    })
      .then(({ data }) => {
        dispatch({ type: 'SET_ROOMS_USAGE', payload: data })
      })
      .catch(err => {
        dispatch({ type: 'SET_ERROR', payload: err })
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false})
      })
  }
}

export function fetchAllClient() {
  return (dispatch) => {
    axios({
      url: `http://localhost:3001/client`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({ type: 'SET_CLIENTS', payload: data })
    })
    .catch(err => {
      dispatch({ type: 'SET_ERROR', payload: err})
    })
    .finally(() => {
      dispatch({ type: 'SET_LOADING', payload: false})
    })
  }
}

export function fetchAllRoom() {
  return (dispatch) => {
    axios({
      url: `http://localhost:3001/room`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({ type: 'SET_ROOMS', payload: data })
    })
    .catch(err => {
      dispatch({ type: 'SET_ERROR', payload: err})
    })
    .finally(() => {
      dispatch({ type: 'SET_LOADING', payload: false})
    })
  }
}

export function createRoomUsage(data) {
  return (dispatch) => {
    axios({
      url: `http://localhost:3001/usage`,
      method: 'POST',
      data
    })
    .then(({ data }) => {
      dispatch({ type: 'SET_SAVE_USAGE', payload: data })
    })
    .catch(error => {
      dispatch({ type: 'SET_ERROR', payload: error})
    })
    .finally(() => {
      dispatch({ type: 'SET_LOADING', payload: false})
    })
  }
}

export function loginUser(data) {
  return (dispatch) => {
    axios({
      url: `http://localhost:3001/user`,
      method: 'POST',
      data
    })
    .then(({ data }) => {
      dispatch({ type: 'SET_USER', payload: data })
    })
    .catch(error => {
      dispatch({ type: 'SET_ERROR', payload: error})
    })
    .finally(() => {
      dispatch({ type: 'SET_LOADING', payload: false})
    })
  }
}

function reducer(state = initialState, action) {
  if (action.type === 'SET_ROOMS_USAGE') {
    return {...state, roomsUsage: action.payload}
  }
  if (action.type === 'SET_LOADING') {
    return {...state, loading: action.payload}
  }
  if (action.type === 'SET_ERROR') {
    return {...state, error: action.payload}
  }
  if (action.type === 'SET_CLIENTS') {
    return {...state, clients: action.payload}
  }
  if (action.type === 'SET_ROOMS') {
    return {...state, rooms: action.payload}
  }
  if (action.type === 'SET_SAVE_USAGE') {
    return {...state, newRoomUsage: action.payload}
  }
  if (action.type === 'SET_USER') {
    return {...state, user: action.payload}
  }
  return state
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store