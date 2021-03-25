import React from 'react'
import ReusableCarousel from '../../components/Carousel'

const Testimonials = () => {
    return (
        <div className="container testimonial">
            <div className="p-4 testimonial-title h1 text-center font-weight-bold display-4">
                what <span>students say</span> about our tutoring
            </div>
            <div className="carousel-container">
                <ReusableCarousel/>
            </div>
        </div>
    )
}

export default Testimonials
