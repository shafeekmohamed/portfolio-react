import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/client1.jpg'
import AVTR2 from '../../assets/client2.jpg'
import AVTR3 from '../../assets/client3.avif'
import AVTR4 from '../../assets/client4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: AVTR1,
  name: 'Wills Mark',
  review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aliquid reprehenderit perspiciatis tenetur enim rerum aliquam explicabo harum veritatis optio maiores, quibusdam architecto vero reiciendis asperiores ut dolore nobis animi?'
},
  {
  avatar: AVTR2,
  name: 'Peter Park',
  review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aliquid reprehenderit perspiciatis tenetur enim rerum aliquam explicabo harum veritatis optio maiores, quibusdam architecto vero reiciendis asperiores ut dolore nobis animi?'
},
  {
  avatar: AVTR3,
  name: 'Mark Wood',
  review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aliquid reprehenderit perspiciatis tenetur enim rerum aliquam explicabo harum veritatis optio maiores, quibusdam architecto vero reiciendis asperiores ut dolore nobis animi?'
},
  {
  avatar: AVTR4,
  name: 'Steve Bell',
  review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aliquid reprehenderit perspiciatis tenetur enim rerum aliquam explicabo harum veritatis optio maiores, quibusdam architecto vero reiciendis asperiores ut dolore nobis animi?'
},
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide  key={index} className='testimonial'>
              <div className="clients_avatar">
              <img src={avatar} alt="client one" />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
            </SwiperSlide >
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial