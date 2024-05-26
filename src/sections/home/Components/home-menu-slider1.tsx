import Slider from 'react-slick';
import { useRef } from 'react';
import { m } from 'framer-motion';
import React, { useState } from 'react';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Card, Container, Typography, Stack, Grid, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// components
import Image from '../../../components/image';
import useSettings from '../../../hooks/useSettings';
import Iconify from '../../../components/iconify';

import { MotionViewport, varFade } from '../../../components/animate';
import { useResponsive } from '../../../hooks/use-responsive'
import { Box } from '@mui/system';

const CARDS = [
    {
      title: 'Phone1',
      description: 'Free case, Free Headset.',
      prize: '$67.00',
      rating: '5.0'
    },
    {
      title: 'Phone2',
      description: 'Free case, Free Headset.',
      prize: '$88.00',
      rating: '5.0'
    },
    {
      title: 'Phone3',
      description: 'Free case, Free Headset.',
      prize: '$40.00',
      rating: '5.0'
    },
    {
      title: 'Phone4',
      description: 'Free case, Free Headset.',
      prize: '$0.00',
      rating: '5.0'
    },
    {
      title: 'Phone5',
      description: 'Free case, Free Headset.',
      prize: '$0.00',
      rating: '5.0'
    },
    {
      title: 'Phone6',
      description: 'Free case, Free Headset.',
      prize: '$0.00',
      rating: '5.0'
    },
];

const SliderStyle = styled(Slider)(({ theme }) => ({
    '& .slick-track': {
      display: 'flex',
      gap: theme.spacing(1),
      '& .slick-slide': {
        display: 'flex',
        height: '500px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '150px',
      },
    },
    '& .slick-dots li button:before': {
      color: theme.palette.primary.dark,
      fontSize: 12,
      marginTop: theme.spacing(2),
    },
    '& .slick-dots li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('md')]: {
      '& .slick-track': {
        '& .slick-slide': {
          alignItems: 'center',
        },
      },
    },
}));

export default function HomeSlider1() {
    const theme = useTheme();
    const { themeStretch } = useSettings();
    const sliderRef = useRef<Slider>(null);
    const isDesktop = useResponsive('up', 'sm');
    const [activeButton, setActiveButton] = useState('prev');
    const isLight = theme.palette.mode === 'light';

    const next = () => {
        sliderRef.current.slickNext();
        setActiveButton('next');
    };

    const previous = () => {
        sliderRef.current.slickPrev();
        setActiveButton('prev');
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseOnHover: true,
    
        responsive: [
          {
            breakpoint: theme.breakpoints.values.md,
            settings:   {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: theme.breakpoints.values.sm,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

    return (
        <Grid container component={MotionViewport}>
            <Box sx={{ width: '100%', pt: 2 }}>
                <SliderStyle {...settings} ref={sliderRef}>
                    {CARDS.map((card, index)  => (
                        <m.div variants={varFade().inUp} key={card.title}>
                            {isDesktop ? (
                              <>
                                <Card sx={{ height: '32vh', width: '400px', borderRadius: '50px', position: 'relative', overflow: 'visible' }}>
                                  <img 
                                      src="assets/shopping-cart/pngwing.com (3).png" 
                                      alt="" 
                                      style={{
                                          position: 'relative', 
                                          width: '30%', 
                                          height: '250px', 
                                          transform: 'translateY(-120px) translateX(85px)',
                                      }}
                                  />
                                  <Stack direction="row" spacing={5}>
                                      <Stack direction="column" alignItems="left" sx={{ p: 4 }}>
                                          <IconButton sx={{ color: isLight ? 'primary.dark' : 'primary.main', mt: '-180px', position: 'absolute', left: '25px' }}>
                                            <FavoriteBorderIcon/>
                                          </IconButton>
                                          <Stack direction='column' sx={{ mt: '-120px' }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.main, textAlign: 'left' }}
                                            >
                                                {card.title}
                                            </Typography>
                                          <Typography
                                              variant="body2"
                                              sx={{
                                                  textAlign: 'left',
                                              }}
                                          >
                                              {card.description}
                                          </Typography>
                                          </Stack>
                                          <Button 
                                              size="small"
                                              variant='contained'
                                              sx={{
                                                  borderTopRightRadius: '100px',
                                                  borderTopLeftRadius: '100px',
                                                  borderBottomLeftRadius: '100px',
                                                  bgcolor: 'primary.main',
                                                  width: '80px',
                                                  height: '50px',
                                                  alignContent: 'right',
                                                  marginTop: '30px',
                                              }}
                                          >
                                              <Iconify
                                                  icon="fluent:cart-16-regular"
                                                  width={30}
                                                  height={30}
                                              />
                                          </Button>
                                      </Stack>
                                      <Stack direction="column" alignItems="right" >
                                        <Stack direction='row'>
                                          <Typography
                                            variant="h6"
                                            sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.main, textAlign: 'left', transform: 'translateY(-215px)'}}
                                          >
                                            {card.rating}
                                          </Typography>
                                          <Iconify
                                            icon="material-symbols-light:star"
                                            width={30}
                                            height={30}
                                            color='yellow'
                                            sx={{ transform: 'translateY(-219px)', alignItems: 'center' }}
                                          />
                                        </Stack>
                                        <Typography
                                          variant="h6"
                                          sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.main, textAlign: 'left', position: 'absolute'}}
                                        >
                                          {card.prize}
                                        </Typography>
                                      </Stack>
                                  </Stack>
                                </Card>
                              </>
                            ) : (
                              <>
                                <Card sx={{ height: '38vh', width: '100%', borderRadius: '50px', position: 'relative', overflow: 'visible' }}>
                                  <img 
                                      src="assets/shopping-cart/pngwing.com (3).png" 
                                      alt="" 
                                      style={{
                                          position: 'relative', 
                                          width: '40%', 
                                          height: '250px', 
                                          transform: 'translateY(-120px) translateX(50px)',
                                      }}
                                  />
                                  <Stack direction="row" spacing={7}>
                                      <Stack direction="column" alignItems="left" sx={{ p: 4 }}>
                                          <IconButton sx={{ color: isLight ? 'primary.dark' : 'primary.main', mt: '-180px', position: 'absolute', left: '25px' }}>
                                            <FavoriteBorderIcon/>
                                          </IconButton>
                                          <Stack direction='column' sx={{ mt: '-120px' }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.main, textAlign: 'left' }}
                                            >
                                                {card.title}
                                            </Typography>
                                          <Typography
                                              variant="body2"
                                              sx={{
                                                  textAlign: 'left',
                                              }}
                                          >
                                              {card.description}
                                          </Typography>
                                          </Stack>
                                          <Button 
                                              size="small"
                                              variant='contained'
                                              sx={{
                                                  borderTopRightRadius: '100px',
                                                  borderTopLeftRadius: '100px',
                                                  borderBottomLeftRadius: '100px',
                                                  bgcolor: 'primary.main',
                                                  width: '80px',
                                                  height: '50px',
                                                  alignContent: 'right',
                                                  marginTop: '30px',
                                              }}
                                          >
                                              <Iconify
                                                  icon="fluent:cart-16-regular"
                                                  width={30}
                                                  height={30}
                                              />
                                          </Button>
                                      </Stack>
                                      <Stack direction="column" alignItems="right" >
                                        <Stack direction='row'>
                                          <Typography
                                            variant="h6"
                                            sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.main, textAlign: 'left', transform: 'translateY(-215px) translateX(-40px)'}}
                                          >
                                            {card.rating}
                                          </Typography>
                                          <Iconify
                                            icon="material-symbols-light:star"
                                            width={30}
                                            height={30}
                                            color='yellow'
                                            sx={{ transform: 'translateY(-219px) translateX(-43px)', alignItems: 'center' }}
                                          />
                                        </Stack>
                                        <Typography
                                          variant="h6"
                                          sx={{ color: isLight ? theme.palette.primary.dark : theme.palette.primary.main, textAlign: 'left', position: 'absolute', transform: 'translateX(-60px)' }}
                                        >
                                          {card.prize}
                                        </Typography>
                                      </Stack>
                                  </Stack>
                                </Card>
                              </>
                            )}
                        </m.div>
                    ))}
                </SliderStyle>
                <Stack direction='row' id='HomeMenu2' spacing={2} sx={{ paddingLeft: '20px' }}>
                    <Button 
                        variant='contained' 
                        onClick={previous} 
                        sx={{ 
                            borderTopRightRadius: '30px',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '30px',
                            borderBottomRightRadius: 0,
                            bgcolor: activeButton === 'prev' ? 'white' : 'primary.main',
                            color: activeButton === 'prev' ? 'black' : 'default',
                            width: '70px',
                            height: '70px',
                            alignContent: 'right',
                            marginTop: '50px' 
                        }}
                    >
                        <Iconify
                            icon="ooui:arrow-previous-ltr"
                            width={30}
                            height={30}
                        />
                    </Button>
                    <Button 
                        variant='contained' 
                        onClick={next} 
                        sx={{ 
                            borderTopRightRadius: '10px',
                            borderTopLeftRadius: '30px',
                            borderBottomRightRadius: '30px',
                            borderBottomLeftRadius: 0,
                            bgcolor: activeButton === 'next' ? 'white' : 'primary.main',
                            color: activeButton === 'next' ? 'black' : 'default',
                            width: '70px',
                            height: '70px',
                            alignContent: 'right',
                            marginTop: '50px' 
                        }}
                    >
                        <Iconify
                            icon="ooui:arrow-previous-rtl"
                            width={30}
                            height={30}
                        />
                    </Button>
                </Stack>
            </Box>
        </Grid>
    )
}