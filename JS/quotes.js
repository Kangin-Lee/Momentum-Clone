const quotes = [
    {
        quote: "Age is no guarantee of maturity.",
        author: "- Lawana Blackwell -"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "- Maya Angelou -"
    },
    {
        quote: "This too shall pass.",
        author: "- Et hoc transibit -"
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "- Carol Burnett -"
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "- Maxime Lagacé -"
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "- Lilly Pulitzer -"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "- John D. Rockefeller -"
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "- Albert Einstein -"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney -"
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "- Michael Jordan -"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;