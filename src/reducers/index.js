let defaultState = {
  title: "here is where the title would go",
  image: "here is where an image would go",
  alt: "this is an alternate text",
};
const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_COMIC":
      return {
        ...state,
        title: action.title,
        image: action.image,
        alt: action.alt,
      };
    default:
      return {
        ...state,
      };
  }
};

export default mainReducer;
