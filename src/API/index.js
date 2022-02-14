import axios from 'axios';

// config
const _apiURL = 'https://newsapi.org/v2/everything',
  _apiKey = '0d7c2e234e124716a93239d86d69fec1', // not secure. better way is using github secrets
  _keywords = 'education',
  _sortBy = 'popularity';

const URL = `${_apiURL}?q=${_keywords}&sortBy=${_sortBy}&apiKey=${_apiKey}`;

// GET
export const fetchData = async () => {
  let changeableUrl = URL;

  try {
    const {
      data: { status, totalResults, articles },
    } = await axios.get(changeableUrl);
    return { status, totalResults, articles };
  } catch (error) {
    return error;
  }
};

// Converter
export const dateConverter = (date) => {
  const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2}:\d{2})Z/;
  const dd = date.replace(pattern, '$1'),
    mm = date.replace(pattern, '$2'),
    yyyy = date.replace(pattern, '$3'),
    time = date.replace(pattern, '$4');
  return `[${dd}.${mm}.${yyyy} ${time}]`;
};
