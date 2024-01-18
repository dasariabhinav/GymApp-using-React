import React from 'react'
import {Box,Button,Stack, Typography} from '@mui/material'
import Hero from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}}>
      <Typography color="#FF2625"
      fontWeight="600" fontSize="26px">
        Befit Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}
      mb="23px" mt="30px">
        Hustle for<br/> the Muscle!!!
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective workouts
      </Typography>
      <Typography
      fontWeight={600}
      color="#ff2625"
      sx={{
        opacity:0.1,
        display:{lg:"block",xs:"none"}}}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <Button  href="#exercises"variant='contained' color="error" sx={{backgroundColor:"#ff2625",padding:"10px"}}>Explore various workouts</Button>
      <img  className="hero-banner-img" src={Hero} alt="banner" />
    </Box>
  )
}

export default HeroBanner