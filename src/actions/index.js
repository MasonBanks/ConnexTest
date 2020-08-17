import axios from "axios";

const proxy = "https://cors-anywhere.herokuapp.com/";

export function loadComic() {
  return (dispatch) => {
    return axios.get(`${proxy}http://xkcd.com/info.0.json`).then((response) => {
      dispatch(changeComic(response.data));
    });
  };
}

export function loadSpecificComic(id) {
  console.log(id);
  return (dispatch) => {
    // try {
    return axios
      .get(`${proxy}http://xkcd.com/${id}/info.0.json`)
      .then((response) => {
        console.log(response);
        dispatch(changeComic(response.data));
      });
    // } catch (error) {
    //   console.log(error.response);
    //   return error.response;
    // }
  };
}

export function changeComic(comicData) {
  return {
    type: "CHANGE_COMIC",
    title: comicData.title,
    image: comicData.img,
    alt: comicData.alt,
    num: comicData.num,
  };
}
