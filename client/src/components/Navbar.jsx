import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">    
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{ listStyle: "none" }}>
            <li className="nav-item mr-3">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/client">Client</Link>
            </li>
            <li className="nav-item">
              <Link to="/usage">Room Usage</Link>
            </li>
          </ul>
          {/* <button className="btn btn-outline-danger my-2 my-sm-0" type="button">Log Out</button> */}
        </div>
      </nav>
    </>
  )
}