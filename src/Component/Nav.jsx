import React from 'react'

function Nav() {
  return (
    <nav className="navbar navbar-default head">
        <div className="container-fluid head">
          <div className="navbar-header">
            <a className="navbar-brand" href="Shop">
              <img id="logo" src={require('./Images/loga.png')} width="45px" height="35px" className="d-inline-block align-top" itemID="rounded-circle" alt="" /></a>
              <h3>APPLELITTE</h3>
        </div>
        </div>
      </nav>
  )
}

export default Nav