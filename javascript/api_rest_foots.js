var urlFoots = 'http://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

function getImageFoots(poster) {
  return `https://www.themealdb.com/images/media/meals/${poster}`;
}

var renderFoots = function (result) {
  let ul = document.getElementsByClassName('cards')[0];

  result.forEach(function (data) {
    let li = document.createElement('li');
    li.className = 'cards__item';
    let div = document.createElement('div');
    div.className = 'card';
    let divImage = document.createElement('div');
    div.className = 'card_image card_image';
    let divContent = document.createElement('div');
    divContent.className = 'card__content';
    let divTitle = document.createElement('div');
    divTitle.className = 'card__title';
    divTitle.innerText = data.strMeal;
    divContent.appendChild(divTitle);

    div.appendChild(divImage);
    div.appendChild(divContent);
    li.append(div);
    ul.appendChild(li);





    // let div = document.createElement('div');
    // div.className = 'image-desc';
    // div.style = 'margin-top: 5px; margin-bottom: 5px;'
    // let img = document.createElement('img');
    // img.src = this.getImageFoots(data.poster_path);
    // img.style = 'max-height:150px; width:100%;';

    // div.appendChild(img);

    // table.appendChild(div);
  });
};


// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let foots = JSON.parse(this.responseText);
    let slicedArray = foots.meals;
    renderFoots(slicedArray);
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", urlFoots, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(null);
