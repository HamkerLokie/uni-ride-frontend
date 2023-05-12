import React from 'react'

const Chatbox = () => {
  return (
    <div className='chatcard'>
      <div className='chat-top'>Maverick Name</div>
      <div className='chat-mid'>
        <p className='msg from'>
          <div className='img'>
            <img src='/icons/img.png' alt='' />
          </div>{' '}
          <div className='text-from text'>NHIi, this side lokie</div>
        </p>
        <p className='msg to'>
          <div className='text-to text'>NHIi, this side lokie</div>
          <div className='img'>
            <img src='/icons/img.png' alt='' />
          </div>
        </p>
        <p className='msg from'>
          <div className='img'>
            <img src='/icons/img.png' alt='' />
          </div>{' '}
          <div className='text-from text'>NHIi, this side lokie</div>
        </p>
      </div>
      <div className='chat-down'>
        <form action=''>
          <input type='text' placeholder='Send Message..' />
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chatbox
