"use client"

import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CalendarSlider = () => {
  const numberOfDays = 100;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sliderIndex, setSliderIndex] = useState(numberOfDays);

  const generateDates = () => {
    const today = new Date();
    const dates = [];

    for (let i = -numberOfDays; i <= numberOfDays; i++) {
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);
      dates.push(currentDate);
    }

    return dates;
  };

  const [dates] = useState(generateDates());

  const sliderSettings = {
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: sliderIndex,
    afterChange: (current) => setSliderIndex(current)
  };

  return (
    <div className='py-2 px-2 border-[#E4E4E4] border-b-[1px] border-t-[1px]'>
      <Slider {...sliderSettings}>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`calendar-date ${new Date(date).toDateString() === selectedDate.toDateString() ? 'calendar-active' : ''
              }`}
            onClick={() => setSelectedDate(new Date(date))}
          >
            <div className='text-center'>{date.toLocaleDateString(undefined, { weekday: 'short' })}</div>
            <div className='text-center text-[12px]'>{date.toLocaleDateString(undefined, { day: 'numeric' })}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CalendarSlider;
