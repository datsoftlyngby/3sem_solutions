import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";



const btnShow = document.getElementById('getJoke');
const inp = document.getElementById('jokeId');
const show = document.getElementById('showJoke');
const btnSave = document.getElementById('saveJoke');
const inpSave = document.getElementById('newJoke');

btnShow.onclick = ()=>{
    const joke = jokes.getJokeById(inp.value);
    console.log(joke);
    show.innerHTML = joke;
}
btnSave.onclick = ()=>{
    const joke = inpSave.value;
    jokes.addJoke(joke);
}

document.getElementById('east').onclick = () => console.log('EAST');
document.getElementById('south').onclick = () => console.log('SOUTH');
document.getElementById('west').onclick = () => console.log('WEST');
document.getElementById('north').onclick = () => console.log('NORTH');


