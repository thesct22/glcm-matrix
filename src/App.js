import React, { useState } from 'react';
import './App.css';
import InputMatrix from './components/inputMatrix';
import Glcm from './components/Glcm';
import MakeRandomMatrix from './components/MakeRandomMatrix';

function App() {
  var [rows, setRows]=useState(6);
  var [cols, setCols]=useState(5);
  


  var [randomMatrix,setRandomMatrix] =useState(MakeRandomMatrix(6,5));

  var setMatrix=()=>{
    setRandomMatrix(MakeRandomMatrix(rows,cols));
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
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-outline">
                <input type="text" id="formCols" className="form-control" value={cols} onChange={customCols}/>
                <label className="form-label" htmlFor="formCols">Columns</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-outline">
                <button onClick={()=>setMatrix()} className="btn btn-success align-self-start">Click to make Matrix</button>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <div className="form-outline">
                <InputMatrix randomMatrix={randomMatrix}/>
              </div>
            </div>
            <div className="col-12">
              <div className="form-outline">
                <Glcm randomMatrix={randomMatrix}/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
