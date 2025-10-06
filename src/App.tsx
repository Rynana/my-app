import React, { use, useEffect } from "react";
import { useState } from "react";
import "./normalize.css";
import "./App.css";
import "./skeleton.css";

// New App

//TYPE SHI

type taskNode = { id: number; taskDescription: string };
let idCount: number = 3;



//APP SHI
function App() {
  //{ Tristan } Data

  const [tasks, setTask] = useState<taskNode[]>([]);
  //API Call
  useEffect(() => {
    fetch("https://less.coffee/ryan/todo.json").then((r) => r.json()).then((data) => {setTask(data.items)});
  }
  ,[]
)
  //Settask with API info

  const addTask = (id: number, taskDescription: string) => {
    setTask((prev) => [...prev, { id, taskDescription }]);
  };

  const removeTask = (id: number) => {
    setTask((prev) =>
      prev.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const editTask = (id: number, newDescription: string) => {
    setTask((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          t.taskDescription = newDescription;
        }
        return { ...t };
      });
    });
  };

  return (
    <div>
      <div>
        <TopSection onAddTask={addTask} />
      </div>
      <div>
        <MidSection
          getTask = { tasks }
          onRemoveTask = { removeTask }
          editTask = { editTask }
        />
      </div>
      <div>
        <BottomSection onAddTask={addTask} />
      </div>
    </div>
  );
}

function TopSection({
  onAddTask,
}: {
  onAddTask: (id: number, taskDescription: string) => void;
}) {
  return (
    <div>
      <div>
        <h1>My ToDo App</h1>
      </div>
      <div>
        <button
          className="button-primary"
          onClick={() => {
            const userInfo = prompt("Please enter info");
            if (userInfo) {
              onAddTask((idCount += 1), userInfo);
            }
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

function MidSection({
  getTask,
  onRemoveTask,
  editTask,
}: {
  getTask: taskNode[];
  onRemoveTask: (id: number) => void;
  editTask: (id: number, newDescription: string) => void;
}) {
  return (
    <div>
      <thead>
        <tr>
          <th>Task List | Number of Tasks: {getTask.length}</th>
        </tr>
      </thead>
      {getTask.map(({ id, taskDescription }) => (
        <tbody>
          <tr>
            <td>
              <button
                className="button-primary"
                onClick={() => onRemoveTask(id)}
              >
                Delete
              </button>
              <button
                className="button-primary"
                onClick={() => {
                  const newDescription = prompt("Edit Entry", taskDescription);
                  if (newDescription) {
                    editTask(id, newDescription);
                  }
                }}
              >
                Edit
              </button>
              {"   " + taskDescription}
            </td>
          </tr>
        </tbody>
      ))}
    </div>
  );
}

function BottomSection({
  onAddTask,
}: {
  onAddTask: (id: number, taskDescription: string) => void;
}) {
  return (
    <div>
      <p>Bottom Text</p>
    </div>
  );
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
//     setMaterialsList(prev => {
//        const updateIndexOf = materialsList.findIndex((n) => n.name === name);
//        prev[updateIndexOf].stock+=amount;
//        return prev;
//     });
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
