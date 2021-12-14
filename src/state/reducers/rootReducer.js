const rootReducer = (state, action) => {
  if (action.type === "CHANGE_GREETING") {
    return {
      ...state,
      greeting: action.payload,
    };
  } else {
    return state;
  }
};

export default rootReducer;
