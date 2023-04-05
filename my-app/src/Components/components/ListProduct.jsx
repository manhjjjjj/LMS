
import React from 'react';

import FromInput from '../Extra/FromInput';
import Paging from '../Extra/Paging';
import CartProduct from '../Extra/CartProducts';



export default function ListProduct() {
    return (
        <div className='products-lists'>
            <div className='title-inSearch'>
                <h2>Danh sách lộ trình</h2>
                <FromInput />
            </div>

            <CartProduct />

            <Paging />
        </div>
    )
}
