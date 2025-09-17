import React from 'react';

function handleInputChange(event) {
  console.log("Event type:", event.type);           // "change"
  console.log("Element that changed:", event.target); // The <input> element
  console.log("Element tag name:", event.target.tagName); // "INPUT"
  console.log("Current value:", event.target.value);     // Whatever user typed
  console.log("Element ID:", event.target.id);           // The input's ID if it has one
}

function Eventh() {
  return (
    <div>
        <p>EVENT HANDLING USING........</p>
        {/* <input onChange={handleInputChange} /> */}
        <input 
  id="myInput"
  onChange={handleInputChange} 
  placeholder="Type something..."
/>
    </div>
    )
}

export default Eventh;


//BASIC.................
// function MyButton() {
//   function handleClick() {
//     alert('Button was clicked!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// function Eventh() {
//   return <MyButton />;
// }