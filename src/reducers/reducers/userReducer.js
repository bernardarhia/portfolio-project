import {actions} from '../actions/actions'
function userReducer(state, action) {
  switch (action.type) {
    case actions.hasToken:{
        return {...state, isAuth:true, details:{user: action.user }};
    }
    case actions.LOGOUT:{
        return {...state, isAuth:false, details:{}}
    }
    default: {
      return state;
    }
  }
}
export {userReducer}