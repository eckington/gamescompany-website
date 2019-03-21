import Fuse from "fuse.js";

export default function fuzzy(array, keys, term) {
  const options = {
    shouldSort: false,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys
  };
  const fuse = new Fuse(array, options);

  return fuse.search(term);
}

export function parseSearch(search, variable) {
  var query = search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return false;
}
