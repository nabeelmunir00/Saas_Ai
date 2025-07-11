import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import ChoosePlan from '../components/ChoosePlan'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AiTools />
            <Testimonial />
            <ChoosePlan />
            <Footer />
        </div>
    )
}

export default Home
