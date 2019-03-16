let dataObject = {
  siteName: 'GamesCompany',
  xboxGames: 'Hello',
  pcGames: 'PC',
  ps4Games: 'PS4',
  games: {
    pc: [
      {
        name: 'Just Cause 4',
        image: 'https://via.placeholder.com/130x200.png',
        price: 34.55,
        publisher: 'Avalanche Studios',
        market: 'steam',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      },
      {
        name: 'PC Game',
        image: 'https://via.placeholder.com/130x200.png',
        link: '#'
      }
    ]
  }
}

let fourohfour = [
  '<div class="container">',
  '  <h1>404 error! Sorry!</h1>',
  '  <h2>That page wasn\'t found.</h2>',
  '</div>'
];

let routes = [
  { route: '/', file: 'index' },
  { route: '/reviews', file: 'reviews' },
  { route: '/games', file: 'games' },
  { route: '/games/pc', file: 'games-pc' },
  { route: '/games/ps4', file: 'games-ps4' },
  { route: '/games/xbox', file: 'games-xbox' },
  { route: '/search', file: 'search' }
];

/**
 * Loads and renders the template file corresponding to the hash URL
 * (i.e. index.html/#/test/main renders /tmpl/test--main.tmpl).
 */
function route() {
  // Get the correct route from the list above
  let url = window.location.hash.substring(1);
  let routeFile = routes.find(r => r.route == url);

  if(!routeFile) return document.getElementById('app').innerHTML = render(fourohfour.join('\n'));

  // If the route exists, set the path.
  let path = '../tmpl/' + routeFile.file + '.tmpl';

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

// Make sure the user is on the hash router
if(!window.location.hash.startsWith('#/')) window.location.replace('#/')

// Route as soon as the page is loaded
route();

// And then route again when the user changes their hash URL.
window.addEventListener('hashchange', route);