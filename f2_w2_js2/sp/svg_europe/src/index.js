// import 'bootstrap/dist/css/bootstrap.css';
import regeneratorRuntime from "regenerator-runtime"; //necessary for using async await in this babel version
import {makeOptions,fetchWithErrorCheck} from './utils';

const svg = document.getElementById('svg2');
const show = document.getElementById('showData');
const url = "http://restcountries.eu/rest/v1/alpha?codes=";

svg.onclick = (event) => {
    const id = event.target.id;
    const countryUrl = `${url+id}`;
  // using <pre> preserves the white spaces.
  fetch(countryUrl).then(res=>fetchWithErrorCheck(res)).then(data=>{
      const countryData = data[0];
      const countryStr = `<div><h3>${countryData.name}</h3><pre> 
      Population:  ${countryData.population.toLocaleString()}<br/>
      Area:        ${countryData.area.toLocaleString()}<br/>
      Borders:     ${countryData.borders.join(', ')}<br/></pre></div>`;
      console.log(countryStr);
      show.innerHTML = countryStr;
  });
};
