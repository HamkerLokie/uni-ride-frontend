import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import ResultCard from '../Components/ResultCard'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../axios'
import toast from 'react-hot-toast'
import token from '../token'

const Rides = ({ location }) => {
  const [rating, setRating] = useState(0)
  const { from, to, date } = useParams()
  const navigate = useNavigate()
  const [fr, setfr] = useState(from)
  const [t, sett] = useState(to)
  const [rides, setRides] = useState([])

  const handleRatingChange = value => {
    setRating(value)
  }
  const onTimeChange = time => {
    setTime(time)
  }

  const handleDateChange = event => {
    setSelectedDate(event.target.value)
  }
  const handleFrom = event => {
    console.log(event.target.value)
    setfr(event.target.value)
  }
  const handleto = event => {
    console.log('to', event.target.value)
    sett(event.target.value)
  }

  const [selectedDate, setSelectedDate] = useState(date)
  const [time, setTime] = useState('/mostrecent')

  useEffect(() => {
    if (!token) {
      toast.error('Please Login To Search')
      navigate('/')
    }
    fetchdata()
  }, [])

  const fetchdata = async e => {
    try {
      
      const response = await axios.get(`/search/${from}/${to}/${date}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setRides(response.data)
      toast.success(`Rides From ${fr} to ${t}`)
    } catch (error) {
      console.log('err', error.response.data)
    }
  }

  const fetchSerach = async e => {
    e.preventDefault()
    try {
      if (!token) {
        toast.error('Please Login To Search')
        navigate('/')
      }
      const response = await axios.get(`/search/${fr}/${t}/${selectedDate}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setRides(response.data)
      toast.success(`Rides From ${fr} to ${t}`)
    } catch (error) {
      console.log('err', error)
    }
  }

  const handleSearch = async limit => {
    try {
      const response = await axios.get(`/search-rides-by-time/${limit}`)
      console.log(response.data)
      // setResults(response.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }

  const handlefilter = async link => {
    try {
      const response = await axios.get(`${link}/${selectedDate}`)
      console.log(response.data)
      setRides(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <div className='see-rides'>
      <div className='search-bar'>
        <form action=''>
          <select name='from' id='from' onChange={handleFrom}>
            <option value=''>{from}</option>
            {location &&
              location.map(l => {
                return (
                  <option key={l._id} value={l.locationName}>
                    {l.locationName}
                  </option>
                )
              })}
          </select>
          <select name='to' id='to' onChange={handleto}>
            <option value=''>{to}</option>
            {location &&
              location.map(l => {
                return (
                  <option key={l._id} value={l.locationName}>
                    {l.locationName}
                  </option>
                )
              })}
          </select>
          <input
            type='date'
            value={selectedDate}
            id='date-inputs'
            onChange={handleDateChange}
          />

          <input
            type='time'
            placeholder='Time'
            value={time}
            onChange={onTimeChange}
          />
          <input type='submit' value='Search' onClick={fetchSerach} />
        </form>
      </div>
      <div className='search-result '>
        <div className='left'>
          <h3>Filters</h3>

          <div className='timeslots'>
            <h4>Time Slots</h4>
            <div className='t-btn '>
              <button onClick={() => handleSearch('9-10')}>
                09 AM - 10 AM
              </button>
              <button onClick={() => handleSearch('10-11')}>
                10 AM - 11 AM
              </button>
              <button onClick={() => handleSearch('11-12')}>
                11 AM - 12 PM
              </button>
              <button onClick={() => handleSearch('12-1')}>
                12 PM - 01 PM
              </button>
              <button onClick={() => handleSearch('1-2')}>01 PM - 02 PM</button>
              <button onClick={() => handleSearch('2-3')}>02 PM - 03 PM</button>
              <button onClick={() => handleSearch('3-4')}>03 PM - 04 PM</button>
              <button onClick={() => handleSearch('4-5')}>04 PM - 05 PM</button>
              <button onClick={() => handleSearch('5-6')}>05 PM - 06 PM</button>
              <button onClick={() => handleSearch('6-7')}>06 PM - 07 PM</button>
            </div>
          </div>

          <div className='charges'>
            <h4>Charges</h4>
            <form action=''>
              <input
                placeholder='max'
                type='number'
                value={'Max'}
                name=''
                id=' '
              />
              <input
                placeholder='min'
                type='number'
                value={'Max'}
                name=''
                id=' '
              />
            </form>
            <h6>Suggested: $ 40</h6>
          </div>
          <div className='rating'>
            <h4>Maverick Stars</h4>
            <FontAwesomeIcon
              icon={
                rating >= 1
                  ? rating >= 2
                    ? rating >= 3
                      ? rating >= 4
                        ? rating >= 5
                          ? faStar
                          : faStarHalfAlt
                        : faStarHalfAlt
                      : faStarHalfAlt
                    : faStarHalfAlt
                  : faStar
              }
              onClick={() => handleRatingChange(1)}
            />
            <FontAwesomeIcon
              icon={
                rating >= 2
                  ? rating >= 3
                    ? rating >= 4
                      ? rating >= 5
                        ? faStar
                        : faStarHalfAlt
                      : faStarHalfAlt
                    : faStarHalfAlt
                  : faStar
              }
              onClick={() => handleRatingChange(2)}
            />
            <FontAwesomeIcon
              icon={
                rating >= 3
                  ? rating >= 4
                    ? rating >= 5
                      ? faStar
                      : faStarHalfAlt
                    : faStarHalfAlt
                  : faStar
              }
              onClick={() => handleRatingChange(3)}
            />
            <FontAwesomeIcon
              icon={
                rating >= 4 ? (rating >= 5 ? faStar : faStarHalfAlt) : faStar
              }
              onClick={() => handleRatingChange(4)}
            />
            <FontAwesomeIcon
              icon={rating >= 5 ? faStar : faStarHalfAlt}
              onClick={() => handleRatingChange(5)}
            />
          </div>
        </div>

        <div className='right'>
          <div className='more-filters'>
            <button
              onClick={() => {
                handlefilter('/mostrecent')
              }}
            >
              Most Recent
            </button>
            <button onClick={() => handlefilter('/onlycar')}>Only Car</button>
            <button onClick={() => handlefilter('/onlybike')}>Only Bike</button>
            <button onClick={() => handlefilter('/lestthan2')}>
              Less than 2 Person
            </button>
            <button onClick={() => handlefilter('/notfinalised')}>
              Not Finalsed Yet
            </button>
          </div>
          <div className='results'>
            {rides
              .map(r => {
                return <ResultCard key={r._id} details={r} />
              })
              .reverse()}
            {rides.length === 0 && (
              <div>
                No Rides to {t} on {selectedDate}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rides
