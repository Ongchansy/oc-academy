import React from 'react'
import CoursePage from './module/course/CoursePage'
import Categories from './module/components/Categories'
import Features from './module/components/Features' 
import Hero from '../layoutComponents/Hero'


const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <CoursePage />
      <Features />
    </>
  )
}



export default HomePage