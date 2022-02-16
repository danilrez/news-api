// Converter
export const dateConverter = (date) => {
  const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2}:\d{2})Z/;
  const dd = date.replace(pattern, '$1'),
    mm = date.replace(pattern, '$2'),
    yyyy = date.replace(pattern, '$3'),
    time = date.replace(pattern, '$4');
  return `[${dd}.${mm}.${yyyy} ${time}]`;
};
