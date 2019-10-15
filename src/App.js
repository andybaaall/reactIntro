import React from 'react';
import logo from './logo.svg';
import './App.css';

// every component gets its own JS file!
import Test from './Test';

function App() {
  return (
    <div>
        <Test message="This is component 1"/>
        <Test message="This is component 2"/>
        <Test message="This is component 3"/>
        <Test message="This is component 4"/>
        <Test message="This is component 5"/>
    </div>
  );
}

export default App;

// each render of a component file has its own properties ...
// and each component's properties are unique and scoped to that component
