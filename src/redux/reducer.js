import { FETCH_QUOTE_SUCCESS } from "./actions";

const initialState = {
  quote: "",
  author: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default reducer;
