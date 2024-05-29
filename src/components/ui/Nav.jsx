import React from 'react'
import { Link } from 'react-router-dom'
import AdobeStock_550760946 from '../../JSF Assets/AdobeStock_550760946.png'

function Nav() {
  return (
    <>
        <section id="nav">
        <div class="nav__container">
          <div class="nav__row">
            <div class="nav">
              <div class="nav__bar">
                <figure>
                  <img
                    class="nav__figure"
                    src={AdobeStock_550760946}
                    alt=""
                  />
                </figure>
                <ul class="nav__lists">
                  <h3 class="nav__list">
                    <Link to="/"
                      class="nav__list"
                    >
                      Home
                    </Link>
                  </h3>
                  <button class="nav__list--btn">Log In</button>
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