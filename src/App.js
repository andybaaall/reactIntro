import React from 'react';
import List from './List/List'
import './App.css';


// every component gets its own JS file!

function App() {
  return (
    <div className="App">
        <List />
    </div>
  );
}

export default App;

// each render of a component file has its own properties ...
// and each component's properties are unique and scoped to that component
