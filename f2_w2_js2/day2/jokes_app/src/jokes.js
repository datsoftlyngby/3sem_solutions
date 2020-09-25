/*
  This class is just added to show you how you can use ES6 exports
  Observe, in index.js, how you can import
*/

class Jokes {
    constructor(initialData){
        this._jokes = initialData;
    }

    addJoke(joke){
        this._jokes.push(joke);
    }

    getJokeById(i) {
        return this._jokes[i];
    }
    
    getJokes() {
        return this._jokes;
    }
}

//Setup some dummy test data
const initialData = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying",
    "What’s the best thing about Switzerland? ...I don’t know, but the flag is a big plus.",
    "How many times can you subtract 10 from 100? ...Once. The next time you would be subtracting 10 from 90."
  ]

const jokes = new Jokes(initialData);
window.jokes = jokes; //Only for debugging

export default jokes;