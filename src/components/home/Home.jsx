import React from 'react'
import Banner from './_child/Banner'
import Description from './_child/Description'
import SmallFeatures from './_child/SmallFeatures'
import TabbedDescription from './_child/TabbedDescription'
import Features from './_child/Features'
import Screenshots from './_child/Screenshots'
import Testimonials from './_child/Testimonials'
import Statistics from './_child/Statistics'
import Download from './_child/Download'

function Home() {
  return (
    <>
      <Banner />
      <SmallFeatures />
      <Description />
      <TabbedDescription />
      <Features />
      <Screenshots />
      <Testimonials />
      <Statistics />
      <Download />
    </>
  )
}

export default Home