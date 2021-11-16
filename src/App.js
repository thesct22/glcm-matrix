import React, { useState } from 'react';
import './App.css';
import InputMatrix from './components/inputMatrix';
import Glcm from './components/Glcm';
import MakeRandomMatrix from './components/MakeRandomMatrix';
import GlcmProperties from './components/GlcmProperties';
import SetMatrix from './components/SetMatrix';

function App() {
  var [rows, setRows]=useState(6);
  var [cols, setCols]=useState(5);
  var [dialValue, setDialValue] = useState(0)

  


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
        
        <SetMatrix cols={cols} rows={rows} customCols={customCols} customRows={customRows} setMatrix={setMatrix}/>

        <GlcmProperties dialValue={dialValue} setDialValue={setDialValue}/>

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
