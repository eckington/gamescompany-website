let gamesListTemplate = [
  '<div class="game">',
  '  <img src="{{image}}">',
  '  <span class="game--name">{{name}}</span>',
  '  <span class="game--publisher">By <i>{{publisher}}</i></span>',
  '  <a href="{{link}}" class="button">See Reviews</a>',
  '</div>'
].join('\n');

/**
 * Generates HTML markup from a template and data object.
 *
 * @param {String} template The template text to generate markup from
 * @param {Object} data The data to fill markup with
 * @returns {String} The generated HTML markup
 */
function render(template, data) {
  // Replace any text in the format '{{anything}}' with a variable found in the `data` parameter
  return template.replace(/\{\{\s?(\w+)\s?\}\}/g, (match, variable) => {
    if(variable === 'pcGames') return listRender(gamesListTemplate, data.games.pc);
    return data[variable] || '';
  });
}

/**
 * Generates HTML markup for data in an array.
 * 
 * @param {String} template The template to be reused across the list
 * @param {String} data The data to fill markup with
 * @returns {String} The generated HTML markup 
 */
function listRender(template, data) {
  let list = [];
  data.forEach(d => {
    list.push(
      render(template, d)
    );
  });
  return list.join('\n');
}