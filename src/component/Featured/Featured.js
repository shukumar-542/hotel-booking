import React from 'react'
import './Featured.css'
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/4.jpg'

const Featured = () => {

      return (
            <div className='feature'>
                  <div className="featuredimg">
                        <img src={img1} alt="2" className="images" />
                        <div className="featuretitle">
                              <h1>Dublin</h1>
                        </div>

                  </div>
                  <div className="featuredimg">
                        <img src={img2} alt="2" className="images" />
                        <div className="featuretitle">
                              <h1>reno</h1>
                        </div>
                  </div>

                  <div className="featuredimg">

                        <img src={img1} alt="2" className="images" />
                        <div className="featuretitle">
                              <h1>Austin</h1>
                        </div>
                  </div>

            </div>
      );
};

export default Featured;