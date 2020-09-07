import React from 'react'
import { Link } from "react-router-dom";

import { Card, Button } from 'antd';

const { Meta } = Card;

const Film = (props) => {

    return(
        <div className='film' style={{marginTop: '10px'}}>
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt="example" src={props.film.cover}/>}
            >
                <Meta title={props.film.name}/>
                <Link to={`/aboutfilm/${props.film.id}`}>
                    <Button
                        type="primary"
                        style={{marginTop: '10px'}}
                    >
                        Заказать билет
                    </Button>
                </Link>
            </Card>
        </div>
    )
}

export default Film
