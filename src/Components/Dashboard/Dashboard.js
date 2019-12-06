import React from 'react';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            edit: false
        }
    }

    render() {
        console.log(this.props);
        const mappedProducts = this.props.inventory.map(product => {
            if(product.img_url === ''){
                product.img_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf&s';
            }
            return (
                <div className='product-container'>
                    <Product key={product.product_id} product={product} />
                </div>
            )
        })
        return(
            <div className='dashboard'>
                {mappedProducts}
            </div>
        );
    }
}
