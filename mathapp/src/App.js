import { useState } from "react";
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({});
  const [height, setHeight] = useState();
  const [surface, setSurface] = useState();
  const [radius, setRadius] = useState();
  const [control, setControl] = useState(true);
  
  function canCalculation(r, h){
    var pi = 3.145
    var v = pi*(r*r)*h
    var s=pi*(r*r)*2+2*pi*r*h
    setSurface(s/pi)

    var h = (s/pi/2)/r-r
    var opr = Math.sqrt(((s/pi/2)/3), 1/2)
    var oph = (s/pi/2)/opr - opr
    setHeight(oph)
    setRadius(opr)
    setControl(false)


  }
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    canCalculation(Number(inputs.age), Number(inputs.username));
  }
  if (control){
  return (
    <div style={{width: "100%"}}>
    <div style={{marginLeft: "30%"}}>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    
    </div>

      </div>
  );
}
else {
  return (
    <div style={{width: "100%"}}>
    <div style={{marginLeft: "30%"}}>
    <form onSubmit={handleSubmit}>
      <label>Enter the radius:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter the height:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    
      <p>Step 1: s = πr*r*2+2πrh</p>
      <p>Step 2: s = {surface}π</p>
      <p>Step 3: {surface}π = 2πr+2πrh </p>
      <p>Step 4: h = {surface/2}π/r -r</p>
      <p>Step 5: v(r) = π(r*r)({surface/2}π/r -r)</p>
      <p>Step 6: v'(r) = {surface/2}π/r -3π(r*r))</p>
      <p>Step 7: r = ({surface/2}π/3)^1/2</p>
      <p>Step 7: h = {surface/2}π/{radius/3.145}π -{radius/3.145}π</p>
      
      <p>The optomised Height is: {height}</p>
      <p>The optomised radius is: {radius}</p>
    </div>

      </div>

  );

}}

export default App;
