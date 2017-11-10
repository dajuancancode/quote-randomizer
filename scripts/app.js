const quoteContainer = document.querySelector('.quote');
const authorContainer = document.querySelector('.author');
const newQuote = document.querySelector('.newQuote');
const mainBackground = document.querySelector('main');

let red;
let blue;
let green;
let viewedList

viewedList = []
newQuote.addEventListener('click', () => {
    let randomNum = () => Math.floor(Math.random() * (quotes.length))

    i = randomNum()

    quoteContainer.textContent = quotes[i].quote;
    authorContainer.textContent = '- ' + quotes[i].author;
})
