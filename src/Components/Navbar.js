import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../popup.css'
import Login from './Login'
import PostRide from '../popups/PostRide'
const Navbar = ({ user, role }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [postOPen, setPostOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const togglePost = () => {
    setPostOpen(!postOPen)
  }
  console.log('nav', user, role)
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className='navbar'>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='/icons/logo.png' alt='' />
        </a>
      </div>
      <div className='right'>
        {user ? (
          <>
            {role === 'User' && (
              <>
                <div className='btn-group'>
                  <button
                    type='button'
                    className='btn btn-danger dropdown-toggle'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {user}
                  </button>

                  <div className='dropdown-menu dpm'>
                    <a className='dropdown-item' href='/allrides'>
                      My Rides
                    </a>
                    <a className='dropdown-item' href='/allchats'>
                      My Chats
                    </a>

                    <div className='dropdown-divider'></div>

                    <button
                      onClick={handleLogout}
                      className='dropdown-item'
                      href='#'
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <button onClick={togglePost} className='pos nav-btn'>
                  Post a Ride
                </button>
              </>
            )}
            {role === 'admin' && (
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-danger dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {user}
                </button>
                <button onClick={togglePost} className='pos nav-btn'>
                  Post a Ride
                </button>
                <div className='dropdown-menu dpm'>
                  <a className='dropdown-item' href='/adminpanel'>
                    View Appointments
                  </a>

                  <div className='dropdown-divider'></div>
                  <button onClick={handleLogout} className='dropdown-item' href='#'>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <a
              style={{ textAlign: 'center' }}
              onClick={togglePopup}
              className='login-btn nav-btn'
            >
              Login
            </a>
            <button onClick={togglePost} className='pos nav-btn'>
              Post a Ride
            </button>
          </>
        )}
      </div>
      {isOpen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <Login />
            <button className='cls-btn' onClick={togglePopup}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
      {postOPen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <PostRide />
            <button className='cls-btn' onClick={togglePost}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
