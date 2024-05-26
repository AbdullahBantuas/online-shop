import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, Card, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// components
import Image from '../../components/image';
import useSettings from '../../hooks/useSettings';
import { MotionViewport, varFade } from '../../components/animate';
import Iconify from '../../components/iconify';
import { useResponsive } from '../../hooks/use-responsive';

import homeWhoSlider from './Components/home-who-slider';
import HomeWhoSlider from './Components/home-who-slider';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(9, 0),

  marginBottom: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(9, 0),
    marginLeft: theme.spacing(20),
    // marginRight: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
}));

// const HeroBackgroundStyle = styled(m.img)({
//   pointerEvents: 'none',
//   width: 'auto',
//   height: 'auto',
//   position: 'absolute',
//   right: 5,
//   top: '65vh',
// });

const ContentStyle = styled('div')(({ theme }) => ({
  // width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

// ----------------------------------------------------------------------

export default function HomeWho() {
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useResponsive('up', 'sm');
  // const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle>
      {/* <HeroBackgroundStyle
        alt="background"
        src="/assets/backgrounds/curve_line_bg.png"
        variants={varFade().in}
      /> */}
      <Container maxWidth={themeStretch ? false : 'xl'} component={MotionViewport} sx={{ pt: { md: '50px' } }}>
        <Grid container spacing={1} justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            dir="ltr"
            sx={{ 
              position: 'relative', 
              height: '400px', 
              width: '100%',
              mt: { xs: -15, md: 0 }
            }}
          >
            {isDesktop ? (
              <>
                <Stack direction='row'>
                  <Grid item md={6} xs={12}>
                    <m.div variants={varFade().inRight}>
                      <Card sx={{ height: '28vh', width: '80%', borderRadius: '50px', position: 'relative', overflow: 'visible' }}>
                        <Image 
                            src="assets/shopping-cart/pngwing.com (2).png" 
                            alt="" 
                            style={{
                              position: 'relative', 
                              width: '65%', 
                              height: 'auto', 
                              transform: 'translateY(-110px) translateX(50px)',
                            }}
                        />
                        <Stack direction="row" spacing={2} sx={{ pt: 5 }}>
                          <Stack direction="column" alignItems="left" sx={{ pl: 4, pt: 4 }}>
                            <Typography
                              variant="h6"
                              sx={{ color: theme.palette.primary.main, textAlign: 'left', mt: '-150px' }}
                            >
                              Shoes 1
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                // color: theme.palette.primary.main,
                                textAlign: 'left',
                              }}
                            >
                              Affordable shoes<br/>
                              & longevity
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{ color: theme.palette.primary.main, textAlign: 'left', paddingTop: '10px'}}
                            >
                              $50.00
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
                                transform: 'translateY(-120px) translateX(40px)'
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
                                transform: 'translateY(-35px) translateX(15px)'
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
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <m.div variants={varFade().inRight}>
                      <Card sx={{ height: '28vh', width: '80%', borderRadius: '50px', position: 'relative', overflow: 'visible' }}>
                        <Image 
                            src="assets/shopping-cart/pngwing.com (haha).png" 
                            alt="" 
                            style={{
                              position: 'relative', 
                              width: '65%', 
                              height: 'auto',
                              transform: 'translateY(-95px) translateX(50px)',
                            }}
                        />
                        <Stack direction="row" spacing={2} sx={{ pt: 5 }}>
                          <Stack direction="column" alignItems="left" sx={{ pl: 4, pt: 4 }}>
                            <Typography
                              variant="h6"
                              sx={{ color: theme.palette.primary.main, textAlign: 'left', mt: '-150px' }}
                            >
                              Shoes 2
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                // color: theme.palette.primary.main,
                                textAlign: 'left',
                              }}
                            >
                              Affordable shoes<br/>
                              & longevity
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{ color: theme.palette.primary.main, textAlign: 'left', paddingTop: '10px'}}
                            >
                              $250.00
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
                                transform: 'translateY(-120px) translateX(40px)'
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
                                transform: 'translateY(-35px) translateX(15px)'
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
                  </Grid>
                </Stack>
              </>
            ) : (
              <>
                <HomeWhoSlider/>
              </>
            )}
          </Grid> 
          <Grid item xs={12} md={6} sx={{ alignItems: 'center', mt:{ md: 0 , xs: 15} }}>
            <ContentStyle>
              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: isLight ? theme.palette.primary.dark : theme.palette.primary.main }}>
                  Our Special Shoes
                </Typography>
              </m.div>

              {isDesktop ? (
                <>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        mb: 5,
                        color: isLight ? 'text.secondary' : 'common.white',
                      }}
                    >
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting <br />
                      Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text. <br />
                      Ever Since The 1500s, When An Unknown Printer Took A Gallery Of Type <br />
                      And Scrambled It To Make A Type Specimen Book.
                    </Typography>
                  </m.div>
                </>
              ) : (
                <>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        mb: 5,
                        color: isLight ? 'text.secondary' : 'common.white',
                      }}
                    >
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting 
                      Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text.
                      Ever Since The 1500s, When An Unknown Printer Took A Gallery Of Type 
                      And Scrambled It To Make A Type Specimen Book.
                    </Typography>
                  </m.div>
                </>
              )}
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
