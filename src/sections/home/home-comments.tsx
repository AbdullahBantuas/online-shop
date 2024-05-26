import React from 'react';
import { m } from 'framer-motion';
// import { useState } from 'react';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Stack, Card, Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
// components
import { MotionViewport } from '../../components/animate';
import Iconify from '../../components/iconify';
import SectionBackground from 'src/assets/section-background2';
import Image from '../../components/image';
import { useResponsive } from 'src/hooks/use-responsive';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(50),
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(10),
  },
}));

const HeroBackgroundStyle = styled(m.div)({
  pointerEvents: 'none',
  position: 'absolute',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  right: 0,
  height: '100%',
  width: '100%',
});

export default function HomeComments() {
  const isDesktop = useResponsive('up', 'sm');
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle id='HomeProducts2'>
      {isDesktop ? (
        <>
          <HeroBackgroundStyle>
            <div>
              <SectionBackground/>
            </div>
          </HeroBackgroundStyle>
        </>
      ) : (
        <>
          <HeroBackgroundStyle>
            <div>
              <SectionBackground/>
            </div>
          </HeroBackgroundStyle>
        </>
      )}
      <Container maxWidth='xl' component={MotionViewport} sx={{ pt: { md: 20, xs: 5 } }}>
        <Grid container spacing={15} sx={{ position: 'relative' }}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ textAlign: 'center', color: 'primary.dark' }}>
              Our Customer's Comments
            </Typography>
          </Grid>
          {isDesktop ? (
            <>
              <Grid item md={6} xs={12} sx={{ mt: -10 }}>
                <Card 
                    sx={{ 
                      bgcolor: 'primary.dark' ,
                      width: '600px',
                      height: '400px',
                      borderTopLeftRadius: '230px',
                      borderBottomLeftRadius: '0',
                      borderBottomRightRadius: '230px',
                      borderTopRightRadius: '100px',
                      // mt: 20,
                      overflow: 'visible',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src='assets/shopping-cart/pngwing.com (6).png'
                      sx={{
                        position: 'absolute',
                        zIndex: 99,
                        bottom: 60,
                        left: 35,
                        width: 'auto',
                        height: '450px'
                      }}
                    />
                    <Card 
                      sx={{ 
                        position: 'relative',
                        width: '600px',
                        height: '400px',
                        borderTopLeftRadius: '230px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '230px',
                        borderTopRightRadius: '100px',
                        mt: 20,
                        overflow: 'hidden',
                        transform: 'translateX(60px) translateY(-60px)',
                        bgcolor: 'rgba(255,255,255, 0.5)',
                        backdropFilter: 'blur(30px)'
                      }}
                    >
                      <Box 
                        sx={{
                          position: 'absolute',
                          width: '350px',
                          height: '350px',
                          borderRadius: '50%',
                          border: '2px dashed black',
                          bgcolor: 'transparent',
                          top: -180,
                          right: -50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Box 
                        sx={{
                          // position: 'arela',
                          width: '250px',
                          height: '250px',
                          borderRadius: '50%',
                          border: '2px dashed black',
                          bgcolor: 'transparent',
                          top: -50,
                          right: -50
                        }}
                      />
                      </Box>
                    </Card>
                  </Card>
              </Grid>
              <Grid item md={6} xs={12} spacing={20}>
                <Stack direction='column' rowGap={1}>
                  <Iconify
                    icon='material-symbols:format-quote-rounded'
                    sx={{ width: '150px', height: '150px', marginLeft: '300px', color: '#B6BCBC' }}
                  />
                  <Typography variant='body1' alignItems='left' sx={{ pb: 5, color: isLight ? 'secondary.text' : "black" }}>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And <br />
                    Typesetting Industry. Loren Ipsum Has Been The Industry's <br />
                    Standard Dummy Text Ever Since The 1500s, When An <br />
                    Unknown Printer Took A Galley Of Type And Scrambled It <br />
                    To Make A Type Specimen Book.
                  </Typography>
                  <Stack direction='row' spacing={25}>
                      <Stack direction='column'>
                        <Typography variant='body1' sx={{ fontWeight: '1000', color: 'primary.dark' }}>
                          Hamida Jannat
                        </Typography>
                        <Typography variant='body1' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Food Blogger
                        </Typography>
                      </Stack>
                      <Stack direction='column'>
                        <Rating
                          value={5}
                          precision={0.5}
                          readOnly
                          size='medium'
                          emptyIcon={<StarIcon style={{ opacity: 0.55, marginRight: '5px', color: theme.palette.primary.main }}/>}
                          icon={<StarIcon fontSize='inherit' style={{ color: theme.palette.primary.main }} />}
                        />
                        <Stack direction='row' justifyContent='right'>
                          <IconButton 
                            size="small"
                            // variant='contained'
                            sx={{
                              // borderRadius: '50%',
                              // bgcolor: 'primary.main',
                              width: '30px',
                              height: '30px',
                              alignContent: 'right',
                              // color: 'white',
                              alignItems: 'center',
                              // '&:hover': {
                              //   color: 'primary.dark'
                              // },
                            }}
                          >
                            <Iconify
                              icon="pajamas:arrow-left"
                              width={30}
                              height={30}
                            />
                          </IconButton>
                          <IconButton 
                            size="small"
                            // variant='contained'
                            sx={{
                              // borderRadius: '50%',
                              // bgcolor: 'primary.main',
                              width: '30px',
                              height: '30px',
                              alignContent: 'right',
                              // color: 'white',
                              alignItems: 'center',
                              // '&:hover': {
                              //   color: 'primary.dark'
                              // },
                            }}
                          >
                            <Iconify
                              icon="pajamas:arrow-right"
                              width={30}
                              height={30}
                            />
                          </IconButton>
                        </Stack>
                      </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </>
          ) : (
            <>
              <Grid item md={6} xs={12} sx={{ mt: -10 }}>
                <Card 
                    sx={{ 
                      bgcolor: 'primary.dark' ,
                      width: '330px',
                      height: '200px',
                      borderTopLeftRadius: '230px',
                      borderBottomLeftRadius: '0',
                      borderBottomRightRadius: '230px',
                      borderTopRightRadius: '100px',
                      // mt: 20,
                      overflow: 'visible',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src='assets/shopping-cart/pngwing.com (6).png'
                      sx={{
                        position: 'absolute',
                        zIndex: 99,
                        bottom: 30,
                        left: 28,
                        width: 'auto',
                        height: '250px'
                      }}
                    />
                    <Card 
                      sx={{ 
                        position: 'relative',
                        width: '330px',
                        height: '200px',
                        borderTopLeftRadius: '230px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '230px',
                        borderTopRightRadius: '100px',
                        mt: 20,
                        overflow: 'hidden',
                        transform: 'translateX(30px) translateY(-30px)',
                        bgcolor: 'rgba(255,255,255, 0.5)',
                        backdropFilter: 'blur(30px)'
                      }}
                    >
                      <Box 
                        sx={{
                          position: 'absolute',
                          width: '350px',
                          height: '350px',
                          borderRadius: '50%',
                          border: '2px dashed black',
                          bgcolor: 'transparent',
                          top: -180,
                          right: -50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Box 
                        sx={{
                          // position: 'arela',
                          width: '250px',
                          height: '250px',
                          borderRadius: '50%',
                          border: '2px dashed black',
                          bgcolor: 'transparent',
                          top: -50,
                          right: -50
                        }}
                      />
                      </Box>
                    </Card>
                  </Card>
              </Grid>
              <Grid item md={6} xs={12} spacing={20} sx={{ mt: -8 }}>
                <Stack direction='column' rowGap={1} textAlign='center'>
                  <Iconify
                    icon='material-symbols:format-quote-rounded'
                    sx={{ width: '100px', height: '100px', marginLeft: '250px', color: '#B6BCBC' }}
                  />
                  <Typography variant='body1' alignItems='center' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And 
                    Typesetting Industry. Loren Ipsum Has Been The Industry's 
                    Standard Dummy Text Ever Since The 1500s, When An 
                    Unknown Printer Took A Galley Of Type And Scrambled It 
                    To Make A Type Specimen Book.
                  </Typography>
                  <Stack direction='column' spacing={0}>
                      <Stack direction='column'>
                        <Typography variant='body1' sx={{ fontWeight: '1000', color: 'primary.dark' }}>
                          Hamida Jannat
                        </Typography>
                        <Typography variant='body1' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Food Blogger
                        </Typography>
                      </Stack>
                      <Stack direction='column' justifyContent='center'>
                        <Rating
                          value={5}
                          precision={0.5}
                          readOnly
                          size='medium'
                          sx={{ justifyContent: 'center' }}
                          emptyIcon={<StarIcon style={{ opacity: 0.55, marginRight: '5px', color: theme.palette.primary.main }}/>}
                          icon={<StarIcon fontSize='inherit' style={{ color: theme.palette.primary.main }} />}
                        />
                        <Stack direction='row' justifyContent='center'>
                          <IconButton 
                            size="small"
                            // variant='contained'
                            sx={{
                              // borderRadius: '50%',
                              // bgcolor: 'primary.main',
                              width: '30px',
                              height: '30px',
                              alignContent: 'right',
                              // color: 'white',
                              alignItems: 'center',
                              // '&:hover': {
                              //   color: 'primary.dark'
                              // },
                            }}
                          >
                            <Iconify
                              icon="pajamas:arrow-left"
                              width={30}
                              height={30}
                            />
                          </IconButton>
                          <IconButton 
                            size="small"
                            // variant='contained'
                            sx={{
                              // borderRadius: '50%',
                              // bgcolor: 'primary.main',
                              width: '30px',
                              height: '30px',
                              alignContent: 'right',
                              // color: 'white',
                              alignItems: 'center',
                              // '&:hover': {
                              //   color: 'primary.dark'
                              // },
                            }}
                          >
                            <Iconify
                              icon="pajamas:arrow-right"
                              width={30}
                              height={30}
                            />
                          </IconButton>
                        </Stack>
                      </Stack>
                    </Stack>
                </Stack>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </RootStyle>
  );
}
