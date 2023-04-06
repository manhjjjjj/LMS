
import React from 'react';

import FromInput from '../Extra/FromInput';
import Paging from '../Extra/Paging';
import CartProduct from '../Extra/CartCourses';
import { useState, useEffect } from 'react';


export default function ListCourse() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    return (
        <div className='products-lists'>
            <div className='title-inSearch'>
                <h2>Danh sách lộ trình</h2>
                <FromInput />
            </div>

            <CartProduct />

            <Paging />

            <div>
                <p>count: {count}</p>
                <button onClick={() => setCount(count + 1)}>tăng count</button>
                <button onClick={() => setCount(count - 1)}>giảm count</button>
            </div>

        </div>
    )
}
