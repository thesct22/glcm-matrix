import React, { useState } from 'react';
import './App.css';
import InputMatrix from './inputMatrix';
import Glcm from './Glcm';

function App() {
  var makerandomMatrix=()=>{
    var generatedArray = Array.from(Array(6), () => new Array(5));
    for(var i=0;i<6;i++)
      for(var j=0;j<5;j++)
        generatedArray[i][j]=Math.floor(Math.random() * 8) + 1;
    return generatedArray
  }
  var [randomMatrix,setRandomMatrix] =useState(makerandomMatrix());
  var setMatrix=()=>{
    setRandomMatrix(makerandomMatrix());
  }
  return (
    <div className="App">
      {/* <button onClick={setMatrix()}>Click to make matrix</button> */}
      <InputMatrix randomMatrix={randomMatrix}/>
      <Glcm randomMatrix={randomMatrix}/>
    </div>
  );
}

export default App;
