import axios from "axios";

export function loadComic() {
  return (dispatch) => {
    return axios
      .get("https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json")
      .then((response) => {
        dispatch(changeComic(response.data));
      });
  };
}

export function changeComic(comicData) {
  return {
    type: "CHANGE_COMIC",
    title: comicData.title,
    image: comicData.img,
    alt: comicData.alt,
  };
}
