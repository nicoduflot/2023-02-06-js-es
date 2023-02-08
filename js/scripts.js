/* fonction de création et destruction d'un cookie */

function setCookie(name, value = '', days = -1, path = '/'){
    let maxAge = days * 25 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}; Samesite=Strict; Secure`;
}

/* fonction pour lire la valeur d'un cookie */

function getCookie(name){
    let tabCookie = document.cookie.split('; ');
    console.log(tabCookie);
    for(cookie of tabCookie){
        console.log(cookie);
        let tabValue = cookie.split('=');
        console.log(tabValue);
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}

function cEO(element, attributes = {}){
    let newElement = document.createElement(element);
    for(let key in attributes){
        newElement.setAttribute(key, attributes[key]);
    }
    return newElement;
}

