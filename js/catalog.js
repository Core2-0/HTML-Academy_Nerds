'use strict'

let requestURL = 'server/catalog.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = () => {
  const products = request.response;
  renderCard(products);
};

const makeElement = (tagName, className, text) => {
  let element = document.createElement(tagName);
  if (className != '') {
    element.classList.add(className);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createCard = (products) => {
  let listItem = makeElement('li', 'products-item');

  let description = makeElement('div', 'products-description');
  listItem.appendChild(description);

  let title = makeElement('a', 'products-link', products.title);
  title.href = '#';
  description.appendChild(title);

  let text = makeElement('p', '', products.description);
  description.appendChild(text);

  let priceButton = makeElement('a', 'button', `${products.price} ₽`);
  priceButton.classList.add('products-item-button');
  description.appendChild(priceButton);

  let picture = makeElement('img', '');
  picture.src = products.imgUrl;
  picture.alt = `${products.description} ${products.title}`;
  picture.style.width = '358px';
  picture.style.height = '578px';
  listItem.appendChild(picture);

  return listItem;
};

const renderCard = (products) => {
  let cardList = document.querySelector('.products-list');

  for (let i = 0; i < products.length; i += 1) {
    let cardItem = createCard(products[i]);
    cardList.appendChild(cardItem);
  }
};
