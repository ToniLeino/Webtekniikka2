//Toivottavasti funktio joka vaihtaa tektiä sen päälle mentessä
const Header = document.getElementById("primary-header");

//  Tämä vaihtaa tektin väriä kun sen päälle mennään
Header.addEventListener('mouseover', function handleMouseOver() {
  Header.style.color = 'white';
});

// palauttaa normaaliksi
Header.addEventListener('mouseout', function handleMouseOut() {
  Header.style.color = "black";
});


//Annetaan ensin muuttumattomat arvot//
const quoteText = document.getElementById('quote'),
    quoteTags = document.getElementById('quote-tags'),
    quoteAuthor = document.getElementById('author'),
    quoteButton = document.getElementById('quote-button');
    //Tuo funktion API:sta//
    function randomQuote(){
    fetch('https://api.quotable.io/random')
	    .then(response => response.json())
	    .then(data =>  {
        quoteText.textContent = data.content;
        quoteAuthor.textContent = data.author;
        
    });   
}
//Funktio jolla nappia painaessa pitäisi saada uusi quote//
randomQuote();
quoteButton.addEventListener('click', () => {
    randomQuote();
})

