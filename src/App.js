import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Tab from './components/Tab';

function App() {
  const [array, setArray] = useState(['Tab 1 content is showing here','Tab 2 content is showing here','Tab 3 content is showing here'])
  return (
    <div className="App">
      <Tab content = {array}/>
    </div>
  );
}

export default App;