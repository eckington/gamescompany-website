let dataObject = { siteName: 'GamesCompany' }

let fourohfour = [
  '<h1>404 error! Sorry!</h1>',
  '<h2>That page wasn\'t found.</h2>'
];

/**
 * Loads and renders the template file corresponding to the hash URL
 * (i.e. index.html/#/test/main renders /tmpl/test--main.tmpl).
 */
function route() {
  let path = '';
  
  if(window.location.hash.substring(1) == '/') {   // If the path is exactly / then render the index page
    path = '../tmpl/index.tmpl';
  } else { // If not, render the page corresponding to the hash URL
    path = '../tmpl/' + window.location.hash.substring(2).replace(/\//g, '\-\-') + '.tmpl'
  }

  // XMLHttpRequest allows us to open the tmpl files.
  let req = new XMLHttpRequest();
      req.open('GET', path, true);
      req.send();

  // When the tmpl file finishes loading (or can't be found...):
  req.onloadend = () => {
    // If it can't be found...
    if(req.status == 404) {
      
      // ... render the 404 template (see top of file).
      document.getElementById('app').innerHTML = render(fourohfour.join('\n'));

    // But if it can...
    } else {
      
      // ... render it
      document.getElementById('app').innerHTML = render(req.responseText, dataObject);
    }
  }
}

// Route as soon as the page is loaded
route();

// And then route again when the user changes their hash URL.
window.addEventListener('hashchange', route);