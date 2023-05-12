import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import ResultCard from '../Components/ResultCard'
import { useParams } from 'react-router-dom'

const Rides = ({ location }) => {
  const [rating, setRating] = useState(0)
  const { from, to, date } = useParams()
  const handleRatingChange = value => {
    setRating(value)
  }
  const onTimeChange = time => {
    setTime(time)
  }

  const handleDateChange = event => {
    setSelectedDate(event.target.value)
  }

  const [selectedDate, setSelectedDate] = useState(date)
  const [time, setTime] = useState('')

  return (
    <div className='see-rides'>
      <div className='search-bar'>
        <form action=''>
          <select name='from' id='from'>
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
          <select name='to' id='to'>
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
          <input type='date' value={selectedDate} id='date-inputs' onChange={handleDateChange} />

          <input
            type='time'
            placeholder='Time'
            value={time}
            onChange={onTimeChange}
          />
          <input type='submit' value='Search' />
        </form>
      </div>
      <div className='search-result '>
        <div className='left'>
          <h3>Filters</h3>

          <div className='timeslots'>
            <h4>Time Slots</h4>
            <div className='t-btn '>
              <button>01 PM - 02 PM</button>
              <button>01 PM - 02 PM</button>
              <button>01 PM - 02 PM</button>
              <button>01 PM - 02 PM</button>
              <button>01 PM - 02 PM</button>
              <button>01 PM - 02 PM</button>
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
            <button>New Filter</button>
            <button>New Filter</button>
            <button>New Filter</button>
            <button>New Filter</button>
            <button>New Filter</button>
          </div>
          <div className='results'>
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rides
