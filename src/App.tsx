import React, { use } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./normalize.css";
import "./App.css";
import "./skeleton.css";

// New App

//TYPE ZONE

type taskNode = {id: number, taskDescription: string};


//APP ZONE
function App(){
  //Dummy Data
  const [getTask, setTask] = useState<taskNode[]> ([{id: 1, taskDescription: "Make ToDo App"},{id: 2, taskDescription: "Kick Bean"}]);
  const addTask = (id: number, taskDescription: string) => {
    setTask(prev => [...prev, {id, taskDescription}])
  }
  return(
    <div>
      <div><TopSection/></div>
      <div><MidSection getTask={getTask}/></div>
      <div><BottomSection onAddTask={addTask}/></div>
    </div>
  )
}

function TopSection(){
  return(
    <div><h1>My ToDo App</h1></div>
  )
}

function MidSection({ getTask }: { getTask: taskNode[]}){
  return(
    <div>{getTask.map(m => (<div>{"(" + m.id + ") " + m.taskDescription}</div>))}</div>
  )
}

function BottomSection({ onAddTask }: { onAddTask: (id: number, taskDescription: string) => void }){
  return(
    <div>
      <button className="button-primary">Remove Task</button>
      <button className="button-primary" onClick={
        () => onAddTask(3, "Test Task")
      }>
        Add Task
      </button>
    </div>
  )
}



// OLD APP
// TYPE ZONE

// type materialsItem = {
//   category: string;
//   quantity: number;
//   price: number;
//   name: string;
//   location: string;
//   stock: number;
// };

// type addStockFn = (name: string, amount: number) => void;

// function App() {
//   const [materialsList, setMaterialsList] = useState<materialsItem[]>([
//     {
//       category: "Cabling",
//       quantity: 300,
//       price: 300,
//       name: "Cat6E",
//       location: "Sydney",
//       stock: 4500,
//     },
//     {
//       category: "Tower",
//       quantity: 1,
//       price: 350000,
//       name: "LeBlanc Tower",
//       location: "Sydney",
//       stock: 3,
//     },
//     {
//       category: "Solar",
//       quantity: 24,
//       price: 6500,
//       name: "Eltek",
//       location: "Gosford",
//       stock: 25,
//     },
//     {
//       category: "Bean",
//       quantity: 1,
//       price: 1,
//       name: "Beah",
//       location: "Lewisham",
//       stock: 1,
//     },
//   ]);

//   const addStock: addStockFn = (name, amount) => {
//     const updateIndexOf = materialsList.findIndex((n) => n.name === name);
//     materialsList[updateIndexOf].stock += amount;
//     setMaterialsList([...materialsList]);
//   };

//   return (
//     <div>
//       <div>
//         <TopSection addStockFn={addStock} />
//       </div>
//       <div>
//         <MaterialsTable materials={materialsList} />
//       </div>
//     </div>
//   );
// }



// function AddItemButton({addStock,}: {addStock: (name: string, amount: number) => void;
// }) {
//   return (
//     <button
//       className="button button-primary"
//       onClick={() => {
//         addStock("Beah", 1);
//       }}
//     >
//       Add BEAH
//     </button>
//   );
// }

// function TopSection({
//   addStockFn,
// }: {
//   addStockFn: addStockFn;
// }) {
//   return (
//     <div>
//       <div className="main-header">
//         <h1> No Beah? </h1>
//       </div>
//       <div>
//         <AddItemButton addStock={addStockFn} />
//       </div>
//     </div>
//   );
// }


// function MaterialsTable({ materials }: { materials: materialsItem[] }) {
//   return (
//     <table className="u-full-width">
//       <thead>
//         <tr>
//           <th>Category</th>
//           <th>Name</th>
//           <th>Location</th>
//           <th>Price</th>
//           <th>Stock</th>
//         </tr>
//       </thead>
//       <tbody>
//         {materials.map((m) => (
//           <tr>
//             <td>{m.category}</td>
//             <td>{m.name}</td>
//             <td>{m.location}</td>
//             <td>{m.price}</td>
//             <td>{m.stock}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

export default App;
