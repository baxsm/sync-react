import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'

export default function Banner() {

    const data = [
        {
            class: 'deco-white-circle-1',
            image: 'images/decorative-white-circle.svg'
        },
        {
            class: 'deco-white-circle-2',
            image: 'images/decorative-white-circle.svg'
        },
        {
            class: 'deco-blue-circle',
            image: 'images/decorative-blue-circle.svg'
        },
        {
            class: 'deco-yellow-circle',
            image: 'images/decorative-yellow-circle.svg'
        },
        {
            class: 'deco-green-diamond',
            image: 'images/decorative-green-diamond.svg'
        },
    ]


    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h1>Mobile App Landing Page</h1>
                                <p className="p-large p-heading">Start focusing on your goals and get more things done with Sync mobile application. It's the first app to harness the power of social connections to help you stay focused and get organized</p>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <a className="btn-solid-lg d-flex align-items-center justify-content-center" style={{padding: '15px 35px'}}>
                                        <AiFillApple className='fab' style={{fontSize: '1.25rem'}}/>
                                        DOWNLOAD
                                    </a>
                                    <a className="btn-solid-lg flex d-flex align-items-center justify-content-center" style={{padding: '15px 35px'}}>
                                        <FaGooglePlay className='fab' style={{fontSize: '1.25rem'}}/>
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <img className="img-fluid" src="images/header-iphone.png" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    data.map((item, index) => {
                        return (
                            <div className={item.class} key={index}>
                                <img src={item.image} />
                            </div>
                        )
                    })
                }
            </header>

        </>
    )
}
