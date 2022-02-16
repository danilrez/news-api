import {
  FETCH_NEWS,
  LOADER_ON,
  LOADER_OFF,
  ERROR_ON,
  ERROR_OFF,
  DELETE_NEWS,
} from './types';
import uniqid from 'uniqid';

export const loaderOn = () => {
  return {
    type: LOADER_ON,
  };
};

export const loaderOff = () => {
  return {
    type: LOADER_OFF,
  };
};

export const errorOn = (msg) => {
  return (dispatch) => {
    dispatch({
      type: ERROR_ON,
      msg,
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 5000);
  };
};

export const errorOff = () => {
  return {
    type: ERROR_OFF,
  };
};

export const fetchNews = () => {
  return async (dispatch) => {
    const _apiURL = 'https://newsapi.org/v2/everything',
      _apiKey = '0d7c2e234e124716a93239d86d69fec1', // not secure. better way is using github secrets
      _keywords = 'education',
      _sortBy = 'popularity';

    const URL = `${_apiURL}?q=${_keywords}&sortBy=${_sortBy}&apiKey=${_apiKey}`;

    try {
      const response = await fetch(URL).then((res) => res.json());
      response.articles.forEach((el) => (el.id = uniqid()));

      setTimeout(() => {
        dispatch({
          type: FETCH_NEWS,
          data: response,
        });
        dispatch(loaderOff());
      }, 1500);
    } catch (err) {
      dispatch(errorOn(`Ошибка: ${err.message}`));
      dispatch(loaderOff());
    }
  };
};

export const newsDelete = (id) => {
  return {
    type: DELETE_NEWS,
    id: id,
  };
};
