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
let templateHTML = template.innerText;
document.textContent.replace(/{{siteName}}/g, dataObject.siteName);