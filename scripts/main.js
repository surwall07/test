/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!'; */

// document.querySelector('h1').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let h1 = document.querySelector('p');
h1.onclick = function() {
    alert('Ouch! Stop poking me!');
}

// chaning the image when clicked
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


// Adding a personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('What\' your name');
    // in case user don't enter anything
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// change users by re-store user's name
myButton.onclick = setUserName;