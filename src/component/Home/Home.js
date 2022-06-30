import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Featured from '../Featured/Featured'
import './Home.css'
import PropartyList from '../PropartyList/PropartyList';
import FeaturedPro from '../FeaturedPro/FeaturedPro';
import MailList from '../MailList/MailList';
import Footer from '../Footer/Footer';

const Home = () => {

      return (
            <div>
                  <Navbar/>
                  <Header/>
                  <div className="homeContainer">
                  <Featured/>
                  <h1 className="homeTitle">Browse Proparty Type</h1>
                  <PropartyList/>
                   <h1 className="proparty">Guest Destination for A Trip</h1>
                  <FeaturedPro/>
                  
                  </div>
                  <MailList/>
                  <Footer/>
                 
            </div>
      );
};

export default Home;