import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { FaCheckSquare, FaSquare } from 'react-icons/fa'

export default function Description() {

    const [isLightboxActive, setIsLightboxActive] = useState(false)

    const toggleLightbox = () => {
        if (isLightboxActive) {
            setIsLightboxActive(false)
        }
        else {
            setIsLightboxActive(true)
        }
    }

    const checks = [
        {
            title: 'Splash screen panel',
        },
        {
            title: 'Statistics graph report',
        },
        {
            title: 'Events calendar layout',
        },
        {
            title: 'Location details screen',
        },
        {
            title: 'Onboarding steps interface',
        },
    ]

    const media = [
        {
            body: 'Analyse and evaluate your current status and productivity',
        },
        {
            body: 'Begin monitoring your day to day routine with Sync app',
        },
        {
            body: 'See the improved results in no more than a couple of weeks',
        },
    ]

    return (
        <>
            <div id="description" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/description-1-app.png" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Organize Your Time And Start Getting Results</h2>
                                <p>Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away</p>
                                <ul className="list-unstyled li-space-lg">
                                    {
                                        media.map((item, index) => {
                                            return (
                                                <li className="media d-flex align-items-center" key={index}>
                                                    <FaSquare className='fas'/>
                                                    <div className="media-body">{item.body}</div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" onClick={toggleLightbox}>LIGHTBOX</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactModal
                isOpen={isLightboxActive}
                onRequestClose={toggleLightbox}
                className="reactModal"
                overlayClassName="modalOverlay"
                closeTimeoutMS={500}
                ariaHideApp={false}
            >
                <div id="description-1-details-lightbox" className='lightbox-basic zoom-anim-dialog'>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="image-container">
                                <img className="img-fluid" src="images/description-1-details-lightbox.jpg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3>Goals Setting</h3>
                            <hr />
                            <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                            <h4>User Feedback</h4>
                            <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                            <ul className="list-unstyled li-space-lg">
                                {
                                    checks.map((item, index) => {
                                        return (
                                            <li className="media d-flex align-items-center" key={index}>
                                                <FaCheckSquare className='far' />
                                                <div className="media-body">{item.title}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <a className="btn-solid-reg mfp-close page-scroll" href='#download' onClick={toggleLightbox}>DOWNLOAD</a>
                            <button className="btn-outline-reg mfp-close as-button" type="button" onClick={toggleLightbox}>BACK</button>
                        </div>
                    </div>
                </div>
            </ReactModal>

        </>
    )
}
