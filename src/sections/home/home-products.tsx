import { m } from 'framer-motion';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Card, Container, Typography, Stack, Grid, Button } from '@mui/material';
// components
import Image from '../../components/image';
import useSettings from '../../hooks/useSettings';
import Iconify from '../../components/iconify';

import { MotionViewport, varFade } from '../../components/animate';
import { useResponsive } from '../../hooks/use-responsive';
import MenuSlider1 from './Components/home-menu-slider1';
import MenuSlider2 from './Components/home-menu-slider2';
import MenuSlider3 from './Components/home-menu-slider3';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(20),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: -250
  },
}));

// const HeroBackgroundStyle = styled(m.img)({
//   pointerEvents: 'none',
//   position: 'absolute',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   height: '10%',
//   width: '100%',
// });

const CardBG = styled(m.img)({
    pointerEvents: 'none',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  });

// ----------------------------------------------------------------------
export default function HomeMenu() {
  // const [ishovered, setIshovered] = useState(false);
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  // const handleEnterHover = () => {
  //   setIshovered(true);
  // };
  // const handleOutHover = () => {
  //   setIshovered(false);
  // };
  const { themeStretch } = useSettings();

  const isDesktop = useResponsive('up', 'sm');

  return (
    <RootStyle id="HomeAbout">
      {/* <HeroBackgroundStyle
        alt="background"
        src="/assets/icons/map_image_bg.png"
        variants={varFade().in}
      />
      {isDesktop ? (
        <img
          className="rotate"
          alt=""
          src="/assets/backgrounds/meter.png"
          style={{
            position: 'absolute',
            right: 0,
            width: '250px',
            height: '250px',
          }}
        />
      ) : null} */}
      <Container id='HomeAbout2' maxWidth={themeStretch ? false : 'xl'} component={MotionViewport} sx={{ pt: { md:'100px', xs: 0 }, mb: 15 }} >
        {isDesktop ? (
          <>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12} sx={{ alignItems: 'center' }}>
                  <Stack>
                      <m.div variants={varFade().inUp}>
                          <Typography variant="h2" sx={{ textAlign: 'left', color: isLight ? 'primary.dark' : 'primary.main' }}>
                              Our Popular Gadgets
                          </Typography>
                          <Typography variant="body1" sx={{ textAlign: 'left' }}>
                              Lorem Ipsum Is Simply Dummy Text Of The Printing <br />
                              and Typesetting Industry. Lorem Has Been <br />
                              The Industry's Standard
                          </Typography>
                      </m.div>
                  </Stack>
                  <Stack>
                    
                  </Stack>
              </Grid>
              <Grid item md={6}>
                <m.div variants={varFade().inUp}>
                  <Stack direction='row' spacing={3} alignItems='center' justifyContent='center'>
                      <Card 
                        sx={{ 
                          width: '70px' ,
                          height: '70px' ,
                          transition: 'box-shadow 0.3s',
                          '&:hover': {
                            boxShadow: isLight ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      >
                          <Iconify
                              icon="gridicons:phone"
                              sx={{ width: '70px', height: '70px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card 
                        sx={{ 
                          width: '70px' ,
                          height: '70px' ,
                          transition: 'box-shadow 0.3s',
                          '&:hover': {
                            boxShadow: isLight ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      >
                          <Iconify
                              icon="lucide:camera"
                              sx={{ width: '70px', height: '70px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card 
                        sx={{ 
                          width: '70px' ,
                          height: '70px' ,
                          transition: 'box-shadow 0.3s',
                          '&:hover': {
                            boxShadow: isLight ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      >
                          <Iconify
                              icon="icon-park-solid:phone"
                              sx={{ width: '70px', height: '70px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card 
                        sx={{ 
                          width: '70px' ,
                          height: '70px' ,
                          transition: 'box-shadow 0.3s',
                          '&:hover': {
                            boxShadow: isLight ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      >
                          <Iconify
                              icon="mingcute:laptop-line"
                              sx={{ width: '70px', height: '70px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card 
                        sx={{ 
                          width: '70px' ,
                          height: '70px' ,
                          transition: 'box-shadow 0.3s',
                          '&:hover': {
                            boxShadow: isLight ? '0 0 10px rgba(0, 0, 0, 0.5)' : '0 0 10px rgba(255, 255, 255, 0.5)',
                          },
                        }}
                      >
                          <Iconify
                              icon="ic:round-headphones"
                              sx={{ width: '70px', height: '70px', color: 'primary.main' }}
                          />
                      </Card>
                  </Stack>
                </m.div>
              </Grid>
              <MenuSlider1/>
              <MenuSlider2/>
              <MenuSlider3/>
            </Grid>
          </>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12} sx={{ alignItems: 'center', mt: '120px' }}>
                  <Stack>
                      <m.div variants={varFade().inUp}>
                          <Typography variant="h2" sx={{ textAlign: 'center', color: isLight ? 'primary.dark' : 'primary.main' }}>
                              Our Popular Gadgets
                          </Typography>
                          <Typography variant="body1" sx={{ textAlign: 'center' }}>
                              Lorem Ipsum Is Simply Dummy Text Of The Printing 
                              and Typesetting Industry. Lorem Has Been 
                              The Industry's Standard
                          </Typography>
                      </m.div>
                  </Stack>
                  {/* <Stack>
                      
                  </Stack> */}
              </Grid>
              <Grid item md={6}>
                <m.div variants={varFade().inUp}>
                  <Stack direction='row' spacing={1} justifyContent='center' alignItems='center' textAlign='center'>
                      <Card sx={{ width: '65px' ,height: '65px' }}>
                          <Iconify
                              icon="gridicons:phone"
                              sx={{ width: '65px', height: '65px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card sx={{ width: '65px' ,height: '65px' }}>
                          <Iconify
                              icon="lucide:camera"
                              sx={{ width: '65px', height: '65px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card sx={{ width: '65px' ,height: '65px' }}>
                          <Iconify
                              icon="icon-park-solid:phone"
                              sx={{ width: '65px', height: '65px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card sx={{ width: '65px' ,height: '65px' }}>
                          <Iconify
                              icon="mingcute:laptop-line"
                              sx={{ width: '65px', height: '65px', color: 'primary.main' }}
                          />
                      </Card>
                      <Card sx={{ width: '65px' ,height: '65px' }}>
                          <Iconify
                              icon="ic:round-headphones"
                              sx={{ width: '65px', height: '65px', color: 'primary.main' }}
                          />
                      </Card>
                  </Stack>
                </m.div>
              </Grid>
              <MenuSlider1/>
              <MenuSlider2/>
              <MenuSlider3/>
            </Grid>
          </>
        )}
      </Container>
    </RootStyle>
  );
}
