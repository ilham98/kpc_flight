import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
          <nav>
            <div className="nav-wrapper">
              <span>Logo</span>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                { !props.isAuthenticated && 
                  <React.Fragment>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </React.Fragment>
                }
                {
                  props.isAuthenticated && 
                  <li><Link to="/users">Users</Link></li>
                }
                
              </ul>
            </div>
          </nav>
)}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.data.auth
  }
}

export default connect(mapStateToProps)(Navbar)
