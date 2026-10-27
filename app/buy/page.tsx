import React from 'react'
import NavBar from '../components/Navbar';

import BuyPage from '../components/BuyPage';
import Footer from '../components/Footer';
import BenefitsPage from '../components/BenefitsPage';

export default function page() {
  return (
    <div>
      <NavBar/>
      <BuyPage/>
      <BenefitsPage/>
      <Footer/>
    </div>
  )
}
