const input = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById('main');

function getMovieData(){
    const movieName = input.value;
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=4bda7f7c`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        main.innerHTML = `
            <h1>${data.Title}</h1>
            <span>{data.Year}</span>
            <h4>Genre: ${data.Genre}</h4>
            <h5>Language: ${data.Language}</h5>
            <img src="${data.Poster}" >
            <h5>Actor: ${data.Actors}</h5>
            <p>${data.Plot}</p>
        `
    })
    .catch(err=>console.log(err))
}

searchBtn.addEventListener('click',()=>{
    getMovieData();
})