import React, { useEffect, useState } from 'react'
import ResultCard from '../Components/ResultCard'
import Chatbox from '../Components/Chatbox'
import token from '../token'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import toast from 'react-hot-toast'
const InsideRide = () => {
  const { rideId, driverID } = useParams()
  const [driver, setDriver] = useState(null)
  const [ride, setRide] = useState(null)

  useEffect(() => {
    validate()
    getRide()
  }, [])

  const validate = async () => {
    try {
      const response = await axios.get(`/getbyID/${driverID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('dri', response.data)
      setDriver(response.data.user)
      if (response.data.user) {
        toast.success(`Ab ${response.data.user.username} se baatein karo`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getRide = async () => {
    try {
      console.log('id', rideId)
      const response = await axios.get(`/rideByID/${rideId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('details of', response.data)
      setRide(response.data.rides)
    } catch (error) {
      console.log(error)
    }
  }

  const fixRide = async id => {
    try {
      const res = await axios.post(
        `/ride-finalised/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if ((res.data.message = 'Ride Finalised')) {
        toast.success('Ride Finalised')
        window.location.reload(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const cancelRide = async rideId => {
    try {
      const res = await axios.delete(`cancel-ride/${rideId}`)
      console.log(res.data)
    } catch (error) {}
  }
  return (
    <>
      {ride && (
        <div className='inside-ride'>
          <div className='left'>
            <div className='details'>
              <ResultCard details={ride} />
            </div>
            <br />
            {ride.isFinalised === true ? (
              <>
                {' '}
                <h2 disabled className='fix-btn'>
                  This Ride is Fixed
                </h2>
                <button
                  onClick={() => cancelRide(ride._id)}
                  className='fix-btn'
                >
                  Cancel Ride
                </button>
              </>
            ) : (
              <>
                {' '}
                <button onClick={() => fixRide(ride._id)} className='fix-btn'>
                  Fix Ride
                </button>
              </>
            )}
            <br />
            <div className='more'>
              <h4>More About Maverick</h4>
              <div className='mav-details'>
                <p>
                  Profile Status: <span>Verified</span>
                </p>
                <p>
                  Vehicle: <span>{ride.vehicle}</span>
                </p>
                <p>
                  Profession: <span>{'Student'}</span>
                </p>
              </div>
              <div className='reviews'>
                <h4>Reviews</h4>
                <div className='rev-cards'>
                  <div className='rev-card'>
                    <div className='img'>
                      <img src='/icons/img.png' alt='' />
                    </div>
                    <p style={{ fontWeight: '600' }} className='name'>
                      Lokendra
                    </p>
                    <br />
                    <p className='desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore veniam hic dolores itaque illo dignissimos dolorem
                      saepe optio minus sint?
                    </p>
                    <br />
                    <p className='rating'> * * * * *</p>
                  </div>

                  <div className='rev-card'>
                    <div className='img'>
                      <img src='/icons/img.png' alt='' />
                    </div>
                    <p style={{ fontWeight: '600' }} className='name'>
                      Lokendra
                    </p>
                    <br />
                    <p className='desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore veniam hic dolores itaque illo dignissimos dolorem
                      saepe optio minus sint?
                    </p>
                    <br />
                    <p className='rating'> * * * * *</p>
                  </div>
                  <div className='rev-card'>
                    <div className='img'>
                      <img src='/icons/img.png' alt='' />
                    </div>
                    <p style={{ fontWeight: '600' }} className='name'>
                      Lokendra
                    </p>
                    <br />
                    <p className='desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore veniam hic dolores itaque illo dignissimos dolorem
                      saepe optio minus sint?
                    </p>
                    <br />
                    <p className='rating'> * * * * *</p>
                  </div>

                  <div className='rev-card'>
                    <div className='img'>
                      <img src='/icons/img.png' alt='' />
                    </div>
                    <p style={{ fontWeight: '600' }} className='name'>
                      Lokendra
                    </p>
                    <br />
                    <p className='desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore veniam hic dolores itaque illo dignissimos dolorem
                      saepe optio minus sint?
                    </p>
                    <br />
                    <p className='rating'> * * * * *</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chatbox driver={driver} />
          </div>
        </div>
      )}
    </>
  )
}

export default InsideRide
