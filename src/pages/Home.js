import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import toast from 'react-hot-toast'

const Home = ({ location }) => {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState('')
  const [time, setTime] = useState('')

  const onTimeChange = time => {
    setTime(time)
  }

  const handleDateChange = event => {
    setSelectedDate(event.target.value)
  }

  useEffect(() => {
    const section = document.querySelector('#landing')
    var cardDown = document.querySelectorAll('.ico')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cardDown.forEach(element => {
            element.classList.add('animated')
          })
        }
      })
    })
    observer.observe(section)
  }, [])

  return (
    <div className='home'>
      <section id='landing' className='landing'>
        <div className='left'>
          <h2>CHOOSE YOUR GO-TO-UNIVERSITY PARTNER</h2>
          <form action=''>
            <select name='from' id='from'>
              <option value='' disabled>
                From
              </option>
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
              <option value='' disabled>
                To
              </option>

              {location &&
                location.map(l => (
                  <option key={l._id} value={l.locationName}>
                    {l.locationName}
                  </option>
                ))}
            </select>
            <div className='date-time'>
              <input type='date' id='date-inputs' onChange={handleDateChange} min={new Date().toISOString().split('T')[0]}  />

              <input
                type='time'
                placeholder='Time'
                value={time}
                onChange={onTimeChange}
              />
            </div>
            <div className='sub'>
              <select name='' id=''>
                <option value='' disabled>
                  Persons
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
              <input
                type='submit'
                value='Search'
                onClick={() => {
                  const from = document.getElementById('from').value
                  const to = document.getElementById('to').value
                  if (!from || !to || !selectedDate) {
                    toast.error('Please fill all the feilds')
                    navigate('/')
                    return
                  } else {
                    navigate(`/${from}/${to}/${selectedDate}`)
                  }
                }}
              />
            </div>
          </form>
         
        </div>
        <div className='right'>
          <div className='imgs'>
            <img className='ico building' src='/images/building.png' alt='' />
            <img className='ico bike' src='/images/bike.png' alt='' />
            <img className='ico road' src='/images/road.png' alt='' />
            <img className='ico tree' src='/images/tree.png' alt='' />
          </div>
        </div>
      </section>
      <section className='about'>
        <div className='top'>
          <div className='ab-card'>
            <div className='img'>
              <img className='money' src='/images/money.png' alt='' />
            </div>
            <p className='name'>MONEY SAVING</p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, dolorem expedita? Nam aliquid quam porro tempora?
              Dignissimos asperiores cumque sed.
            </p>
          </div>
          <div className='ab-card'>
            <div className='img'>
              <img src='/images/safety.png' alt='' />
            </div>
            <p className='name'>SAFETY</p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, dolorem expedita? Nam aliquid quam porro tempora?
              Dignissimos asperiores cumque sed.
            </p>
          </div>
          <div className='ab-card'>
            <div className='img'>
              <img src='/images/easy.png' alt='' />
            </div>
            <p className='name'>EASY ACCESS</p>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, dolorem expedita? Nam aliquid quam porro tempora?
              Dignissimos asperiores cumque sed.
            </p>
          </div>
        </div>
        <div className='bottom'>
          <h4>Stress Among Students due to exhaustion from transport</h4>
          <p>
            Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem aut
            perferendis nesciunt rem mollitia alias qui itaque odio est maiores
            consequatur! 33 magni fugit in quia eligendi et ratione
            necessitatibus.Lorem ipsum dolor sit amet. Ea omnis labore non illo
            dolorem aut perferendis nesciunt rem mollitia alias qui itaque odio
            est maiores consequatur! .
          </p>
          <a href=''>LEARN MORE.....</a>
        </div>
      </section>
      <section className='queries'>
        <h4>QUERIES</h4>
        <div className='qu'>
          <div className='q-box'>
            <p>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem ?{' '}
            </p>
            <div>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem
              ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem ipsum
              dolor sit amet. Ea omnis labore non illo dolorem .{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem ?{' '}
            </p>
            <div>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem
              ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem ipsum
              dolor sit amet. Ea omnis labore non illo dolorem .{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem ?{' '}
            </p>
            <div>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem
              ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem ipsum
              dolor sit amet. Ea omnis labore non illo dolorem .{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem ?{' '}
            </p>
            <div>
              Lorem ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem
              ipsum dolor sit amet. Ea omnis labore non illo dolorem Lorem ipsum
              dolor sit amet. Ea omnis labore non illo dolorem .{' '}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
