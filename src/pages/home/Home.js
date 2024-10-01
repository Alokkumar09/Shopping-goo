import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const dispatch=useDispatch();
  const cartItem=useSelector((state)=>state.cart)
  console.log(cartItem)

  const addToCart=()=>{
    dispatch(addToCart('shirt'))
  }
  const deleteFromCart=()=>{
    dispatch(deleteFromCart('shirt'))
  }
  
  return (
    <Layout>
      <div className='flex gap-5 justify-center'>
        <button className='bg-green-400' onClick={()=>addToCart()}>add</button>
        <button className='btn-primary' onClick={()=>deleteFromCart()}>delete</button>
      </div>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
        
    </Layout>
  )
}

export default Home