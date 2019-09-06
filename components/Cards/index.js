// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function cardMaker(article, topic) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(topic);


    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('imgContainer');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.setAttribute('src', article.authorPhoto);
    imgContainer.appendChild(img);
    author.appendChild(imgContainer);

    const authorName = document.createElement('span');
    authorName.textContent = article.authorName;
    author.appendChild(authorName)

    card.appendChild(author);

    return card;
}

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((cardResponses) => {

        const articles = cardResponses.data.articles;
        const cardContainer = document.querySelector('.cards-container');

        for (key in articles) {
            articles[key].forEach((article) => {
                cardContainer.append(cardMaker(article, key))
            })
        }
    })