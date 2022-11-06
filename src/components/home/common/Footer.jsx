import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-col first">
                <h5>About Sync</h5>
                <p className="p-small">Sync is a landing page HTML template built with Bootstrap for presenting mobile apps</p>
              </div>
              <div className="footer-col second">
                <h5>Contact Info</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li className="media">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="media-body">22 Street, CA, US</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-envelope"></i>
                    <div className="media-body"><a>office@syncmobile.com</a></div>
                  </li>
                  <li className="media">
                    <i className="fas fa-phone-alt"></i>
                    <div className="media-body"><a>+44 376 945 23</a></div>
                  </li>
                </ul>
              </div>
              <div className="footer-col third">
                <h5>Value Links</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li>
                    <Link to='/terms-conditions'>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='/article-details'>Article Details</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col fourth">
                <h5>Other Apps</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li><a>Scientific Calculator</a></li>
                  <li><a>Advanced Timer</a></li>
                  <li><a>Music Store</a></li>
                </ul>
              </div>
              <div className="footer-col fifth">
                <span className="fa-stack">
                  <a>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-pinterest-p fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">Copyright © 2022 <a href="https://github.com/baxsm" target='_blank' referrerPolicy='no-referrer'><i style={{ color: 'gray' }}>B A X S M</i></a> - All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
