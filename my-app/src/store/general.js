const initialState = {
  loader: false,
};

export function reducerGeneral(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loader: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
