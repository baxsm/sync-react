import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

    window.addEventListener('scroll', function () {
        try {
            const header = this.document.querySelector(".fixed-top");
            header.classList.toggle("top-nav-collapse", this.window.scrollY > 100);
        } catch (err) { }
    })

    const [isDropdownActive, setIsDropdrownActive] = useState(null)

    const openToggle = () => {
        setIsDropdrownActive(true)
    }

    const closeToggle = () => {
        setIsDropdrownActive(false)
    }

    const [location, setLocation] = useState(null)
    const loc = useLocation()

    useEffect(() => {
        setLocation(loc.pathname)
    },[loc])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <Link to='/' className="navbar-brand logo-image" onClick={() => closeToggle()}>
                    <img src="images/logo.svg" alt="alternative" />
                </Link>
                <button className="navbar-toggler collapsed" type="button" style={{ boxShadow: 'none', outline: 'none' }}>
                    <span className="navbar-toggler-awesome fas" >{isDropdownActive ? <FaTimes onClick={() => closeToggle()}/> : <FaBars onClick={() => openToggle()}/>}</span>
                </button>
                <div className={isDropdownActive ? 'navbar-collapse' : 'collapse navbar-collapse'} style={{ justifyContent: 'right' }}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a data-href='description' href='/#description' className="nav-link page-scroll" onClick={() => closeToggle()}>
                                DESCRIPTION
                            </a>
                        </li>
                        <li className="nav-item">
                            <a data-href='features' href='/#features' className="nav-link page-scroll" onClick={() => closeToggle()}>
                                FEATURES
                            </a>
                        </li>
                        <li className="nav-item">
                            <a data-href='screens' href='/#screens' className="nav-link page-scroll" onClick={() => closeToggle()}>
                                SCREENS
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">EXTRA</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/article-details' className='dropdown-item' onClick={() => closeToggle()}>
                                    <span className="item-text" style={{color: location === '/article-details' ? '#ff556e' : ''}}>ARTICLE DETAILS</span>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to='/terms-conditions' className='dropdown-item' onClick={() => closeToggle()}>
                                    <span className="item-text" style={{color: location === '/terms-conditions' ? '#ff556e' : ''}}>TERMS CONDITIONS</span>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to='/privacy-policy' className='dropdown-item' onClick={() => closeToggle()}>
                                    <span className="item-text" style={{color: location === '/privacy-policy' ? '#ff556e' : ''}}>PRIVACY POLICY</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <a href='/#download' className="btn-outline-sm page-scroll" onClick={() => closeToggle()}>
                            DOWNLOAD
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    )
}
