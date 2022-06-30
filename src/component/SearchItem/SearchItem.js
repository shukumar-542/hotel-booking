import React from 'react';
import './SearchItem.css';
import imga from '../../images/hot3.jpg'

const SearchItem = () => {
      return (
            <div className="sitem">
                <img className="desimg" src={imga} alt="" /> 
                <div className="sdes">
                  <h1 className='sTitle'>Tower Street Apertment</h1>
                  <span className="freeapert">Free Airport Taxi</span>
                  <span className='sdistance'>500 meter From Center</span>

                  <span className="sSubtitle">Sudio Appertment for Customer</span>
                  <span className="sCancelation">You Can Cancelation Any Time so you can book now!!</span>
                </div>
                <div className="sdetails">
                  <div className="siRating">
                        <span className="siText">Excelent</span>
                        <button className="sibtn">8.9</button>
                  </div>
                  <div className="sitaxt">
                        <span className='taxtvalue'>$123</span>
                        <span className='includeTaxt'>Includes Taxts And Fees</span>
                        <button>See Avaiabality</button>
                  </div>
                </div>
            </div>
      );
};

export default SearchItem;