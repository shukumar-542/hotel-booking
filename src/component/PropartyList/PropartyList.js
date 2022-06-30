import React from 'react';
import './PropartyList.css';
import hotel1 from '../../images/hot1.jpg'
import hotel2 from '../../images/hot3.jpg'
import hotel3 from '../../images/hot4.jpg'
import hotel4 from '../../images/hot3.jpg'
import hotel5 from '../../images/hot6.jpg'


const PropartyList = () => {
      return (
            <div className='propatryList'>
                  <div className="propartyItem">
                        <img src={hotel1} className='plistImage' alt="" />
                        <div className="propartTitle">
                        <h1>Hotels</h1>
                        </div>
                  </div>

                  <div className="propartyItem">
                        <img src={hotel2}className='plistImage'  alt="" />
                        <div className="propartTitle">
                        <h1>Appertment</h1>
                        </div>
                  </div>

                  <div className="propartyItem">
                        <img src={hotel3} className='plistImage' alt="" />
                        <div className="propartTitle">
                        <h1>Resort</h1>
                        </div>
                  </div>

                  <div className="propartyItem">
                        <img src={hotel4} className='plistImage' alt="" />
                        <div className="propartTitle">
                        <h1>Vilas</h1>
                        </div>
                  </div>

                  <div className="propartyItem">
                        <img src={hotel5} className='plistImage' alt="" />
                        <div className="propartTitle">
                        <h1>Resort</h1>
                        </div>
                  </div>
            </div>
      );
};

export default PropartyList;