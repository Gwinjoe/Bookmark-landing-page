import { useState } from 'react'
import Header from "@sections/Header.jsx";
import Hero from "@sections/Hero.jsx";
import Features from "@sections/Features.jsx";
import FeaturesTab from "@sections/FeaturesTab.jsx"
import Download from "@sections/Download.jsx"
import Faq from "@sections/Faq.jsx"
import Contact from "@sections/Contact.jsx"
import Footer from "@sections/Footer.jsx"

function App() {
  return (
    <main className="w-screen max-sm:text-md max-sm:leading-6 border-2 border-red-400 max-w-[1440px] font-rubik">
      <Header/> 
      <section className="padding">
      <Hero/>
    </section>
    <section className="padding">
      <Features/>
      <FeaturesTab/>
    </section>
    <section className="padding-x padding">
      <Download/>
    </section>
    <section className="padding-x padding">
      <Faq/>
    </section>
    <section className="pt-12">
      <Contact/>
    </section>
    <section className="">
      <Footer/>
    </section>
    </main>
  )
}

export default App
