import React from 'react';

export default function Product (props) {
    console.log(props);
    return <div className='product-container'>
                <img src={props.product.img_url}/>
                <h2>{props.product.name}</h2>
                <div>{props.product.price}</div>
           </div>
}