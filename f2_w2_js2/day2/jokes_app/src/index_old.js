import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
import remove from "./navigation";

// Solution 1
// document.getElementById('1').innerHTML = '';
const btnShow = document.getElementById('getJoke');
const inp = document.getElementById('jokeId');
const show = document.getElementById('showJoke');
const btnSave = document.getElementById('saveJoke');
const inpSave = document.getElementById('newJoke');

btnShow.onclick = ()=>{
    alert('tessssst');
    const joke = jokes.getJokeById(inp.value);
    console.log(joke);
    show.innerHTML = joke;
}
btnSave.onclick = ()=>{
    const joke = inpSave.value;
    jokes.addJoke(joke);
}

// Solution 2
document.getElementById('2').innerHTML = 'Content 2';

// Solution 3
document.getElementById('3').innerHTML = 'Content 3';

remove();
