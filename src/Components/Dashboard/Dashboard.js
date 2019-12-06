import React from 'react';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    constructor(props) {
        super (props)
    }

    render() {
        const mappedProducts = this.props.inventory.map(product => {
            if(product.imgurl === ''){
                product.imgurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf&s';
            }
            return (
                <Product key={product.productId} product={product}/>
            )
        })
        return(
            <div>
                {mappedProducts}
            </div>
        );
    }
}
