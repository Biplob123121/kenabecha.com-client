import React from 'react'
import Footer from '../../shared/Footer'
import Category from './Category'
import HomePageHeader from './HomePageHeader'

function Home() {
  return (
    <section>
        <HomePageHeader />
        <Category />
        <Footer />
    </section>
  )
}

export default Home