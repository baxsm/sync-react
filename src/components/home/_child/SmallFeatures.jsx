import React from 'react'
import { FaUsers, FaCode, FaCog, FaComments, FaRocket } from 'react-icons/fa'

export default function SmallFeatures() {

    const data = [
        {
            title: 'Identify Goals',
            icon: FaUsers,
            iconContainerColor: '',
        },
        {
            title: 'Situation Analysis',
            icon: FaCode,
            iconContainerColor: 'green',
        },
        {
            title: 'Tasks Settings',
            icon: FaCog,
            iconContainerColor: 'red',
        },
        {
            title: 'Social Interaction',
            icon: FaComments,
            iconContainerColor: 'yellow',
        },
        {
            title: 'Get Things Done',
            icon: FaRocket,
            iconContainerColor: 'blue',
        },
    ]

    return (
        <>
            <div className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {
                                data.map((item, index) => {
                                    var Icon = item.icon;
                                    console.log(Icon)
                                    return (
                                        <div className="card" key={index}>
                                            <div className={"card-image " + item.iconContainerColor}>
                                            <Icon className='fas'/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
