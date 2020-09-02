import React from 'react'

import { Image, Typography, Table } from 'antd'
import './index.scss'

const { Title, Paragraph } = Typography;
const { Column, ColumnGroup } = Table;

const AboutFilm = () => {

    // const columns = [
    //     {
    //       title: 'Дата',
    //       dataIndex: 'date',
    //     },
    //     {
    //       title: 'Время',
    //       dataIndex: 'time',
    //     },
    //     {
    //       title: '',
    //       dataIndex: 'button',
    //     },
    // ];

    // const data = [
    //     {
    //       key: '1',
    //       date: '02.09.2020, Среда',
    //       time: '12:00'
    //     },
    //     {
    //       key: '2',
    //       date: '02.09.2020, Среда',
    //       time: '19:00'
    //     },
    //     {
    //       key: '3',
    //       date: '03.09.2020, Четверг',
    //       time: '12:00'
    //     }
    // ];

    return(
        <div className="">
            <div className="about__film">
                <div className="-image">
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <div className="-text">
                    <Typography>
                        <Title>Introduction</Title>
                        <Paragraph>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                        </Paragraph>
                    </Typography>
                </div>
            </div>
            <div className="-table">

            </div>
        </div>
    )
}

export default AboutFilm