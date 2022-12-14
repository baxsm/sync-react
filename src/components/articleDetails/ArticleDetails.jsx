import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../common/Breadcrumbs'
import Heading from '../common/Heading'

export default function ArticleDetails() {

    const title = 'Article Details'

    return (
        <>
            <Heading title={title} />
            <Breadcrumbs title={title} />
            <Content />
            <Breadcrumbs title={title} />
        </>
    )
}

const Content = () => {
    return (
        <div className="ex-basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="image-container-large">
                            <img className="img-fluid" src="images/article-details-large.jpg" alt="alternative" />
                        </div>
                        <div className="text-container">
                            <h3>Business Analysis And Reporting Tools</h3>
                            <p>Sync also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable).</p>
                            <p>When you first register for a Sync account, and when you use the Services, we collect some <a>Personal Information</a> about you such as:</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">The geographic area where you use your computer and mobile devices should be the same with the one of your</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Your full name, username, and email address and other contact details should be provided in the contact forms</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">A unique Sync user ID (an alphanumeric string) which is assigned to you upon registration should always be at front</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Every system is backuped regularly and it will not fail</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent but please make</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Other information submitted by you or your organizational representatives via various methods and practiced techniques</div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-6">
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Your billing address and any necessary other information to complete any financial transaction, and when making purchases through the Services, we may also collect your credit card or PayPal information or any other sensitive</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">User generated content (such as messages, posts, comments, pages, profiles, images, feeds or communications exchanged on the Supported Platforms that can be used)</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Images or other files that you may publish via our Services</div>
                                        </li>
                                        <li className="media">
                                            <i className="fas fa-square"></i>
                                            <div className="media-body">Information (such as messages, posts, comments, pages, profiles, images) we may receive relating to communications you send us, such as queries or comments concerning</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="text-container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Improving Product Strategy</h3>
                                    <p>Sync also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained.</p>
                                    <p>For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page.</p>
                                    <p>The best way to promoted digital products is to provide potential users.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="image-container-small">
                                        <img className="img-fluid" src="images/article-details-small.jpg" alt="alternative" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-container dark">
                            <p className="testimonial-text">Sync is a HTML landing page template tool. By its nature, Services enable our customers to promote their products and services integrate with hundreds of business applications that they already use, all in one place. Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing.</p>
                        </div>

                        <div className="text-container last">
                            <h3>Project Evaluation And Predictions</h3>
                            <p>By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services. Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services.</p>
                        </div>
                        <Link to='/' className='btn-solid-reg'>
                            BACK
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
