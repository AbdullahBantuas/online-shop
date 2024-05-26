import Slider from 'react-slick';
import { useRef } from 'react';
import { m } from 'framer-motion';
import React, { useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import { styled, useTheme } from '@mui/material/styles';
import { Card, Container, Typography, Stack, Grid, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// routes
import { paths } from 'src/routes/paths';
// types
import { ITourItem } from 'src/types/tour';
// components
import { useRouter } from 'src/routes/hook';
//
import TourItem from './like-item';

import useSettings from '../../hooks/useSettings';
import Iconify from '../../components/iconify';

import { MotionViewport, varFade } from '../../components/animate';
import { useResponsive } from '../../hooks/use-responsive'
import FavoriteIcon from '@mui/icons-material/Favorite';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourItem[];
};

const CARDS = [
  {
    title: 'Egg Chicken Spaghetti',
    description: 'Spaghetti, Egg, Soup, Barest',
    prize: '$67.00',
    rating: '5.0'
  },
  {
    title: 'Salmon Salat',
    description: 'Salmon, Egg, Tomato, Barest',
    prize: '$88.00',
    rating: '5.0'
  },
  {
    title: 'Shrimp Noodles',
    description: 'Spaghetti, Egg, Soup, Barest',
    prize: '$40.00',
    rating: '5.0'
  },
  {
    title: 'Egg Chicken Spaghetti',
    description: 'Spaghetti, Egg, Soup, Barest',
    prize: '$0.00',
    rating: '5.0'
  },
  {
    title: 'Egg Chicken Spaghetti',
    description: 'Spaghetti, Egg, Soup, Barest',
    prize: '$0.00',
    rating: '5.0'
  },
  {
    title: 'Egg Chicken Spaghetti',
    description: 'Spaghetti, Egg, Soup, Barest',
    prize: '$0.00',
    rating: '5.0'
  },
];

export default function LikeList({ tours }: Props) {
  const router = useRouter();
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const sliderRef = useRef<Slider>(null);
  const isDesktop = useResponsive('up', 'sm');
  const [activeButton, setActiveButton] = useState('prev');
  const isLight = theme.palette.mode === 'light';

  // const handleView = useCallback(
  //   (id: string) => {
  //     router.push(paths.dashboard.tour.details(id));
  //   },
  //   [router]
  // );

  // const handleEdit = useCallback(
  //   (id: string) => {
  //     router.push(paths.dashboard.tour.edit(id));
  //   },
  //   [router]
  // );

  // const handleDelete = useCallback((id: string) => {
  //   console.info('DELETE', id);
  // }, []);

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{ marginTop: 15, rowGap: 18 }}
      >
        {CARDS.map((card, index)  => (
          <m.div variants={varFade().inUp} key={card.title}>
            {isDesktop ? (
              <>
                <Card sx={{ height: '32vh', width: '400px', borderRadius: '50px', position: 'relative', overflow: 'visible' }}>
                  <img 
                    src="/assets/foods/noodle.png" 
                    alt="" 
                    style={{
                      position: 'relative', 
                      width: '250px', 
                      height: '250px', 
                      transform: 'translateY(-120px) translateX(-50px)',
                    }}
                  />
                  <Stack direction="row" spacing={5}>
                    <Stack direction="column" alignItems="left" sx={{ p: 4 }}>
                      <IconButton sx={{ color: isLight ? 'primary.dark' : 'primary.main', mt: '-180px', position: 'absolute', left: '25px' }}>
                        <FavoriteIcon/>
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
                                      src="/assets/foods/noodle.png" 
                                      alt="" 
                                      style={{
                                          position: 'relative', 
                                          width: '250px', 
                                          height: '250px', 
                                          transform: 'translateY(-120px) translateX(20px)',
                                      }}
                                  />
                                  <Stack direction="row" spacing={7}>
                                      <Stack direction="column" alignItems="left" sx={{ p: 4 }}>
                                          <IconButton sx={{ color: isLight ? 'primary.dark' : 'primary.main', mt: '-180px', position: 'absolute', left: '25px' }}>
                                            <FavoriteIcon/>
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
        {/* {tours.map((tour) => (
          <TourItem
            key={tour.id}
            tour={tour}
            onView={() => handleView(tour.id)}
            onEdit={() => handleEdit(tour.id)}
            onDelete={() => handleDelete(tour.id)}
          />
        ))} */}
      </Box>

      {tours.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}
