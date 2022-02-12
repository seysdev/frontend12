const initialState = {
  portafolio: [],
};

export function reducerPortafolio(state = initialState, action) {
  switch (action.type) {
    case "SET_PORTAFOLIO": {
      return {
        ...state,
        portafolio: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
