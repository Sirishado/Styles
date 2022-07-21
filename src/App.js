import logo from './logo.svg';
import './App.css';
import Style from './Components/style';
import Inline from './Components/Inline';
import  './Components/mystyle.css';
import {useState} from 'react';


function App() {
  const[dropdown,setdropdown]=useState("Select Option");
const[checkbox,setcheckbox]=useState("false");
const[radio,setradio]=useState("Select Option");
  return (
    <div className="App">
<Style  Primary="false" />
<Inline/>
<form>
  <select>
  <option>Select Option</option>
    <option>Yes</option>
    <option>No</option>
  </select>
  <br></br>
  <h3 className='primary'><input type="checkbox"/><span>Agree Terms and conditions</span></h3>
  <br></br>
  <input type="text"  placeholder ='Enter First Name'/>
  <br></br>
  <br></br>
  <button type="button" className='button'>Button </button>

  <h3 className='button'><input type="checkbox"/><span>Agree Terms and conditions</span></h3>
<br></br>
  <h1>your dropdown value is {dropdown}</h1>
  <h1>your CheckBox value is {checkbox?"True":"false"}</h1>
  <h1>your radio button  is {radio}</h1>
  <select value ={dropdown} onChange ={(e)=>{setdropdown(e.target.value)}}>
  <option value ="Select OPtion">Select OPtion</option>
  <option value ="Apple">Apple</option>
  <option value ="Banana">Banana</option>
  <option value ="Mango">Mango</option>
  </select>
  <br></br>
  <label>Is Checked</label>
  <input type="checkbox" checked={checkbox} onChange={(e)=>{setcheckbox(e.target.checked)}}/>
  <br></br>
  <label>Apple</label>
  <input type="radio" checked={radio==="Apple"} value="Apple" onchange={(e)=>{setradio(e.target.value)}}/>
  <label>Banana</label>
  <input type="radio" checked={radio==="Banana"} value="Banana" onchange={(e)=>{setradio(e.target.value)}}/>
  <label>Mango</label>
  <input type="radio" checked={radio==="Mango"} value="Mango" onchange={(e)=>{setradio(e.target.value)}}/>
</form>
    </div>
  );
}

export default App;
