import React from 'react';
import './App.css';
import Country from './components/country';

function App() {
  return (
    <div className="App">
      <Country 
        flag="https://cdn.countryflags.com/thumbs/spain/flag-400.png"
        name="España"
        population={1231231}
        region= "Europa"
        capital= "Madrid"
      />
    </div>
  );
}

export default App;
