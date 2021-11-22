import React, { useState } from 'react';
import './App.css';
import Glcm from './components/Glcm';
import MakeRandomMatrix from './components/MakeRandomMatrix';
import GlcmProperties from './components/GlcmProperties';
import SetMatrix from './components/SetMatrix';

function App() {
  var [rows, setRows]=useState(6);
  var [cols, setCols]=useState(5);
  var [degreeValue, setDegreeValue] = useState(0)
  var [distanceValue, setDistnceValue] = useState(2)

  let colourGlcm=[]
  for(var ii=0;ii<8;ii++){
      let innerColourGlcm=[]
      for(var jj=0;jj<8;jj++)
          innerColourGlcm.push(`#FFFFFF`)
      colourGlcm.push(innerColourGlcm);
  }
  var [GlcmColour,setGlcmColour]=useState(colourGlcm);


  var [randomMatrix,setRandomMatrix] =useState(MakeRandomMatrix(6,5));

  var setMatrix=()=>{
    setDegreeValue(0);
    setDistnceValue(2);
    setRandomMatrix(MakeRandomMatrix(rows,cols));
  };

  const customRows=(event)=>{
    var num=parseInt(event.target.value);
    setRows(isNaN(num)?0:num<3?3:num);
  }
  const customCols=(event)=>{
    var num=parseInt(event.target.value);
    setCols(isNaN(num)?0:num<3?3:num);
  }

  return (
    <div className="App">
      <div>
        
        <SetMatrix cols={cols} rows={rows} customCols={customCols} customRows={customRows} setMatrix={setMatrix}/>

        <GlcmProperties degreeValue={degreeValue} setDegreeValue={setDegreeValue} distanceValue={distanceValue} setDistanceValue={setDistnceValue} rows={rows} cols={cols}/>

        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <div className="form-outline">
                <Glcm randomMatrix={randomMatrix} degreeValue={degreeValue} distanceValue={distanceValue} GlcmColour={GlcmColour} setGlcmColour={setGlcmColour}/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
