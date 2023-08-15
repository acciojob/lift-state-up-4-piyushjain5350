// // import React from "react";

// // function Child({list}) {
// //     return(
// //         <div className="child">
// //             <h1>Child Component</h1>
// //             <ul className="listItem">
// //                 {/* <li>
// //                     Item 1-$15 <button>Remove</button>
// //                 </li> */}
// //                 console.log(list);
// //             </ul>
// //         </div>
// //     )
// // }

// // export default Child;
// import React from "react";

// function Child({ list ,onRemoveItem }) {
//   return (
//     <div className="child">
//       <h1>Child Component</h1>
//       <ul className="listItem">
//         {list.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price}
//             <button onClick={() => onRemoveItem(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Child;