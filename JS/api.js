/*const url = 'https://ejemplo.com/api/fotos';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const photos = data.results;
    const container = document.getElementById('photos-container');

    photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('photo');

      const titleElement = document.createElement('h3');
      titleElement.textContent = photo.title;
      photoElement.appendChild(titleElement);

      const dateElement = document.createElement('p');
      dateElement.textContent = `Publicado el: ${photo.date}`;
      photoElement.appendChild(dateElement);

      const imageElement = document.createElement('img');
      imageElement.src = photo.image_url;
      photoElement.appendChild(imageElement);

      container.appendChild(photoElement);
    });
  })
  .catch(error => console.log(error));*/
/*function getCharacters(done) {
    const results = fetch("api.json");

    results.then(response => response.json()).then(data => { done(data) });
}*/

/*const items = document.getElementById('items')
const temasAside = document.getElementById('temas-aside').content
const fragmento = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {fetchData()})

const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        getCharacters(data)
    } 
    catch (error) {
        console.log(error)
    }
}

const getCharacters = data => {
    data.forEach(bloque => {
        temasAside.querySelector('h3').textContent = bloque.title
        temasAside.querySelector('p').textContent = bloque.date
        temasAside.querySelector('img').setAttribute("src", bloque.image)
        
        const clone = temasAside.cloneNode(true)
        fragmento.appendChild(clone)
    });
    items.appendChild(fragmento)
}*/

/*getCharacters(data => {
    data.results.forEach(tema => {
        const article = document.createRange().createContextualFragment( `
        <div class="temas-aside">
                    <div class="foto-temas">
                        <img src="${personaje.image}" alt="personaje">
                    </div>
                    <div class="texto-temas">
                        <p>${personaje.date}</p>
                        <h3${personaje.tittle}</h3>
                    </div>
                </div>
        `);

        const temas = document.querySelector("temas");

        temas.append(article);
    });
});*/
const limite = 5;

function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results.then(response => response.json()).then(data => {done(data)});
}

getCharacters (data => {
    data.results.forEach(otrosTemas => {
        const bloques = document.createRange().createContextualFragment( `
        <div class="temas-aside">
                    <div class="foto-temas">
                        <img src="${otrosTemas.image}" alt="imagen">
                    </div>
                    <div id="texto-temas">
                        <p>${otrosTemas.status}</p>
                        <h3><a href="#temas">${otrosTemas.name}</a></h3>
                    </div>
                </div>
        `);

        const temas = document.querySelector("#temas");

        temas.append(bloques);
    });
});

/*const limite = 5;

function getCharacters(done){
    const results = fetch("https://materialuacjhtmlycss.000webhostapp.com/material-html/APIS/json/api.json");

    results.then(response => response.json()).then(data => {done(data)});
}

getCharacters (data => {
    data.results.forEach(otrosTemas => {
        const bloques = document.createRange().createContextualFragment( `
        <div class="temas-aside">
                    <div class="foto-temas">
                        <img src="${otrosTemas.url}" alt="imagen">
                    </div>
                    <div id="texto-temas">
                        <p>${otrosTemas.date}</p>
                        <h3><a href="#temas">${otrosTemas.title}</a></h3>
                    </div>
                </div>
        `);

        const temas = document.querySelector("#temas");

        temas.append(bloques);
    });
});*/