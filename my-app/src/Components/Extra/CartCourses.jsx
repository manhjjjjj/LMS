import React from 'react'
import { Link } from "react-router-dom"
import { Card } from 'antd';


const { Meta } = Card;

const courses = [
    {
        id: 1,
        Image: "../Image/Rectangle 263.png",
        nameProduct: "Learn Figma - UI/UX Design Essential Training",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 2,
        Image: "../Image/anh2.png",
        nameProduct: "Giới thiệu về Lập trình với Chuyên ngành Python và Java",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 3,
        Image: "../Image/anh3.png",
        nameProduct: "Lập trình Java: Giải quyết vấn đề với phần mềm",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 4,
        Image: "../Image/anh4.png",
        nameProduct: "Learn Figma - UI/UX Design Essential Training",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 5,
        Image: "../Image/anh5.png",
        nameProduct: "Giới thiệu về Lập trình với Chuyên ngành Python và Java",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 6,
        Image: "../Image/anh7.png",
        nameProduct: "Lập trình Java: Giải quyết vấn đề với phần mềm",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 7,
        Image: "../Image/anh6.png",
        nameProduct: "Learn Figma - UI/UX Design Essential Training",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 8,
        Image: "../Image/anh5.png",
        nameProduct: "Giới thiệu về Lập trình với Chuyên ngành Python và Java",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 9,
        Image: "../Image/anh4.png",
        nameProduct: "Lập trình Java: Giải quyết vấn đề với phần mềm",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 10,
        Image: "../Image/anh6.png",
        nameProduct: "Learn Figma - UI/UX Design Essential Training",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 11,
        Image: "../Image/anh7.png",
        nameProduct: "Giới thiệu về Lập trình với Chuyên ngành Python và Java",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }, {
        id: 12,
        Image: "../Image/Rectangle 263.png",
        nameProduct: "Lập trình Java: Giải quyết vấn đề với phần mềm",
        title: "Dolorem iure dolores iusto et. Ut omnis animi iste et corrupti ut optio",
        course: "6 khóa",
        time: "3h 56m",
        views: 600
    }
]


export default function CartCourses() {
    return (
        <div className='product'>
            {courses.map(cart => {
                return (
                    <Card style={{ width: 300 }}
                        key={cart.id}
                        cover={
                            <img
                                alt="example"
                                src={cart.Image}
                            />
                        }
                        actions={[
                            <Link>
                                <div className='information'>
                                    <div className='infor-box'>
                                        <i class="fa-solid fa-book-open"></i>
                                        <p>{cart.course}</p>
                                    </div>
                                    <div className='infor-box'>
                                        <i class="fa-sharp fa-regular fa-clock"></i>
                                        <p>{cart.time}</p>
                                    </div>
                                    <div className='infor-box'>
                                        <i class="fa-solid fa-eye"></i>
                                        <p>{cart.views}</p>
                                    </div>
                                </div>
                            </Link>
                        ]}
                    >
                        <Meta
                            title={cart.nameProduct}
                            description={cart.title}
                        />
                    </Card>
                )
            })}

        </div>
    )
}
