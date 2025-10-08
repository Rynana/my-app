import React, { use, useEffect } from "react";
import { useState } from "react";
import "./normalize.css";
import "./App.css";
import "./skeleton.css";


//Types

type numberParameter = {userNumber: number};

//App

function App(){
  const [userNumber, setUserNumber] = useState<numberParameter>(0)
  return(
    <div>
      <div>
        <h1>Counter App</h1>
      </div>
      <div>
        <BottomSection/>
      </div>
    </div>
  )
}

//Functions

function BottomSection(){
  return(
    <div>
      <div>
        <button>
          -1
        </button>
        <button>
          Reset
        </button>
        <p>userNumber</p>
        <button>
          +1
        </button>
      </div>
    </div>
  )
}


























// type numberParameter= {userNumber: number}

// function App(){
//   const [getNumber, setNumber] = useState<numberParameter>({userNumber: 0});

//   const setPlusNumber=  (userNumber: number)=>{
//     setNumber((prev) => ({
//       ...prev, 
//       userNumber: prev.userNumber+1}))
//   }

//   const setMinusNumber = (userNumber:number)=>{
//     setNumber((prev)=>({
//       ...prev, 
//       userNumber: prev.userNumber-1}))
//   }

//   const setResetNumber = (userNumber:number)=>{
//     setNumber((prev)=>({
//       ...prev,
//       userNumber: prev.userNumber = 0}))
//   }
  
//   return(
//     <div>
//       <div>
//         <h1>COUNTER APP</h1>
//       </div>
//       <div>
//         <BottomSection getNumber={getNumber} setPlusNumber={setPlusNumber} setMinusNumber={setMinusNumber} setResetNumber={setResetNumber} />
//       </div>
//     </div>
//   )
// }

// function BottomSection({getNumber, setPlusNumber, setMinusNumber, setResetNumber}:{getNumber:numberParameter, setPlusNumber: (userNumber:number)=>void, setMinusNumber: (userNumber:number)=>void, setResetNumber:(userNumber:number)=>void}){
//   return(
//     <div>
//       <div>
//         <button onClick={()=> {
//           if(getNumber.userNumber > -10){
//           setMinusNumber(getNumber.userNumber)
//           }}
//         }>-1</button>
//         <p>{getNumber.userNumber}</p>
//         <button onClick={()=> {
//         if(getNumber.userNumber < 10){
//           setPlusNumber(getNumber.userNumber)
//         }}
//         }>+1</button>
//         <button onClick={()=> 
//           setResetNumber(getNumber.userNumber)
//         }>Reset</button>
//       </div>
//     </div>
//   )
// }

export default App;