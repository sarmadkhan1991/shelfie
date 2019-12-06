import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            img_url: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.cancelChangeHandler = this.cancelChangeHandler.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(){
        console.log(this.state);
        const { name, price, img_url } = this.state;
        axios.post('/api/product', { name, price, img_url }).then(res => {
          this.setState({
            inventory: res.data,
            name: '',
            price: 0,
            img_url: ''
          })
        })
      }

    changeHandler(key, value){
        this.setState({
            [key]: value
        });
    }

    cancelChangeHandler(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    render () {
        return (
            <div className='form-container'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.addProduct();

                }}>

                    Name: <input name='name' 
                           type='text' 
                           required 
                           onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
                    Price: <input name='price' 
                           type='text' 
                           required 
                           onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
                    URL: <input name='img_url' 
                           type='text' 
                           onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
                    {/* <button onClick={() => this.cancelChangeHandler()}>Cancel</button>  */}
                    <button>Add to Inventory</button>
                </form>
            </div>
            
        ) 
    }
}