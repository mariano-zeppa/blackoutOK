import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './App.css';
import ProgressBar from "react-progressbar-on-scroll";
import HomeVideo from './components/HomeVideo'
import ActualEvents from './components/ActualEvents'
import PastEvents from './components/PastEvents'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import InstaFeed from './components/InstaFeed'
import Header from './components/Header'
import ScrollDown from './components/ScrollDown'
import Cube from './components/Cube'
import Feed from "react-instagram-authless-feed"
import Carousel from "./components/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '@fortawesome/fontawesome-free/css/all.css'
export default class App extends Component {

  
  render () {


  return (<>

  <ProgressBar color="#fff"
    height={5}
    direction="right"
    position="top"
    gradient={true}
    gradientColor="#eee"/>
    
     {/* <Cube className="absolute top-0 left-0"/> */}
     <div className="relative">
     <Header  />
     <div/>
    <div className='bg-black'>  <HomeVideo /> </div>
    <div className='bg-black'>  <ActualEvents /> </div>
    <div className='bg-white'>  <Carousel /> </div>
    {/* <div className='bg-black'>  <Gallery/> </div> */}
    <div className='bg-black'>  <Footer/> </div>
    {/* <div className='bg-black'>  <InstaFeed /> </div> */}
    
    </div>
    </>
  )
}
}


