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