import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.cancelChangeHandler = this.cancelChangeHandler.bind(this);
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
                }}>

                    <input name='imgurl' 
                           type='url' 
                           onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
                    <input name='name' 
                           type='text' 
                           required 
                           onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
                    <input name='price' 
                           type='text' 
                           required 
                           onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
                    <button onClick={() => this.cancelChangeHandler()}>Cancel</button> 
                    <button>Add Inventory</button>
                </form>
            </div>
            
        ) 
    }
}