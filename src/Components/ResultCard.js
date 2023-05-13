import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const ResultCard = ({ details }) => {
  console.log('details', details)
  const navigate = useNavigate()

  const handleChat = (rideId, driverId) => {
    navigate(`/to-chat/${rideId}/${driverId}`)
  }
  const settime = date => {
    const createdAt = new Date(date)
    const now = new Date()
    const diff = now.getTime() - createdAt.getTime()

    let timeDiff
    if (diff < 60000) {
      timeDiff = 'just now'
    } else if (diff < 3600000) {
      timeDiff = Math.floor(diff / 60000) + ' minutes ago'
    } else {
      timeDiff = Math.floor(diff / 3600000) + ' hours ago'
    }

    return timeDiff
  }

  return (
    <>
      {details && (
        <a
          onClick={() => handleChat(details._id, details.driver._id)}
          className='rescard'
        >
          <div className='top'>
            <p>
              Ride on <span>{details.date}</span> <br /> Ride at{' '}
              <span>{details.time}</span>
            </p>
            <p>
              Posted: {settime(details.createdAt)}{' '}
              <FontAwesomeIcon icon={faClock} />
            </p>
          </div>
          <div className='middle'>
            <div className='driver'>
              <div className='img'>
                <img src='/icons/img.png' alt='' />
              </div>
              <div className='dri-det'>
                <p>{details.driver && details.driver.username}</p>
                <p>
                  {details.vehicleType} : {details.vehicle}
                </p>
                <p>4+</p>
              </div>
            </div>
            <div className='details'>
              <p>{details.from}</p>
              <p>{details.to}</p>
              <p style={{ fontSize: '.7em', fontWeight: '600', color: 'red' }}>
                {details.isFinalised ? (
                  <> Ride is Finalised </>
                ) : (
                  <>Not Finalised Yet</>
                )}
              </p>
              <p>Exp time - 10 mins</p>
            </div>
          </div>
          <div className='down'>
            <div className='price'>Rs. {details.price}</div>
            <div className='chatbox'>
              <button
                onClick={() => handleChat(details._id, details.driver._id)}
              >
                {' '}
                <FontAwesomeIcon className='chat-icon' icon={faComment} />
              </button>
            </div>
          </div>
        </a>
      )}
    </>
  )
}

export default ResultCard
