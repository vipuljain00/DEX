import React, {useState, useContext, useEffect} from 'react'
import { HeroSection } from '@/Components';
const Home = () => {
  return (
    <div>
      <HeroSection accounts="hey" tokenData="Data" />
    </div>
  )
}

export default Home;
