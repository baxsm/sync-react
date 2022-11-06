import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Header() {

    window.addEventListener('scroll', function () {
        try {
            const header = this.document.querySelector(".fixed-top");
            header.classList.toggle("top-nav-collapse", this.window.scrollY > 100);
        } catch (err) { }
    })

    const [isDropdownActive, setIsDropdrownActive] = useState(null)

    const toggleDropdown = () => {
        if (isDropdownActive) {
            setIsDropdrownActive(null)
        }
        else {
            setIsDropdrownActive('show')
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <Link to='/' className="navbar-brand logo-image">
                    <img src="images/logo.svg" alt="alternative" />
                </Link>
                <button className="navbar-toggler collapsed" type="button" style={{ boxShadow: 'none' }}>
                    <span className="navbar-toggler-awesome fas" onClick={toggleDropdown}>{isDropdownActive ? <FaTimes /> : <FaBars />}</span>
                </button>
                <div className={isDropdownActive ? 'navbar-collapse' : 'collapse navbar-collapse'} style={{ justifyContent: 'right' }}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/#description' className="nav-link page-scroll">
                                DESCRIPTION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/#features' className="nav-link page-scroll">
                                FEATURES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/#screens' className="nav-link page-scroll">
                                SCREENS
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">EXTRA</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/article-details' className='dropdown-item'>
                                    <span className="item-text">ARTICLE DETAILS</span>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to='/terms-conditions' className='dropdown-item'>
                                    <span className="item-text">TERMS CONDITIONS</span>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to='/privacy-policy' className='dropdown-item'>
                                    <span className="item-text">PRIVACY POLICY</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <Link to='/#download' className="btn-outline-sm page-scroll">
                            DOWNLOAD
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}
