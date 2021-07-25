const quoteContainer = document.querySelector(".quote");
const authorContainer = document.querySelector(".author");

fetch("https://api.quotable.io/random")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let author = `~ ${data.author}`;
    let quote = `" ${data.content} "`;
    return [author, quote]
  })
  .then(([author, quote]) => {
    authorContainer.innerHTML = author;
    quoteContainer.innerHTML = quote;
  })

