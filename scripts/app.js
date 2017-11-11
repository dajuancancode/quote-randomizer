const quoteContainer = document.querySelector('.quote');
const authorContainer = document.querySelector('.author');
const newQuote = document.querySelector('.newQuote');
const mainBackground = document.querySelector('main');

let red;
let blue;
let green;
let viewedQuotes

viewedQuotes = []

let randomNum = () => Math.floor(Math.random() * (quotes.length))

newQuote.addEventListener('click', () => {

    if(quotes.length === 0){
        quotes = viewedQuotes;
        viewedQuotes = [];
    }
    
    

    i = randomNum()

    quoteContainer.textContent = quotes[i].quote;
    authorContainer.textContent = '- ' + quotes[i].author;
    
    let splicedQuote = quotes.splice(i, 1)[0]
    viewedQuotes.push(splicedQuote)
})
