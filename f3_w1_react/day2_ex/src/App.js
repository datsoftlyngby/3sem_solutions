import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // npm install react-bootstrap bootstrap
import './App.css';
import utils from "./utils";
import ListDemo from "./ListDemo";

const Counter = (props) => {
  const ini = (localStorage.getItem("count"))?localStorage.getItem("count"):props.initialVal
  let [count,setCount] = useState(ini);

  return (<>
    <button onClick={()=>setCount(++count)}>Increment by one</button>
    <button onClick={()=>setCount((count + props.incrementBy))}>Increment by var</button>
    <button onClick={()=>{
      setCount((count + props.incrementBy));
      localStorage.setItem("count", count);}
  }>Increment and persist</button>
  <p>{count}</p>
  </>
  );
}
const JokeButton = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke, setJoke] = useState();
  return (
    <>
      <button onClick={()=>{
        fetch(url).then(res=>res.json()).then(data=>setJoke(data.value));
      }}>Get Chuck Norris Joke</button><br/><br/>
      {joke}
    </>
  );
};
const JokeFetcher = () => {
  const url = 'https://icanhazdadjoke.com';
  const [joke, setJoke] = useState({joke:""});
  useEffect(()=>{
    const id = setInterval(()=>utils.fetchAny(url, setJoke),10000);
    return ()=>{
      clearInterval(id);
    };
  },[]);
  return (
    <>
    <h2>Random joke (every 10 sencond):</h2>
    {joke.joke}
    </>
  );
}
function App() {
  return (
   <>
     <h2>Exercise 1</h2>
     <Counter initialVal={10} incrementBy={2}/>
     <h2>Exercise 2</h2>
     <JokeButton/>
     <JokeFetcher/>
     <h2>Exercise 3</h2>
     <ListDemo/>
   </>
  );
}

export default App;