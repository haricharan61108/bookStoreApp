import React from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    //filtering free books using a filter
    const filterData=list.filter((data)=> data.category==="Free")
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    
  return (
      <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div>
            <h1 className='font-bold text-2xl'>Free Offered Courses</h1>
            <p className='pt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            </div>
        <div className="slider-container"> 
      <Slider {...settings}>
        {filterData.map((item) => (
          <div key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </Slider>
    </div>
        </div>
      </>
    
  )
}

export default Freebook
