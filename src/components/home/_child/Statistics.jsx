import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function Statistics() {

    const stats = [
        {
            count: '231',
            iconClass: 'fas fa-users',
            infoTitle: 'Happy Users',
        },
        {
            count: '385',
            iconClass: 'fas fa-code green',
            infoTitle: 'Issues Solved',
        },
        {
            count: '159',
            iconClass: 'fas fa-cog red',
            infoTitle: 'Good Reviews',
        },
        {
            count: '127',
            iconClass: 'fas fa-comments yellow',
            infoTitle: 'Case Studies',
        },
        {
            count: '211',
            iconClass: 'fas fa-rocket blue',
            infoTitle: 'Orders Received',
        },
    ]

    return (
        <>
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="counter">
                                {
                                    stats.map((item, index) => {
                                        return (
                                            <div className="cell" key={index}>
                                                <i className={item.iconClass}></i>
                                                <CountUp start={0} end={item.count} redraw={true}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <div className="counter-value number-count" ref={countUpRef}></div>
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <p className="counter-info">{item.infoTitle}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
