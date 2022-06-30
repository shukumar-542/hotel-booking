import React from 'react';
import './MailList.css'

const MailList = () => {
      return (
            <div className="mailList">
                <h1>Save Time , Save Money !</h1>
                <span>Sign up and we'll send the best deals to you</span>
                <div className="inputField">
                  <input type="text" placeholder="Enter Email" />
                  <button className="subscribedbtn">Subscribed</button>
                </div>
            </div>
      );
};

export default MailList;