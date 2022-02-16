import { FETCH_NEWS, DELETE_NEWS } from './types';

const initialState = {
  news: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: action.data.articles,
        status: action.data.status,
        totalResults: action.data.totalResults,
      };

    case DELETE_NEWS:
      const { id } = action;
      const { news } = state;
      const itemIndex = news.findIndex((res) => res.id === id);
      const nextNews = [...news.slice(0, itemIndex), ...news.slice(itemIndex + 1)];

      return {
        ...state,
        news: nextNews,
      };

    default:
      return state;
  }
};
