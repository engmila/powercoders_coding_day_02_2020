const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      price: 'CHF 37',
      sold: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      price: 'CHF 42',
      sold: true
    }, {
      title: 'Clean Code',
      author: 'Robert Jason',
      price: 'CHF 35',
      sold: false
      }
  ];

function addNewBook(){
  let newBookTitle = document.getElementById("titleText").value;
  let newBookAuthor = document.getElementById("authorText").value;
  let newBookPrice = document.getElementById("priceText").value;
  let status = false;

  books.push(newBookTitle, newBookAuthor, newBookPrice, status);

  
}

function compare(a, b) {
 
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = 0;

  if (titleA > titleB) {
    comparison = 1;
  } else if (titleA < titleB) {
    comparison = -1;
  }
  return comparison;
}

books.sort(compare);

books.forEach(bookList);

function bookList(item, index){

  let pTitle = document.createElement('p');
  pTitle.innerHTML = item.title;

  let pAuthor = document.createElement('p');
  pAuthor.innerHTML = item.author;

  let pPrice = document.createElement('p');
  pPrice.innerHTML = item.price;

  let sold = ""

  if (item.sold)
  {
    sold = "sold";
  }
  else{
    sold = "not sold";
  }

  let pSold = document.createElement('p');
  pSold.innerHTML = sold;

  let body = document.querySelector('body');
  body.appendChild(pTitle);
  body.appendChild(pAuthor);
  body.appendChild(pPrice);
  body.appendChild(pSold);
}

