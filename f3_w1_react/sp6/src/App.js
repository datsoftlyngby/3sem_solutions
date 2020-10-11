import React from 'react';
import CountryTable from "./CountryTable";
import './App.css';

const App = (props) => {
    return (
      <>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div className="App-intro">
          <CountryTable/>
      </div>
      </>
    );
};


export default App;
