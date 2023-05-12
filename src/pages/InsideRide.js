import React from 'react'
import ResultCard from '../Components/ResultCard'
import Chatbox from '../Components/Chatbox'

const InsideRide = () => {
  return (
    <div className='inside-ride'>
      <div className='left'>
        <div className='details'>
            <ResultCard/>
        </div>
        <br />
        <button className='fix-btn'>Fix Ride</button>
        <br />
        <div className='more'>
          <h4>More About Maverick</h4>
          <div className='mav-details'>
            <p>
              Profile Status: <span>Verified</span>
            </p>
            <p>
              Vehicle: <span>spelendor</span>
            </p>
            <p>
              Profession: <span>student</span>
            </p>
          </div>
          <div className="reviews">
            <h4>Reviews</h4>
            <div className="rev-cards">

                <div className="rev-card">
                    <div className="img">
                        <img src="/icons/img.png" alt="" />
                    </div>
                    <p style={{fontWeight:'600'}} className="name">Lokendra</p><br />
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam hic dolores itaque illo dignissimos dolorem saepe optio minus sint?</p><br />
                    <p className="rating"> * * * * *</p>
                </div>
                
                <div className="rev-card">
                    <div className="img">
                        <img src="/icons/img.png" alt="" />
                    </div>
                    <p style={{fontWeight:'600'}} className="name">Lokendra</p><br />
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam hic dolores itaque illo dignissimos dolorem saepe optio minus sint?</p><br />
                    <p className="rating"> * * * * *</p>
                </div>
                <div className="rev-card">
                    <div className="img">
                        <img src="/icons/img.png" alt="" />
                    </div>
                    <p style={{fontWeight:'600'}} className="name">Lokendra</p><br />
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam hic dolores itaque illo dignissimos dolorem saepe optio minus sint?</p><br />
                    <p className="rating"> * * * * *</p>
                </div>

                <div className="rev-card">
                    <div className="img">
                        <img src="/icons/img.png" alt="" />
                    </div>
                    <p style={{fontWeight:'600'}} className="name">Lokendra</p><br />
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam hic dolores itaque illo dignissimos dolorem saepe optio minus sint?</p><br />
                    <p className="rating"> * * * * *</p>
                </div>

            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <Chatbox/>
      </div>
    </div>
  )
}

export default InsideRide
