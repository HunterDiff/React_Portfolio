import React from 'react'
import './Testi.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'


import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = 
[
  {
    avatar:AVTR1,
    name:'Aleria',
    review:'Alleria Windrunner was the ranger-captain of Silvermoon who led her rangers under the Alliance of Lordaeron during the Second War. She was also the head scout of the Alliance Expedition to Draenor. Alleria and her lover Turalyon disappeared after the planet was torn apart and have not been heard from for many years.'

  },
  {
    avatar:AVTR2,
    name:'Sylvaans',
    review:'Sylvanas Windrunner is a fictional character who appears in the Warcraft series of video games by Blizzard Entertainment. Originally introduced in Warcraft III: Reign of Chaos, she received a dramatic redesign in World of Warcraft: Wrath of the Lich King, followed by a minor redesign in World of Warcraft: Legion.'
  },
  {
    avatar:AVTR3,
    name:'Alextraza',
    review:'Alexstrasza the Life-Binder, Aspect of the red dragonflight, is the guardian of all life in the world of Azeroth. She was one of five great dragons chosen by the titans to be empowered with a portion of the Pantheons power and rule over her flight while they watched over Azeroth and its inhabitants.'
  },
  {
    avatar:AVTR4,
    name:'Chromi',
    review:'Chronormu is a bronze dragon often involved with mortal affairs. As one of the most important members[4] of the bronze dragonflight, she seeks to maintain and restore various timelines of importance in Azeroths recent history. Chronormus preferred guise when dealing with mortals, her visage, is Chromie, a charismatic female gnome.'
  }
]





const Testi = () => {
  return (
    <section id='Monial'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {
          data.map(({avatar, name, review}, index)=>
          {
            return(
              
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>  
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testi