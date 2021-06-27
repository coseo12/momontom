const quotes = [
  {
    quote: `Love has taught us that love does not consist in gazing at each other but in looking outward together in the same direction.`,
    author: `Antoine de Saint-Exupery`,
  },
  {
    quote: `Great hopes make great men.`,
    author: `Thomas Fuller`,
  },
  {
    quote: `One must desire something to be alive.`,
    author: `Margaret Deland`,
  },
  {
    quote: `They say dreams are the windows of the soul--take a peek and you can see the inner workings, the nuts and bolts.`,
    author: `Henry Bromel`,
  },
  {
    quote: `He who has never hoped can never despair.`,
    author: `George Bernard Shaw`,
  },
  {
    quote: `To want to be what one can be is purpose in life.`,
    author: `Cynthia Ozick`,
  },
  {
    quote: `Wheresoever you go, go with all your heart.`,
    author: `Confucius`,
  },
  {
    quote: `What you risk reveals what you value.`,
    author: `Jeanette Winterson`,
  },
  {
    quote: `Great deeds are usually wrought at great risks.`,
    author: `Herodotus`,
  },
  {
    quote: `Men of genius do not excel in any profession because they labor in it, but they labor in it because they excel.`,
    author: `William Hazlitt`,
  },
  {
    quote: `Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.`,
    author: `Erica Jong`,
  },
  {
    quote: `Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy`,
    author: `Norman Vincent Peale`,
  },
  {
    quote: `Try not to become a man of success but rather to become a man of value.`,
    author: `Albert Einstein`,
  },
  {
    quote: `I am not afraid of storms for I am learning how to sail my ship.`,
    author: `Helen Keller`,
  },
  {
    quote: `Well done is better than well said.`,
    author: `Benjamin Franklin`,
  },
  {
    quote: `Respect your efforts, respect yourself. Self-respect leads to self-discipline. When you have both firmly under your belt, that's real power.`,
    author: `Clint Eastwood`,
  },
];

export default class Quotes {
  constructor() {
    this.quote = document.querySelector('#quotes span:first-child');
    this.author = document.querySelector('#quotes span:last-child');
  }
  setQuotes() {
    const len = quotes.length;
    const todaysQuote = quotes[Math.floor(Math.random() * len)];
    this.quote.innerText = todaysQuote.quote;
    this.author.innerText = todaysQuote.author;
  }
  init() {
    this.setQuotes();
  }
}
