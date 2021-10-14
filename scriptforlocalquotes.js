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



  
  


  // Get Quotes From Local Source
  
  const newQuote = () => {
      showLoadingSpinner()
      //Pick a random quote quotes.js
      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
      console.log(quote);

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
}

newQuote()

//Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
