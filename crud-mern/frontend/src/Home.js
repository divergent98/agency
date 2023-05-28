import React from 'react'

import { FeaturedProducts } from './FeaturedProducts'
import { Footer } from './Footer'
import { MyCarousel } from './MyCarousel'


import { Navigation } from './Navigation'
import { RegularProducts } from './RegularProduct'
import { Services } from './Services'
import { Promotion } from './Promotion'

export const Home = () => {
  return (
    <>
    <Navigation/>
    <MyCarousel/>
    <FeaturedProducts/>
    <Promotion/> 
    <Services/>
   
    {/* <RegularProducts/>  */}
  
    </>
  )
}
