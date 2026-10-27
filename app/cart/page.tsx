import React from 'react'
import NavBar from '../components/Navbar';

import Footer from '../components/Footer';
import BenefitsPage from '../components/BenefitsPage';
import CartPage from '../components/CartPage';

export default function page() {
  return (
    <div>
      <NavBar/>
      <CartPage/>
      <BenefitsPage/>
      <Footer/>
    </div>
  )
}
