let dataObject = { siteName: 'GamesCompany' }

let fourohfour = [
  '<h1>404 error! Sorry!</h1>',
  '<h2>That page wasn\'t found.</h2>'
];

function route() {
  let path = '../tmpl/' + window.location.hash.substring(2) + '.tmpl'

  let req = new XMLHttpRequest();
      req.open('GET', path, true);
      req.send();

  req.onloadend = () => {
    if(req.status == 404) {
      document.getElementById('app').innerHTML = render(fourohfour.join('\n'));
    } else {
      console.log(req.responseText);
      document.getElementById('app').innerHTML = render(req.responseText, dataObject);
    }
  }
}
route();
window.addEventListener('hashchange', route);