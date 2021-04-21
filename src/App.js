import React, { useState } from "react";
import './App.css';
import 'h8k-components';
import Counter from './components/Counter'

const title = "Operations on a Counter";

function App() {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row justify-content-center mt-50">
        <Counter />
      </div>
    </div>
  );
}

export default App;
