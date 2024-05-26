import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';

// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, ButtonBaseProps, Button, Grid, Typography, Stack, Card, Rating } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
// routes

// assets
// import { HeroBackground } from '../../assets';
// components
import { useResponsive } from '../../hooks/use-responsive';
import Iconify from '../../components/iconify';
import Image from '../../components/image';
import { MotionContainer, varFade } from '../../components/animate';
// import './HomeStyle.scss';
import useSettings from '../../hooks/useSettings';
import { borderRadius } from '@mui/system';
import HomeBackground from 'src/assets/home-background2';

// ----------------------------------------------------------------------

const RATE = {
  rating: 5
}

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  // backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
}));

const HeroBackgroundStyle = styled(m.div)(({ theme }) => ({
  pointerEvents: 'none',
  position: 'absolute',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  right: 0,
  paddingTop: 70,
  paddingBottom: 40,
  paddingLeft: 70,
  paddingRight: 70,
  height: '100%',
  width: '100%',
  // color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 70,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: '100%',
    width: '100%',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'left',
  marginBottom: 0,
  marignLeft: '1105px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    marginBottom: 0,
    ml: 100,
    width: '100%',
    padding: 1
    // marignLeft: '1105px'
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up', 'sm');
  const themeStretch = useSettings();

  return (
    <MotionContainer id="HomeHero">
      <RootStyle>
          {isDesktop ? (
            <>
              <HeroBackgroundStyle variants={varFade().inUp}>
                <div>
                  <HomeBackground/>
                </div>
              </HeroBackgroundStyle>
            </>
          ) : (
            <>
              <HeroBackgroundStyle variants={varFade().inUp}>
                <div>
                  <HomeBackground/>
                </div>
              </HeroBackgroundStyle>
            </>
          )}

        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Grid container spacing={1} sx={{ pl: { md: 20, xs: 0 }, pt: { xs: 13 }, pb: { md: 0, xs: 10 } }}>
            <ContentStyle>
              <Grid 
                item 
                md={6}
                xs={12}
                dir="ltr"
                sx={{ 
                  position: 'relative', 
                  // height: '400px', 
                  // width: '100%',
                  alignItems: { xs: 'center', },
                  justifyContent: { xs: 'center' }
                }} 
              >
                {isDesktop ? (
                  <>
                    <Typography variant='h6' sx={{ color: 'primary.main', pb: 2 }}>
                      EXPLORING THE ONLINE WORLD
                    </Typography>
                    <Typography variant='h2' sx={{ color: 'primary.dark', pb: 2 }}>
                      PRODUCTS THAT MAKES 
                      YOU HAPPY AND 
                      APPRECIATED
                    </Typography>
                    <div style={{ position: 'relative', marginBottom: '25px' }}>
                      <Iconify
                        icon='ri:search-line'
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          width: '25px',
                          height: 'auto',
                          right: '110px', 
                          transform: 'translateY(-50%)',
                          color: '#9e9e9e',
                        }}
                      />
                      <input
                        type="text"
                        name='Subscribe'
                        id='Subscribe'
                        placeholder='Feni, Bangladesh'
                        style={{
                          width: '450px',
                          height: '55px',
                          borderTopLeftRadius: '30px',
                          borderTopRightRadius: '30px',
                          borderBottomLeftRadius: '30px',
                          borderBottomRightRadius: '30px',
                          border: 'none',
                          paddingLeft: '25px', 
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <Stack direction='row' spacing={5} sx={{ pb: 6.5 }}>
                      <Button 
                        size="small"
                        variant='contained'
                        sx={{
                          borderTopRightRadius: '15px',
                          borderTopLeftRadius: '15px',
                          borderBottomLeftRadius: '15px',
                          borderBottomRightRadius: 0,
                          bgcolor: 'primary.dark',
                          width: '200px',
                          height: '50px',
                          alignContent: 'right'
                        }}
                        endIcon={
                          <Iconify
                            icon="cil:arrow-right"
                            width={20}
                            height={20}
                          />
                        }
                      >
                          View Products
                      </Button>
                      <Button 
                        size="small"
                        
                        variant='contained'
                        sx={{
                          borderTopRightRadius: '15px',
                          borderTopLeftRadius: '15px',
                          borderBottomLeftRadius: '15px',
                          borderBottomRightRadius: 0,
                          bgcolor: 'primary.main',
                          width: '200px',
                          height: '50px',
                          alignContent: 'right'
                        }}
                        endIcon={
                          <Iconify
                            icon="cil:arrow-right"
                            width={20}
                            height={20}
                          />
                        }
                      >
                          View Cart
                      </Button>
                    </Stack>
                    <Card 
                      sx={{
                        width: '80%',
                        height: '25vh',
                        bgcolor: 'primary.dark',
                        borderTopLeftRadius: '25px',
                        borderBottomLeftRadius: '70px',
                        borderTopRightRadius: '70px',
                        borderBottomRightRadius: 0,
                        padding: 4
                      }}
                    >
                      <Stack direction='row' spacing={23} sx={{ pb: 5 }}>
                        <Typography variant='h6' sx={{ color: 'white' }}>
                          T-Shirt Promo
                        </Typography>
                        <Rating
                          value={RATE.rating}
                          precision={0.5} // You can adjust precision based on your needs
                          readOnly
                          size='large'
                          emptyIcon={<StarIcon style={{ opacity: 0.55, marginRight: '5px' }}/>}
                          icon={<StarIcon fontSize='inherit' />}
                          // sx={{ alignContent: 'right' }}
                        />
                      </Stack>
                      <Stack direction='row' spacing={4}>
                        <img 
                          src="assets/shopping-cart/varsity.png" 
                          alt="" 
                          width={200}
                          height={120}
                          style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            borderBottomLeftRadius: '45px',
                          }}
                        />
                        <Stack direction='column' spacing={6.5}>
                          <Typography variant='h6' sx={{ color: 'white', pl: '125px' }}>
                            $250.00
                          </Typography>
                          <Button 
                              variant='contained'
                              sx={{
                                bgcolor: 'white',
                                borderRadius: '50%',
                                width: '10px',
                                height: '60px',
                                padding: 0,
                                ml: '130px',
                                transform: 'translateY(-10px)',
                                '&:hover': {
                                  bgcolor: 'hoverColor',
                                  '& svg': {
                                    color: 'white', 
                                  },
                                },
                              }}
                            >
                              <Iconify
                                icon='fluent:cart-16-regular'
                                height={25}
                                width={25}
                                color='primary.dark'
                                // sx={{
                                //   '&:hover': {
                                //     color: 'white', 
                                //   },
                                // }}
                              />
                            </Button>
                          
                        </Stack>
                      </Stack>
                    </Card>
                  </>
                ) : (
                  <>
                    <Typography variant='h6' sx={{ color: 'primary.main', pb: 2 }}>
                      EXPLORING THE ONLINE WORLD
                    </Typography>
                    <Typography variant='h2' sx={{ color: 'primary.dark', pb: 2 }}>
                      PRODUCTS THAT MAKES 
                      YOU HAPPY AND 
                      APPRECIATED
                    </Typography>
                    <div style={{ position: 'relative', marginBottom: '25px' }}>
                      <Iconify
                        icon='ri:search-line'
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          width: '25px',
                          height: 'auto',
                          right: '30px', 
                          transform: 'translateY(-50%)',
                          color: '#9e9e9e',
                        }}
                      />
                      <input
                        type="text"
                        name='Subscribe'
                        id='Subscribe'
                        placeholder='Feni, Bangladesh'
                        style={{
                          width: '100%',
                          height: '55px',
                          borderTopLeftRadius: '30px',
                          borderTopRightRadius: '30px',
                          borderBottomLeftRadius: '30px',
                          borderBottomRightRadius: '30px',
                          border: 'none',
                          paddingLeft: '25px', 
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <Stack direction='row' spacing={5} sx={{ pb: 6.5 }}>
                      <Button 
                        size="small"
                        variant='contained'
                        sx={{
                          borderTopRightRadius: '15px',
                          borderTopLeftRadius: '15px',
                          borderBottomLeftRadius: '15px',
                          borderBottomRightRadius: 0,
                          bgcolor: 'primary.dark',
                          width: '200px',
                          height: '50px',
                          alignContent: 'right'
                        }}
                        endIcon={
                          <Iconify
                            icon="cil:arrow-right"
                            width={20}
                            height={20}
                          />
                        }
                      >
                          View Products
                      </Button>
                      <Button 
                        size="small"
                        variant='contained'
                        sx={{
                          borderTopRightRadius: '15px',
                          borderTopLeftRadius: '15px',
                          borderBottomLeftRadius: '15px',
                          borderBottomRightRadius: 0,
                          bgcolor: 'primary.main',
                          width: '200px',
                          height: '50px',
                          alignContent: 'right'
                        }}
                        endIcon={
                          <Iconify
                            icon="cil:arrow-right"
                            width={20}
                            height={20}
                          />
                        }
                      >
                          View Carts
                      </Button>
                    </Stack>
                    <Card 
                      sx={{
                        width: '100%',
                        height: '25vh',
                        bgcolor: 'primary.dark',
                        borderTopLeftRadius: '25px',
                        borderBottomLeftRadius: '70px',
                        borderTopRightRadius: '70px',
                        borderBottomRightRadius: 0,
                        padding: 2
                      }}
                    >
                      <Stack direction='row' spacing={13} sx={{ pb: 4 }}>
                        <Typography variant='h6' sx={{ color: 'white' }}>
                          T-Shirt Promo
                        </Typography>
                        <Rating
                          value={RATE.rating}
                          precision={0.5} // You can adjust precision based on your needs
                          readOnly
                          size='small'
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }}/>}
                          icon={<StarIcon fontSize='inherit' />}
                          // sx={{ alignContent: 'right' }}
                        />
                      </Stack>
                      <Stack direction='row' spacing={1}>
                        <img 
                          src="assets/shopping-cart/varsity.png" 
                          alt="" 
                          width={200}
                          height={120}
                          style={{
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            borderBottomLeftRadius: '45px',
                          }}
                        />
                        <Stack direction='column' spacing={3.5}>
                          <Typography variant='h6' sx={{ color: 'white', pl: '60px' }}>
                            $250.00
                          </Typography>
                          <IconButton 
                              // variant='contained'
                              // sx={{
                              //   bgcolor: 'white',
                              //   borderRadius: '50%',
                              //   // width: '1%',
                              //   // height: '30px',
                              //   padding: 0,
                              //   transform: 'translateY(-10px)',
                              // }}
                              sx={{ bgcolor: 'white', width: '45px', height: '45px', mt: '10px', ml: '70px' }}
                              size='small'
                            >
                              <Iconify
                                icon='fluent:cart-16-regular'
                                height={25}
                                width={25}
                                color='primary.dark'
                              />
                            </IconButton>
                        </Stack>
                      </Stack>
                    </Card>
                  </>
                )}
              </Grid>
              {isDesktop ? (
                <>
                  <Grid xs={12} md={6} sx={{ alignItems: 'center', position: 'absolute', bottom: 5, right: 150, top: 100 }} >
                    <img
                      src='assets/shopping-cart/pngwing.com (1).png'
                      style={{
                        width: '800px',
                        height: 'auto'
                      }}
                    />
                  </Grid>
                  
                </>
              ) : (
                <></>
              )}
            </ContentStyle>
          </Grid>
        </Container>
      </RootStyle>

      <Box sx={{ height: { md: '5vh', xs: '5vh' } }} />
    </MotionContainer>
  );
}
