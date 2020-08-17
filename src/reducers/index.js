let defaultState = {
  color: "red",
};
const mainReducer = (state = defualteState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.color,
      };
      break;
    default:
      return {
        ...state,
      };
  }
};

export default mainReducer;
