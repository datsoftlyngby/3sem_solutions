import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
import navigation from "./navigation";

// const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
// document.getElementById("jokes").innerHTML = allJokes.join("");

// Solution 1
const btnShow = document.getElementById('getJoke');
const inp = document.getElementById('jokeId');
const show = document.getElementById('showJoke');
const btnSave = document.getElementById('saveJoke');
const inpSave = document.getElementById('newJoke');

btnShow.onclick = ()=>{
    const joke = jokes.getJokeById(inp.value);
    console.log(joke)
    show.innerHTML = joke;
}
btnSave.onclick = ()=>{
    const joke = inpSave.value;
    jokes.addJoke(joke);
}

// Solution 2


