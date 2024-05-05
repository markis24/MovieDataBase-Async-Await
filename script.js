// Claus
const keys = {
    api_key: '26bdc5ee792eb05b4009712e30588ede',
    session_id: '632b5a9eeb9212a80ce233152d3c17ee4bfe0989',
    account_id: 'markis_24'
}

let moviesResult = document.getElementById("moviesResult");


function setFav(id, favBool){
    moviesResult.innerHTML="";

    showFavs();
}

function showFavs(){
    moviesResult.innerHTML="";

}

function searchMovies(query){
    clearInput();
    removeActive();
}
// Scroll Infinito
var total_pages = 0;
var current_page = 1;
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page<total_pages) {
    }
    });

    
/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

