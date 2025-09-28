import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div>
      <div>
        <TopSection/>
      </div>
      <div>
        <MaterialsTable materials={materialsList}/>
      </div>
    </div>
  );
}

type materialsItem = {
  category: string;
  quantity: number;
  price: number;
  name: string;
  location: string;
  stock: number;
}

function AddItemButton(){
  return(
    <span>ADD ITEM</span>
  );
}

function TopSection(){
  return(
    <div>
      <div className='main-header'><h1> No Beah? </h1></div>
      <div><AddItemButton/></div>
    </div>
  )
}

function MaterialsTable({ materials }:{materials:materialsItem []}){
return(
  <div className='materials-table-container'>
    <div className='materials-table-header-container'>
      <div className='header-text'>
        Category
      </div>
            <div className='header-text'>
        Name
      </div>
            <div className='header-text'>
        Location
      </div>
            <div className='header-text'>
        Price
      </div>
            <div className='header-text'>
        Stock
      </div>
    </div>
    <div className='materials-table-data'>
      {materials.map((m)=>(
        <div className='materials-table-datarow'>
          <div className='data-text'>
          {m.category}
          </div>
          <div className='data-text'>
          {m.name}
          </div>
          <div className='data-text'>
          {m.location}
          </div>
          <div className='data-text'>
          {m.price}
          </div>
          <div className='data-text'>
          {m.stock}
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

let materialsList: materialsItem[]= [
  {category: "Cabling", quantity: 300, price: 300, name: "Cat6E", location: "Sydney", stock: 4500},
  {category: "Tower", quantity: 1, price: 350000, name: "LeBlanc Tower", location: "Sydney", stock: 3},
  {category: "Solar", quantity: 24, price: 6500, name: "Eltek", location: "Gosford", stock: 25},
  {category: "Bean", quantity: 1, price: 1, name: "Beah", location: "Lewisham", stock: 1}
];

export default App;
