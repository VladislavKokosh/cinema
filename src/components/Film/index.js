import React from 'react'

import { Card } from 'antd';

const { Meta } = Card;

const Film = (props) => {
return(
    <div className='film'>
        <Card
            hoverable
            style={{ width: 280 }}
            cover={<img alt="example" src={props.film.cover} />}
        >
            <Meta title={props.film.name}/>
        </Card>
    </div>
)}

export default Film