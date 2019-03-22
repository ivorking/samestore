import React, { Component } from 'react';
// import TopBar from './components/TopNavBar';
import Joke from './Joke'
import './css/App.css';
import './css/tachyons.css';

function App() {

   const nums = [1, 2, 3, 4, 5];
   const doubled = nums.map(function(nums) {
      return nums * 2;
   })

   return (
      <div>
         <Joke question = "Why did the joke" answer = "No idea why" />
         <Joke answer = "why not react" />
         <Joke question = "why not" answer = "probably" />
         <Joke question = "random data" answer = "i don't think so" />
         <Joke question = "nonsense question" answer = "i don't agree" />
      </div>
   )
}

export default App;
