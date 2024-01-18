import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';




const HorizontalScrollbar = ({ data, setBodyPart, bodyPart,isBodyParts }) => (
     
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         {data.map((item) => (
        <SwiperSlide>
          <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts?<BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
          :<ExerciseCard exercise={item}/>}
        </Box>
        </SwiperSlide>
      ))}
      </Swiper>
    
   
);

export default HorizontalScrollbar;