import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <React.Fragment>

      <div>
        <p>Connect With Us</p>
        <a href="Instagram"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
        <a href="Twitter"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
        <a href="Youtube"><FontAwesomeIcon icon={["fab", "youtube"]}/></a>
        <a href="TikTok"><FontAwesomeIcon icon={["fab", "tiktok"]}/></a>
        <a href="Facebook"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
      </div>

      <div>
        <p className='font-extrabold'>Get the latest news sent right to you!</p>
        <form>
          <label name="Email"></label>
          <input id="Email" type="email" placeholder='Your Email'></input>
          <button>OK</button>
        </form>
      </div>

      <div>
        <p className='font-bold'>
          Need Help?
        </p>
        <ul>
          <li>
            Help Center
          </li>
          <li>
            Email Support
          </li>
          <li>
            Live Chat
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li><a href=''>About Us</a></li>
          <li><a href=''>Privacy Settings</a></li>
          <li><a href=''>Terms of Use</a></li>
        </ul>
      </div>

      <div>
        <p>©2023 Fitbuddy.com, All Rights reserved. Fitbuddy.com™</p>
      </div>

    </React.Fragment>
  )
}

export default Footer