import React from 'react';
import './FeaturedPro.css';
import his from '../../images/his.jpg'
import his1 from '../../images/his2.jpg'
import his2 from '../../images/his3.jpg'
import his3 from '../../images/his4.jpg'
import his4 from '../../images/his5.jpg'

const FeaturedPro = () => {
      return (
            <div className="FProparty">
                  <div className="propartyItem">
                        <img src={his} className="image" alt="bb" />
                        <h2>Taj Mohol , India</h2>
                        <span>clothet -shopping -suffering </span><br />
                        <span>Starting Form <b>BDT : 4380</b></span>
                  </div>


                  <div className="propartyItem">
                        <img src={his1} className="image" alt="bb" />
                        <h2>Taj Mohol , India</h2>
                        <span>clothet -shopping -suffering </span><br />
                        <span>Starting Form <b>BDT : 4380</b></span>
                  </div>


                  {/* <div className="propartyItem">
                        <img src={his3} alt="bb" />
                        <h2>Taj Mohol , India</h2>
                        <span>clothet -shopping -suffering </span><br />
                        <span>Starting Form <b>BDT : 4380</b></span>
                  </div> */}

                  <div className="propartyItem">
                        <img src={his4} className="image" alt="bb" />
                        <h2>Taj Mohol , India</h2>
                        <span>clothet -shopping -suffering </span><br />
                        <span>Starting Form <b>BDT : 4380</b></span>
                  </div>
            </div>
      );
};

export default FeaturedPro;