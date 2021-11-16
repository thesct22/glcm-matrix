import React, { useState } from 'react';
import './App.css';
import InputMatrix from './inputMatrix';
import Glcm from './Glcm';

function App() {
  var [rows, setRows]=useState(6);
  var [cols, setCols]=useState(5);
  var i,j;
  var makerandomMatrix=(x,y)=>{
    console.log(x)
      var generatedArray = []
      for(i=0;i<x;i++){
        var innerArray = []
        for(j=0;j<y;j++){
          innerArray.push(Math.floor(Math.random() * 8) + 1);
        }
        generatedArray.push(innerArray)
      }
      return generatedArray
  };

  var [randomMatrix,setRandomMatrix] =useState(makerandomMatrix(6,5));

  var setMatrix=()=>{
    setRandomMatrix(makerandomMatrix(rows,cols));
  };

  const customRows=(event)=>{
    setRows(event.target.value)
  }
  const customCols=(event)=>{
    setCols(event.target.value)
  }

  return (
    <div className="App">
      <div>
        <div className="mt-3 m-sm-5 border p-4 p-sm-5">
          <div className="row">
            <div className="col">
              <h2>Matrix Details</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-outline">
                <input type="text" id="formRows" className="form-control" value={rows} onChange={customRows}/>
                <label className="form-label" htmlFor="formRows">Rows</label>
              </div>
              <div className="form-outline">
                <input type="text" id="formCols" className="form-control" value={cols} onChange={customCols}/>
                <label className="form-label" htmlFor="formCols">Columns</label>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-2 d-flex justify-content-top">
                <button onClick={()=>setMatrix()} className="btn btn-success align-self-start">Click to make Matrix</button>
            </div>
          </div>
        </div>
      </div>
      <InputMatrix randomMatrix={randomMatrix}/>
      <Glcm randomMatrix={randomMatrix}/>
    </div>
  );
}

export default App;
