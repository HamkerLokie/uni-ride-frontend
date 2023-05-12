import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const ResultCard = () => {
  return (
    <div className='rescard'>
      <div className='top'>
        <p>Time</p>
        <p>
          15 mins <FontAwesomeIcon icon={faClock} />
        </p>
      </div>
      <div className='middle'>
        <div className='driver'>
          <div className='img'>
            <img src='/icons/img.png' alt='' />
          </div>
          <div className='dri-det'>
            <p>Name</p>
            <p>Age</p>
            <p>Rating</p>
          </div>
        </div>
        <div className='details'>
          <p>From</p>
          <p>To</p>
          <p>ETA</p>
        </div>
      </div>
      <div className='down'>
        <div className='price'>66 $</div>
        <div className='chatbox'>
          <button>
            {' '}
            <FontAwesomeIcon icon={faComment} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
