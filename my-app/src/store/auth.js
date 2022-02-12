const initialState = {
  isLogin: false,
  user: null,
};

export function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case "SET_IS_LOGIN": {
      return {
        ...state,
        isLogin: action.payload,
      };
    }

    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }

    case "RESET": {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
