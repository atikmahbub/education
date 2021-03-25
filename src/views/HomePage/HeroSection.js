import React from 'react'
import HERO1 from '../../utils/assets/images/hero1.png'
import ContainerButton from '../../components/Button/ContainedButton'
import { Button } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <div className="row hero-section">
            <div className="col-md-6 hero-left">
                <div className="h1 hero-title">
                    quality online math help to transform your future
                </div>
                <div className="text-left hero-desc">
                    We offer tutoring in academic math subjects, competition math, and standardized math tests for students from elementary school through college. We also provide online competition hosting services for schools and other institutions.
                </div>
                <div className="hero-button">
                    <ContainerButton text="tutoring"/>
                    <Button size="lg" variant="outline-secondary"  style={{width : "100%"}}>hosting</Button>
                </div>
            </div>
            <div className="col-md-6 hero-right p-5">
                <img src={HERO1} alt="hero"/>
            </div>
        </div>
    )
}

export default HeroSection
