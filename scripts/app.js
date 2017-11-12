const quoteContainer = document.querySelector('.quote');
const authorContainer = document.querySelector('.author');
const newQuote = document.querySelector('.newQuote');
const mainBackground = document.querySelector('main');
const headLine = document.getElementsByTagName('h1')[0];
const tweetButton = document.querySelector('.tweet');

let red;
let blue;
let green;
let viewedQuotes = [];

function randomColorGenerator() {
    let randomColor;
    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    orange = Math.floor(Math.random() * 256);
    randomColor = 'rgb(' + red + ',' + blue + ',' + orange + ')';
    return randomColor;
  }

let randomNum = () => Math.floor(Math.random() * (quotes.length));
let randomQuote = () => {
    if(quotes.length === 0){
        quotes = viewedQuotes;
        viewedQuotes = [];
    }
        
    i = randomNum()

    quoteContainer.textContent = quotes[i].quote;
    quoteContainer.style.color = 'white';

    authorContainer.textContent = '- ' + quotes[i].author;
    authorContainer.style.color = 'white';
    
    let splicedQuote = quotes.splice(i, 1)[0];
    viewedQuotes.push(splicedQuote);
};

function tweetIt() {
    let quote = quoteContainer.textContent;
    let tweetUrl = 'https://twitter.com/share?text=' + 
    encodeURIComponent(quote) + '&hashtags=' + 'devLife';
      
    window.open(tweetUrl);
  }

newQuote.addEventListener('click', () => {
    mainBackground.style.backgroundColor = randomColorGenerator();
    headLine.style.color = 'white';
    randomQuote();
    
});

tweetButton.addEventListener('click', () => {
    tweetIt()
})