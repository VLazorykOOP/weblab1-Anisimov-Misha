fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.footer-js').innerHTML = data;
});
        
fetch('./header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.header-js').innerHTML = data;
});

fetch('./navigation.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.navigation-js').innerHTML = data;
});





function displayMessage(message) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
}

function handleBlur() {
    displayMessage("Немає фокусу :(");
    console.log("Сторінка втратила фокус.");
}

function handleFocus() {
    displayMessage("Ооо, є фокус :)");
    console.log("Сторінка отримала фокус.");
}





function toggleStyle(element, isBold, color) {
    element.style.fontWeight = isBold ? 'bold' : 'normal';
    element.style.color = color;
}

document.getElementById('main-content').onclick = function () {
    const mainContent = document.getElementById('main-content');
    if (mainContent.style.fontWeight === 'bold') {
        toggleStyle(mainContent, false, 'black'); 
    } else {
        toggleStyle(mainContent, true, 'blue'); 
    }
    console.log("main-content: клік, стиль змінено.");
};


document.getElementById('about-me').ondblclick = function () {
    const aboutMe = document.getElementById('about-me');

    if (aboutMe.style.fontWeight === 'bold') {
        toggleStyle(aboutMe, false, 'black'); 
    } else {
        toggleStyle(aboutMe, true, 'green'); 
    }
    console.log("about-me: подвійний клік, стиль змінено.");
};
