// import 'bootstrap/dist/css/bootstrap.css';
import regeneratorRuntime from "regenerator-runtime"; //necessary for using async await in this babel version
import {makeOptions,fetchWithErrorCheck} from './utils';

const btnReload = document.getElementById("btnReload");
const frmNewPerson = document.getElementById("frmNewPerson");
const tbody = document.getElementById("tb"); //tb table body
// Get all person to html table
const url = "http://localhost:8080/person_backend/api/person";
const fetch_persons = (url) => {
    console.log(url);
    fetch(url)
    .then((res) => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.all.map((person) => {
            return `<tr><td>${person.id}</td><td>${person.fName}</td><td>${person.lName}</td><td>${person.phone}</td>
            <td><a href="#" class="delete" id="${person.id}">delete</a> / <a href="#" class="edit" id="${person.id}">edit</a></td></tr>`;
        });
        const trStr = trs.join("");
        tbody.innerHTML = trStr;
    });
};
fetch_persons(url);

// reload button
btnReload.onclick = () => fetch_persons(url);

// form submit
frmNewPerson.onsubmit = (e) => {
    e.preventDefault();
    const person = {};
    person.fName = document.getElementById('fname').value;
    person.lName = document.getElementById('lname').value;
    person.phone = document.getElementById('phone').value;
    console.log(person);
    fetch(url, makeOptions('POST',person)).then(res=>fetchWithErrorCheck(res)).then(data=>{
        fetch_persons(url);

    });
};

// get person by id
document.getElementById("btnId").onclick = () => {
  const id = document.getElementById("inpId").value;
  fetch(`${url}/${id}`)
    .then((res) => fetchWithErrorCheck(res))
    .then((person) => {
      const userStr = `${person.fName} ${person.lName} has phone: ${person.phone}.`;
      document.getElementById("divId").innerHTML = userStr;
    });
};

// same thing done with async await
const getUser = async () => {
  const id = document.getElementById("inpId").value;
  const userResponse = await fetch(`${url}/${id}`);
  const userData = await fetchWithErrorCheck(userResponse);
  const userStr = `${userData.name} has email: ${userData.email}. ${
    userData.gender === "female" ? "She" : "He"
  } is ${userData.age} years old`;
  document.getElementById("divId").innerHTML = userStr;
};
document.getElementById("btnId").onclick = getUser;

//edit and delete
tbody.onclick = (event) => {
    event.preventDefault();
    const target = event.target;
    if(target.className === 'edit'){
        console.log('EDIT');
        //TODO: add MODAL form to edit.
    }
    if(target.className === 'delete'){
        fetch(`${url}/${target.id}`,makeOptions('DELETE'))
        .then(res=>fetchWithErrorCheck(res)).then(data=>{
            console.log(data);
        });
    }
};