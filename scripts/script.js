
const quoteText = document.getElementById('quote'),
    quoteTags = document.getElementById('quote-tags'),
    quoteAuthor = document.getElementById('author'),
    quoteButton = document.getElementById('quote-button');
function randomQuote(){
    fetch('https://api.quotable.io/random')
	    .then(response => response.json())
	    .then(data =>  {
        quoteText.textContent = data.content;
        quoteAuthor.textContent = data.author;
        
    });   
}
randomQuote();
quoteButton.addEventListener('click', () => {
    randomQuote();
})