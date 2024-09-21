import React from 'react'
import { Criteria } from './components/Criteria'
import PromoVideo from './components/PromoVideo'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Criteria/>
      <PromoVideo/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page