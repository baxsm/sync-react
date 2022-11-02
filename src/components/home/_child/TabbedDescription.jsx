import React, { useState } from 'react'
import { FaCheckSquare, FaSquare, FaClock, FaList, FaCalendarAlt } from 'react-icons/fa'

export default function TabbedDescription() {

    const [activeTab, setActiveTab] = useState('schedule')

    const toggleActive = (item) => {
        setActiveTab(item)
    }

    const tabbed1 = [
        {
            body: 'You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel'
        },
        {
            body: 'It\'s easy to stay focused on your most important daily activities that will get you closer to meeting your goals'
        },
        {
            body: 'Use phone reminders to free up your long term memory which will reduce stress and make you more productive'
        },
    ]

    const tabbed2 = [
        {
            title: 'Keep track of everything',
            desc: 'and analyse your progress while using the app. In less than a month you should be seeing improved results when it comes to time management and task prioritization',
        },
        {
            title: 'Anyone can enjoy the app',
            desc: 'no matter their gender, age, occupation or location in the world. Sync\'s algorithms have been built to be flexible and functional for any person in the world',
        },
        {
            title: 'Achieve the impossible',
            desc: 'just by carefully monitoring your progress and keeping the app updated with daily operations. It\'s easier than you think and it only takes a couple of minutes',
        },
    ]

    const tabbed3 = [
        {
            body: 'Commiting to something in front of a crowd gives you little room to walk back on your promise and makes you push on',
        },
        {
            body: 'No more frustrations of loosing focus and not being efficient. Sync main purpose is to solve just that and make you happy',
        },
        {
            body: 'It\'s the first mobile app that can turn you in a better organized person without the pressure of failing like other systems',
        },
        {
            body: 'Recognized by a lot of trainers and life coaches Sync is the number one tool they recommend time management',
        },
    ]

    return (
        <>
            <div className="tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tabs-container">
                                <ul className="nav nav-tabs" id="cedoTabs" role="tablist">
                                    <li className="nav-item">
                                        <a className={activeTab === 'schedule' ? 'nav-link active' : 'nav-link'} onClick={() => toggleActive('schedule')}>
                                            <FaClock className='far' />
                                            Schedule
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={activeTab === 'tracking' ? 'nav-link active' : 'nav-link'} onClick={() => toggleActive('tracking')}>
                                            <FaList className='fas' />
                                            Tracking
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={activeTab === 'organize' ? 'nav-link active' : 'nav-link'} onClick={() => toggleActive('organize')}>
                                            <FaCalendarAlt className='far' />
                                            Organize
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="cedoTabsContent">
                                    <div className={activeTab === 'schedule' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                        <p><strong>Schedule tasks</strong> to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.</p>
                                        <ul className="list-unstyled li-space-lg">
                                            {
                                                tabbed1.map((item, index) => {
                                                    return (
                                                        <li className="media d-flex align-items-start" key={index}>
                                                            <FaCheckSquare className='far mt-1' />
                                                            <div className="media-body">{item.body}</div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <a className="btn-solid-reg page-scroll" href="terms-conditions.html">TERMS</a> <a className="btn-outline-reg page-scroll" href="privacy-policy.html">PRIVACY</a>
                                    </div>
                                    <div className={activeTab === 'tracking' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                        {
                                            tabbed2.map((item, index) => {
                                                return (
                                                    <p key={index}>
                                                        <strong>{item.title}</strong>{" "}
                                                        {item.desc}
                                                    </p>
                                                )
                                            })
                                        }
                                        <a className="red" href="terms-conditions.html">Terms & Conditions {'>>'}</a>
                                    </div>
                                    <div className={activeTab === 'organize' ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                        <p><strong>Use the power of social interactivity</strong> to keep you motivated and focused on your daily and long term goals. It's revolutionary</p>
                                        <ul className="list-unstyled li-space-lg">
                                            {
                                                tabbed3.map((item, index) => {
                                                    return (
                                                        <li className="media d-flex align-items-start" key={index}>
                                                            <FaCheckSquare className='far mt-1' />
                                                            <div className="media-body">{item.body}</div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/description-2-app.png" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
