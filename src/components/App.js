import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [itemName , setItemName] = useState("");
  let [itemPrice , setItemPrice] = useState("");
  let [list,setList] = useState([{'ItemName' : "Item 1" , 'ItemPrice' : "$10",},{'ItemName' : "Item 2" , 'ItemPrice' : "$20",},{'ItemName' : "Item 3" , 'ItemPrice' : "$30",}])
  function handleItemName(e){
    setItemName(e.target.value)
  }
function handleItemPrice(e){
  setItemPrice(e.target.value)
}
function addItemsToList(){
  if(itemName && itemPrice){
    const newItem = {'ItemName': itemName, 'ItemPrice': `$${itemPrice}`};
    setList([...list,newItem]);
    setItemName("");
    setItemPrice("");
  }
}
function removeItem(index){
  const updatedList = list.filter((item, idx) => idx !== index);
  setList(updatedList);
}
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <label htmlFor="itemName">Item Name:<input type="text" value= {itemName} onChange={handleItemName} id="itemName"/>
      </label>
      <label htmlFor="itemPrice">Item Price:<input type="text" value= {itemPrice} onChange={handleItemPrice} id="itemPrice"/>
      </label>
       <button onClick={addItemsToList}>Add Items</button>
      <div className="child">
        <h2>Child Component</h2>
        <ul>
         {
          list.map((item,idx) => {
           return (
           <li key={idx}>{item.ItemName} - {item.ItemPrice} 
               <button onClick={() => removeItem(idx)}>
               Remove
              </button>
            </li>)
         })
         }
         </ul>
      </div>
    </div>
  )
}

export default App


// import React, {useState} from "react";
// import './../styles/App.css';
// import Child from "./Child";

// const App = () => {
//   let [name,setName]=useState('');
//   let [price,setPrice]=useState(0);
//   let [list,setList]=useState([]);

//   function handlingFn(){
//     let obj={
//       name:name,
//       price:price
//     };

//     setList([...list,obj]);
//     // console.log(list);
//   }
  
//   const handleRemoveItem = (index) => {
//     const updatedList = list.filter((item, i) => i !== index);
//     setList(updatedList);
//   };
  
//   return (
//     <div className="parent">
//         {/* Do not remove the main div */}
//         <h1>Parent Component</h1>
//         <div className="input-container">
//           <label htmlFor="nameInput">Item Name</label>
//           <input type="text" name="nameInput" id="itemName" onChange={(e)=>setName(e.target.value)}/>
//           <label htmlFor="price">Item Price</label>
//           <input type="text" name="price" id="itemPrice" onChange={(e)=>setPrice(e.target.value)}/>
          
//           <button onClick={handlingFn} >Add Item</button>

//           <Child list={list} onRemoveItem={handleRemoveItem}/>
//         </div>
//     </div>
//   )
// }

// export default App
