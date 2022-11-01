import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
        console.log(isDropdownActive)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a>
                <button className="navbar-toggler collapsed" type="button" style={{boxShadow: 'none'}}>
                    <span className="navbar-toggler-awesome fas" onClick={toggleDropdown}>{isDropdownActive ? <FaTimes /> : <FaBars />}</span>
                </button>
                <div className={isDropdownActive ? 'navbar-collapse' : 'collapse navbar-collapse'} style={{ justifyContent: 'right' }}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#description">DESCRIPTION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#features">FEATURES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#screens">SCREENS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">EXTRA</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                            </div>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <a className="btn-outline-sm page-scroll" href="#download">DOWNLOAD</a>
                    </span>
                </div>
            </div>
        </nav>
    )
}
