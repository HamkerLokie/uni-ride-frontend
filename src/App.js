import { Rides, InsideRides, Home } from './pages'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { Toaster } from 'react-hot-toast'
import axios from './axios'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import PostRide from './popups/PostRide'
import SeeRides from './pages/SeeRides'

function App () {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [location, setLocation] = useState([])

  const [content, setContent] = useState(null)

  const token = localStorage.getItem('access_token')
  const admintoken = localStorage.getItem('admin')
  useEffect(() => {
    async function getUser () {
      if (!token && !admintoken) {
        return
      }

      const utoken = admintoken || token

      try {
        const response = await axios.get('/validate', {
          headers: {
            Authorization: `Bearer ${utoken}`
          }
        })
        setUser(response.data.validateOne.username)
        setRole(response.data.validateOne.role)
      } catch (error) {
        console.log(error)
      }
    }

    getUser()
    fetchLocations()
  }, [])

  const fetchLocations = async () => {
    try {
      const response = await axios.get('/get-location')
      setLocation(response.data.locations)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#FFFA67'
            },
            style: {
              background: '#F36368',
              color: 'white'
            },
            iconTheme: {
              primary: '#FFFA67',
              secondary: 'black'
            }
          }
        }}
      ></Toaster>
      <Router>
        <Navbar user={user} role={role} />
        <main>
          <Routes>
            <Route path='' element={<Home location={location}/>} />
            <Route path='allrides' element={<SeeRides />} />
            <Route
              path=':from/:to/:date'
              element={<Rides location={location} />}
            />
            {token && (
              <Route path='to-chat/:rideId/:driverID' element={<InsideRides />} />
            )}
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
