import logo from './logo.svg';
import './App.css';
import Style from './Components/style';
import Inline from './Components/Inline';
import  './Components/mystyle.css';
import {useState} from 'react';
import State from './Components/state';
import Multi from './Components/Multi';
//import DateTimePicker from 'react-datetime-picker';

function App() {
  const [value, onChange] = useState();
  const[dropdown,setdropdown]=useState("Select Option");
const[checkbox,setcheckbox]=useState("false");
const[radio,setradio]=useState("Select Option");
const list = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon"
];

const [filterList, setFilterList] = useState(list);

const handleSearch = (event) => {

  if (event.target.value === "") {
    setFilterList(list);
    return;
  }
  const filteredValues = list.filter(
    (item) =>
      item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
  );
  setFilterList(filteredValues);
};
  return (
    <div className="App">
<Style  Primary="false" />
<Inline/>
<State/>
<Multi/>
<form>
<div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
        <br></br>
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

  <br></br>
<h1> Today Date is {value}</h1>
  <input type="date" onChange={(e)=>{onChange(e.target.value)}} />

{/* <div classname="colorBlock" style ={{width:100,height:100,background:this.state.blockcolor}}></div>
<button onClick={()=>this.setstate({blockcolor:'blue'})}>Blue</button>
<button onClick={()=>this.setstate({blockcolor:'green'})}>Green</button>
<button onClick={()=>this.setstate({blockcolor:'red'})}>Red</button> */}

<br></br>


</form>
    </div>
  );
}

export default App;
