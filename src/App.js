import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard />
          <Form />
      </div>
    )
  }
}

export default App;
