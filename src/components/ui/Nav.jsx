import React from 'react'
import { Link } from 'react-router-dom'
import AdobeStock_550760946 from '../../JSF Assets/AdobeStock_550760946.png'

function Nav() {
  return (
    <>
        <section id="nav">
        <div className="nav__container">
          <div className="nav__row">
            <div className="nav">
              <div className="nav__bar">
                <figure>
                  <img
                    className="nav__figure"
                    src={AdobeStock_550760946}
                    alt=""
                  />
                </figure>
                <ul className="nav__lists">
                  <h3 className="nav__list">
                    <Link to="/"
                      className="nav__list"
                    >
                      Home
                    </Link>
                  </h3>
                  <button className="nav__list--btn">Log In</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav