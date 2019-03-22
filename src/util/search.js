import Fuse from 'fuse.js';

export default function fuzzy(array, keys, term) {
  const options = {
    shouldSort: true,
    threshold: 0.5,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys
  };
  const fuse = new Fuse(array, options);

  return fuse.search(term);
}

export function parseSearch(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
