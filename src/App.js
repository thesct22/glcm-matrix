import logo from './logo.svg';
import './App.css';
import InputMatrix from './inputMatrix';

function App() {
  var randomMatrix=()=>{
    var generatedArray = Array.from(Array(5), () => new Array(6));
    for(var i=0;i<5;i++)
      for(var j=0;j<6;j++)
        generatedArray[i][j]=Math.floor(Math.random() * 8) + 1;
    return generatedArray;
  }
  return (
    <div className="App">
      <InputMatrix randomArray={randomMatrix()}/>
    </div>
  );
}

export default App;
