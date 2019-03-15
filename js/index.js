let dataObject = {
    // posts: [
    //     { title: 'The Division 2 is a great game!', tagline: 'Lorem Ipsum' },
    //     { title: 'The Division 2 is a great game!', tagline: 'Lorem Ipsum' },
    //     { title: 'The Division 2 is a great game!', tagline: 'Lorem Ipsum' },
    //     { title: 'The Division 2 is a great game!', tagline: 'Lorem Ipsum' }
    // ]
    siteName: "GamesCompany"
}

let template = document.getElementById('tmpl-home');
let templateHTML = template.innerHTML;
let homeHTML = '';

for(let key in dataObject) {
    listHTML = templateHTML.replace(/{{siteName}}/g, dataObject.id);
}

document.getElementById('application_main').innerHTML = homeHTML;