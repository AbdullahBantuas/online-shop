import Slider from 'react-slick';
import { useRef } from 'react';
import { m } from 'framer-motion';

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
      title: 'Shoes',
      prize: '$50.00',
      src: 'assets/shopping-cart/pngwing.com (2).png'
    },
    {
      title: 'Shoes',
      prize: '$250.00',
      src: 'assets/shopping-cart/pngwing.com (haha).png'
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
        paddingTop: 1
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

export default function HomeWhoSlider() {
    const theme = useTheme();
    const { themeStretch } = useSettings();

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseOnHover: true,
    
        responsive: [
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
                <SliderStyle {...settings}>
                    {CARDS.map((card, index)  => (
                        <m.div variants={varFade().inUp} key={card.title}>
                            <Card sx={{ height: '34.5vh', width: '100%', borderRadius: '50px', position: 'relative', overflow: 'visible' }}>
                                <Image 
                                    src={card.src}
                                    alt="" 
                                    style={{
                                    position: 'relative', 
                                    width: '80%', 
                                    height: 'auto',
                                    transform: 'translateY(-130px)',
                                    }}
                                />
                                <Stack direction="row" spacing={10}>
                                <Stack direction="column" alignItems="left" sx={{ pl: 4, pt: 2 }}>
                                    <Typography
                                    variant="h6"
                                    sx={{ color: theme.palette.primary.main, textAlign: 'left', mt: '-150px' }}
                                    >
                                    {card.title}
                                    </Typography>
                                    <Typography
                                    variant="h6"
                                    sx={{ color: theme.palette.primary.main, textAlign: 'left', paddingTop: '10px'}}
                                    >
                                    {card.prize}
                                    </Typography>
                                </Stack>
                                <Stack direction="column" alignItems="right" >
                                    <IconButton 
                                    // variant='contained'
                                    sx={{
                                        bgcolor: '#f6f6f6',
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        padding: 0,
                                        transform: 'translateY(-145px) translateX(101px)'
                                    }}
                                    >
                                    <Iconify
                                        icon='ph:heart'
                                        height={25}
                                        width={25}
                                        color='primary.dark'
                                    />
                                    </IconButton>
                                    <Button 
                                    size="small"
                                    variant='contained'
                                    sx={{
                                        borderTopRightRadius: '80px',
                                        borderTopLeftRadius: '40px',
                                        borderBottomLeftRadius: '80px',
                                        bgcolor: 'primary.main',
                                        width: '80px',
                                        height: '50px',
                                        alignContent: 'right',
                                        transform: 'translateY(-70px) translateX(80px)'
                                    }}
                                    >
                                    <Iconify
                                        icon="fluent:cart-16-regular"
                                        width={30}
                                        height={30}
                                    />
                                    </Button>
                                </Stack>
                                </Stack>
                            </Card>
                        </m.div>
                    ))}
                </SliderStyle>
            </Box>
        </Grid>
    )
}