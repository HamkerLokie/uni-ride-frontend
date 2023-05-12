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
                <div class='btn-group'>
                  <button
                    type='button'
                    class='btn btn-danger dropdown-toggle'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {user}
                  </button>

                  <div class='dropdown-menu dpm'>
                    <a class='dropdown-item' href='/myprofile'>
                      My Appointments
                    </a>

                    <div class='dropdown-divider'></div>

                    <button
                      onClick={handleLogout}
                      class='dropdown-item'
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
              <div class='btn-group'>
                <button
                  type='button'
                  class='btn btn-danger dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {user}
                </button>
                <button onClick={togglePost} className='pos nav-btn'>
                  Post a Ride
                </button>
                <div class='dropdown-menu dpm'>
                  <a class='dropdown-item' href='/adminpanel'>
                    View Appointments
                  </a>

                  <div class='dropdown-divider'></div>
                  <button onClick={handleLogout} class='dropdown-item' href='#'>
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
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
      {postOPen && (
        <div className='pop-overlay'>
          <div className='popup'>
            <PostRide />
            <button className='cls-btn' onClick={togglePost}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
