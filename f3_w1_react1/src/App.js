import React from "react";
// import logo from './logo.svg';
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import Person from "./file2";
import {males, females} from "./file2";
import MultiWelcome from "./file3";

const {firstName, email} = Person;
const personV2 = {...Person,phone:43344334,frinds:[...males,...females]}
function App() {
  return (
    <div>
      <h2>Exercise 1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>
      
      <h2>Exercise 2</h2>
      <p>{firstName}, {email}</p>
      {console.log([...males,...females])}
      {console.log([...males,'Kurt','Helle',...females,'Tina'])}
      {console.log(personV2)}
      <h2>Exercise 3</h2>
      <MultiWelcome/>
    
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
