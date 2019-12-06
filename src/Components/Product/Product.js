import React from 'react';

export default function Product (props) {
    return <div key={props.product.key}>
                <img src={props.product.imgurl}/>
                <h2>{props.product.name}</h2>
                <div>{props.product.price}</div>
           </div>
}