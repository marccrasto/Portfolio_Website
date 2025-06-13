import './App.css';
import Navbar from './components/Navbar';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  } 
}


export default App;
