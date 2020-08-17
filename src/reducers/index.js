let defaultState = {
  title: "COVID Risk Comfort Zone",
  image: "https://imgs.xkcd.com/comics/covid_risk_comfort_zone.png",
  alt:
    "I'm like a vampire, except I'm not crossing that threshold even if you invite me.",
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
