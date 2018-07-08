import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const intialStateSearch = {
  searchField: ''
}

export const searchRobots = (state=intialStateSearch , action={}) => {
  switch(action.type){
    case  CHANGE_SEARCHFIELD:
      return {...state, searchField: action.payload}
    default: 
      return state
  }
}

const intialStateRobots = {
  isPending:false,
  robots:[],
  error:''
}

export const requestRobots = (state=intialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false }
    default:
      return state
  }
}