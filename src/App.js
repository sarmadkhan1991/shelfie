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
      inventory: [],
      name: '',
      price: 0,
      img_url: '',
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts(){
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <div className='header'>
          <Header />
        </div>
        <div className='main-container'>
          <Dashboard inventory={this.state.inventory} />
          <Form />
        </div>
      </div>
    )
  }
}

export default App;
