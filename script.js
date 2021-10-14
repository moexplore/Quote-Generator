const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const facebookBtn = document.getElementById("facebook");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
let apiQuotes = [];

const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeLoadingSpinner = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    //Open the twitter url in a new tab
    window.open(twitterUrl, "_blank");
  };

//Get Quotes From API
const getQuotesFromAPI = async () => {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch {
    alert("Oops.  There was an error getting your quote");
  }
};

const newQuote = () => {
  //Add loader here also because this will bypass getQuotes when button is pressed
  showLoadingSpinner();

  //Pick a random quote from apiQuotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Dynamically add the text
  //Check if author field is null
  if (!quote.author) {
    authorText.textContent;
  } else {
    authorText.textContent = quote.author;
  }

  // Check the quote length to determine the styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  //Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
};

//Event Listeners

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On Load
getQuotesFromAPI();

// Get Quotes From Local Source

// const newQuote = () => {
//     //Pick a random quote quotes.js
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(quote);
// }

// newQuote()
