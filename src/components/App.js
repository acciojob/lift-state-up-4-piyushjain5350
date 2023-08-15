import React, {useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  let [name,setName]=useState('');
  let [price,setPrice]=useState(0);
  let [list,setList]=useState([]);

  function handlingFn(){
    let obj={
      name:name,
      price:price
    };

    setList([...list,obj]);
    // console.log(list);
  }
  
  const handleRemoveItem = (index) => {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  };
  
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div className="input-container">
          <label htmlFor="nameInput">Item Name</label>
          <input type="text" name="nameInput" id="itemName" onChange={(e)=>setName(e.target.value)}/>
          <label htmlFor="price">Item Price</label>
          <input type="text" name="price" id="itemPrice" onChange={(e)=>setPrice(e.target.value)}/>
          
          <button onClick={handlingFn} >Add Item</button>

          <Child list={list} onRemoveItem={handleRemoveItem}/>
        </div>
    </div>
  )
}

export default App
