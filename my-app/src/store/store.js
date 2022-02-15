import { createStore, combineReducers } from "redux";
import { reducerAuth } from "./auth";
import { reducerPortafolio } from "./portafolio";
import { reducerGeneral } from "./general";
// /*ESTADO INICIAL*/
// const initialState = {
//   counter: 0,
//   isLogin: false,
//   user: null,
// };

// /*FUNCION REDUCER */
// function mainReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT": {
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     }

//     case "DECREMENT": {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// }

const allReducer = combineReducers({
  auth: reducerAuth,
  portafolio: reducerPortafolio,
  general: reducerGeneral,
});

export const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
