import React from 'react'
import {BeginButton, LoginButton, Footer} from '../components';

const Home = () => {
  return (
    <React.Fragment>

      <nav>
        <p>Already a member?</p>
        <LoginButton />
      </nav>

      <h1 className='font-extrabold'>
        Welcome to FitBuddy!
      </h1>


      <BeginButton />

      <Footer />

   </React.Fragment>
  )
}

export default Home