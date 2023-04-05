import React from 'react';
import { Breadcrumb } from 'antd';

export default function Frame() {
    return (
        <div className='frame'>
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: <a href="">Application Center</a>,
                    },
                    {
                        title: <a href="">Application List</a>,
                    },
                    {
                        title: 'An Application',
                    },
                ]}
            />
        </div>
    )
}
