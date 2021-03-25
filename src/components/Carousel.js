import React,{useState} from 'react'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

const ReusableCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">
            <div className="carousel-button">
                <span><MdKeyboardArrowLeft color="white" fontSize="24px" /></span>
                <span><MdKeyboardArrowRight color="white" fontSize="24px"/></span>
            </div>
            <div>
                <div className="font-weight-bold text-center mb-3 mt-3">Jarrod Perez, UTRGV ‘23</div>
                <div className="text-center">“Tutoring by Juan and Andrew was always fun. They would try to find your weaknesses and find ways that best fitted you to solve problems.”</div>
            </div>
        </div>
    );
  }

export default ReusableCarousel;