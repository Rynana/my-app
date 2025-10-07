import React, { use, useEffect } from "react";
import { useState } from "react";
import "./normalize.css";
import "./App.css";
import "./skeleton.css";

type numberParameter = {userNumber: number, numberMax: number, numberMin: number};



function App(){

  const [getNumber, setNumber] = useState<numberParameter>({ userNumber: 0, numberMax: 10, numberMin: -10 })
  const setPlusNumber = (userNumber: number) => {
    setNumber((prev) => ({
      ...prev, userNumber: prev.userNumber + 1
    }));
  }

  const setMinusNumber = (usernumber:number) => {
    setNumber((prev)=> ({...prev, userNumber: prev.userNumber-1}))
  }

  const setResetNumber = (userNumber: number) => {
    setNumber((prev)=>({...prev, userNumber: prev.userNumber=0}))
  }


  return(
    <div>
      <div>
        <h1>Heading</h1>
      </div>
      <div>
        <Content getNumber={getNumber} setResetNumber={setResetNumber} setPlusNumber={setPlusNumber} setMinusNumber={setMinusNumber}/>
      </div>
    </div>
  )
}

function Content ({getNumber, setPlusNumber, setMinusNumber, setResetNumber}: {getNumber: numberParameter, setPlusNumber: (userNumber: number) => void, setMinusNumber: (userNumber: number)=>void, setResetNumber: (userNumber: number) => void}){
  return(
    <div>
      <div>
        <button onClick={()=>
          {if(getNumber.userNumber > -10){
            setMinusNumber(getNumber.userNumber)
          }}
        }>-1</button>
        <h2>{getNumber.userNumber}</h2>
        <button onClick={()=>
        {if(getNumber.userNumber < 10){
          setPlusNumber(getNumber.userNumber)}}
        }>+1</button>
      </div>
      <div>
        <button onClick={()=>
          setResetNumber(getNumber.userNumber)
        }>
          Reset
        </button>
      </div>
    </div>
  )
}

// type taskNode = { id: number; taskDescription: string };
// let idCount: number = 3;



// //APP SHI
// function App() {
//   //{ Tristan } Data

//   const [tasks, setTask] = useState<taskNode[]>([]);
//   //API Call
//   useEffect(() => {
//     fetch("https://less.coffee/ryan/todo.json").then((r) => r.json()).then((data) => {setTask(data.items)});
//   }
//   ,[]
// )
//   //Settask with API info

//   const addTask = (id: number, taskDescription: string) => {
//     setTask((prev) => [...prev, { id, taskDescription }]);
//   };

//   const removeTask = (id: number) => {
//     setTask((prev) =>
//       prev.filter((task) => {
//         return task.id !== id;
//       }),
//     );
//   };

//   const editTask = (id: number, newDescription: string) => {
//     setTask((prev) => {
//       return prev.map((t) => {
//         if (t.id === id) {
//           t.taskDescription = newDescription;
//         }
//         return { ...t };
//       });
//     });
//   };

//   return (
//     <div>
//       <div>
//         <TopSection onAddTask={addTask} />
//       </div>
//       <div>
//         <MidSection
//           getTask = { tasks }
//           onRemoveTask = { removeTask }
//           editTask = { editTask }
//         />
//       </div>
//       <div>
//         <BottomSection onAddTask={addTask} />
//       </div>
//     </div>
//   );
// }

// function TopSection({
//   onAddTask,
// }: {
//   onAddTask: (id: number, taskDescription: string) => void;
// }) {
//   return (
//     <div>
//       <div>
//         <h1>My ToDo App</h1>
//       </div>
//       <div>
//         <button
//           className="button-primary"
//           onClick={() => {
//             const userInfo = prompt("Please enter info");
//             if (userInfo) {
//               onAddTask((idCount += 1), userInfo);
//             }
//           }}
//         >
//           Add Task
//         </button>
//       </div>
//     </div>
//   );
// }

// function MidSection({ getTask, onRemoveTask, editTask,}: { getTask: taskNode[]; onRemoveTask: (id: number) => void; editTask: (id: number, newDescription: string) => void;
// }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Task List | Number of Tasks: {getTask.length}</th>
//         </tr>
//       </thead>
//         <tbody>
//       {getTask.map(({ id, taskDescription }) => (

//           <tr key= {`task-${id}`}>
//             <td>
//               <button
//                 className="button-primary"
//                 onClick={() => onRemoveTask(id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="button-primary"
//                 onClick={() => {
//                   const newDescription = prompt("Edit Entry", taskDescription);
//                   if (newDescription) {
//                     editTask(id, newDescription);
//                   }
//                 }}
//               >
//                 Edit
//               </button>
//                     <input className="u-full-width" value={taskDescription} id={`task-${id}`} type="text" onChange={(event)=>{
//                       editTask(id, event.target.value);
//                     }}></input>
//             </td>
//           </tr>
        
//       ))}
//       </tbody>
//     </table>
//   );
// }

// function BottomSection({
//   onAddTask,
// }: {
//   onAddTask: (id: number, taskDescription: string) => void;
// }) {

//   return (
//       <div>
//         <p>Bottom Text</p>
//       </div>
//   );
// }

export default App;