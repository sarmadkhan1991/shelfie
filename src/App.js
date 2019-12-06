import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props) 

    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts(){
    axios.get('/api/inventory').then(res => {
      console.log(res);
      this.setState({
        inventory: res.data
      })
    })
  }


  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard inventory={this.state.inventory}/>
          <Form />
      </div>
    )
  }
}

export default App;
