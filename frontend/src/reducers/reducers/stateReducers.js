import { actions } from "../actions/actions";
const stateReducer = (state, action) => {
  switch (action.type) {
    case actions.IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: "",
        success: false,
      };
    }
    case actions.ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
        success: false,
      };
    }
    case actions.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
      };
    }
    case actions.SHOW: {
      return { ...state, show: !state.show };
    }

    default: {
      return state;
    }
  }
};

export default stateReducer;
