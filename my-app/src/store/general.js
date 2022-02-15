const initialState = {
  loader: false,
  count: 0,
};

export function reducerGeneral(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loader: action.payload,
      };
    }

    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    default: {
      return state;
    }
  }
}
