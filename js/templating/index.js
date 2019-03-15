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
    // Check for any nested options (i.e. '{{ anything.anyNestedThing }}')
    return variable.split('.').reduce((previous, current) => {
      return previous[current];
    }, data) || '';
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
  return list;
}