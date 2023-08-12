import React , {useState} from "react";




function App() {
  let [name , setName] = useState("");

  
  return (
    <div className="App">
      <h3>React Calculator</h3>
      <div className="inputs">
      <input type="text" placeholder="Num 1" />
      <input type="text" placeholder="Num 2"/>
      </div>
      <div className="buttons">
        <button type="button"> + </button>
        <button type="button"> - </button>
        <button type="button"> * </button>
        <button type="button"> / </button>
      </div>
    </div>
  );
}

export default App;
