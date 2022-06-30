import { faArrowLeftLong, faArrowRightLong, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Hotel.css'
import Footer from '../Footer/Footer'
import MailList from '../MailList/MailList'

const Hotel = () => {
    const photos = [
      {url : "https://i.ibb.co/VVkfBxJ/images-1.jpg"},
      {url : "https://i.ibb.co/w4ZRF2M/images.jpg" },
      {url : "https://i.ibb.co/VVkfBxJ/images-1.jpg"},
      {url : "https://i.ibb.co/w4ZRF2M/images.jpg" },
      {url : "https://i.ibb.co/VVkfBxJ/images-1.jpg"},
      {url : "https://i.ibb.co/w4ZRF2M/images.jpg" },

    ]
    const [sliderNumber, setSliderNumner] = useState(0)
    const [open, setOpen] = useState(false);

    const handleSlider = (i) =>{
      setSliderNumner(i);
      setOpen(true)
    }
    const handleArrow =(direction)=>{
      let newDirection;
      if(direction === "l"){
            newDirection = sliderNumber === 0 ? 5 : sliderNumber - 1;
      }else{
            newDirection = sliderNumber === 5 ? 0 : sliderNumber  + 1
      }
      setSliderNumner(newDirection)
    }
      return (
            <div>
                  <Navbar/>
                  <Header type="list"/>
                  <div className="hotelContainer">
                  {open && <div className="slider">
                  <FontAwesomeIcon icon={faCircleXmark} className="closex" onClick={()=>setOpen()} />
                        <FontAwesomeIcon icon={faArrowLeftLong} onClick={()=>handleArrow("l")} className='arrow' />
                        <div className="slideWrapper">
                              <img className='sliderImg' src={photos[sliderNumber].url} alt="" />
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} onClick={()=>handleArrow("r")} className='arrow' />
                  </div>}
                        <div className="hotelWrapper">
                              <button className="bookingBtn">Book Now</button>
                              <h1 className="hotelTitel">Grand Hotel</h1>
                              <div className="hotelAddress">
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                    <span>Shankar Dhanmondi dhaka</span>
                              </div>
                              <span className="hotelDistance"> Excelent form dhanmondi 500 meter </span>
                              <span className="hotelPricing">Now You Can book For Free Taxi Service</span>

                              <div className="hotelImage">
                              {photos.map((photo,i)=>(
                                    <div className="imgWrape">
                                          <img onClick={()=>handleSlider(i)} src={photo.url} alt="" className="hotelImages" />
                                    </div>
                              ))}
                                    
                                  
                              </div>

                              <div className="hotelDetails">
                                    <div className="hotelText">
                                          <h1 className="hotelTitel">Stay Here And Enjoy Your Tour</h1>
                                          <p className="hoteDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam 
                                          laudantium ipsum voluptatum tempora corporis fugiat, excepturi officia ducimus exercitationem.</p>
                                    </div>
                                    <div className="hoteldetailsPrice">
                                          <h1>Perfect for 9 Night</h1>
                                          <h2><b> $982</b> for 9 night</h2>
                                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio.</span>
                                          <button className="bookingbutton">Check For Booking</button>
                                    </div>
                              </div>
                        </div>
                        
                  </div>
                  <MailList/>
                        <Footer/>
            </div>
      );
};

export default Hotel;