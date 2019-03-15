let dataObject = { siteName: 'GamesCompany' }

let toRender = render('<h1>{{siteName}}</h1>', dataObject);

document.getElementById('application_main').innerHTML = toRender;