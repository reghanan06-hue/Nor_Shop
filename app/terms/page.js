import React from 'react'
import TermsConditions from '../components/TermsConditions';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import BenefitsPage from "../components/BenefitsPage"

export default function pageTerms() {
  return (
    <div>
        <NavBar/>
      <TermsConditions/>
  <BenefitsPage/>
      
        <Footer/>
    </div>
  )
}
