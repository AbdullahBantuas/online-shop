import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Container, Stack, Grid, TextField, Button } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
import Iconify from '../../components/iconify';
import { width } from '@mui/system';
import { useResponsive } from 'src/hooks/use-responsive';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    // paddingBottom: theme.spacing(5),
    // marginLeft: theme.spacing(13),
  },
  [theme.breakpoints.down('sm')]: {
    // paddingBottom: theme.spacing(5),
    // marginLeft: theme.spacing(13),
  },
}));

const HeroBackgroundStyle = styled('div')(({ theme }) => ({
  pointerEvents: 'none',
  position: 'absolute',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  height: '710px',
  width: '90%',
  borderRadius: '50px',
  background: '#E1E3E3',
}));

export default function HomeDetails() {
  const isDesktop = useResponsive('up', 'sm');
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle id='HomeReservation'>
      <Box sx={{ overflow: 'hidden' }}>
        {/* <HeroBackgroundStyle
          // alt="background"
          // src="/assets/icons/subscribe_bg.svg"
          // variants={varFade().in}
        /> */}
        <Container 
          maxWidth="xl" 
          component={MotionViewport}
          id='HomeReservation2'
          sx={{
            height: { md: '710px', xs: 'auto'},
            width: '90%',
            borderRadius: '50px',
            background: '#E1E3E3',
          }}
        >
          {isDesktop ? (
            <>
              <Grid
                container
                md={12}
                sx={{
                  zIndex: 5,
                  position: 'relative',
                  mt: 10,
                  p: 3,
                  width: '100%',
                  pl: { md: 20 },
                  pb: { xs: 10 },
                  pt: 10
                }}
                spacing={2}
              >
                <Grid item md={5.5} xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction='column' spacing={1}>
                      <Stack direction='row' spacing={1}>
                        <Iconify
                          icon='fluent:cart-16-regular'
                          sx={{
                            width: '45px',
                            height: '45px',
                            color: 'primary.dark',
                            bgColor: 'primary.dark'
                          }}
                        />
                        <Typography variant='h3' sx={{ color: 'primary.dark' }}>
                          OnlineShop
                        </Typography>
                      </Stack>
                      <Typography variant='body1' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                        Lorem Ipsum Is Simply Dummy Text Of The <br />
                        Printing And Typesetting Industry.
                      </Typography>
                    </Stack>
                  </m.div>
                </Grid>
                <Grid item md={6.5} xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction='column' spacing={1}>
                      <Typography variant='h5' sx={{ color: 'primary.dark' }}>
                        Subscribe To Our Newsletter
                      </Typography>
                      <Stack direction='row'>
                        <input 
                          type="text"
                          name='Subscribe'
                          id='Subscribe'
                          placeholder='Enter Your Email'
                          style={{
                            width: '380px',
                            height: '60px',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '30px',
                            border: 'none', 
                            paddingLeft: '30px',
                            fontSize: '14px',
                            outline: 'none'
                          }}
                        />
                        <Button 
                          variant='contained' 
                          sx={{ 
                            bgcolor: isLight ? 'primary.dark' : 'primary.main',
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            borderTopRightRadius: '30px',
                            borderBottomRightRadius: '0',
                            width: '100px'
                          }}
                        >
                          Subscribe
                        </Button>
                      </Stack>
                    </Stack>
                  </m.div>
                </Grid>
              </Grid>
              <Grid
                container
                // md={12}
                sx={{
                  zIndex: 5,
                  position: 'relative',
                  mt: 10,
                  p: 3,
                  width: '100%',
                  pl: { md: 20 },
                  pb: { xs: 10 },
                }}
                spacing={2}
              >
                <Stack direction='row' spacing={20}>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        CONTACT
                      </Typography>
                      <Stack direction='row' spacing={2}>
                        <Iconify
                          icon='fluent:location-48-regular'
                          sx={{
                            width: '35px',
                            height: '35px',
                            color: 'primary.dark',
                            mb: '18px'
                          }}
                        />
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          1247/Plot No. 39, 15th Phase, <br />
                          Colony, Kkatpally, Hyderabad
                        </Typography>
                      </Stack>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='row' spacing={2}>
                          <Iconify
                            icon='ph:phone-light'
                            sx={{
                              width: '35px',
                              height: '35px',
                              color: 'primary.dark',
                              mb: '18px'
                            }}
                          />
                          <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                            +91 987-654-3210 <br />
                            +91 123-456-7890
                          </Typography>
                        </Stack>
                        <Stack direction='row' spacing={2}>
                          <Iconify
                            icon='lets-icons:message-light'
                            sx={{
                              width: '35px',
                              height: '35px',
                              color: 'primary.dark',
                            }}
                          />
                          <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                            Info@Example.Com <br />
                            Info@Example.Com
                          </Typography>
                        </Stack>                      
                    </m.div>
                  </Stack>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        OUR LINKS
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='column' spacing={1.5}>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Home
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          About
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Products
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Comments
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          News
                        </Typography>
                      </Stack>
                    </m.div>
                  </Stack>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        OUR SERVICES
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='column' spacing={1.5}>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Strategy & Research
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Fast Delivery
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Free Events
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Pickup In Store
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Our Products
                        </Typography>
                      </Stack>
                    </m.div>
                  </Stack>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        HELP CENTER
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='column' spacing={1.5}>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          FAQ
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Shop
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Category
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Testimonial
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Contact Us
                        </Typography>
                      </Stack>
                    </m.div>
                  </Stack>
                </Stack>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                container
                md={12}
                sx={{
                  zIndex: 5,
                  position: 'relative',
                  mt: 10,
                  p: 3,
                  width: '100%',
                  pl: { md: 20 },
                  pb: { xs: 10 },
                  pt: 10
                }}
                spacing={2}
              >
                <Grid item md={5.5} xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction='column' spacing={1} textAlign='center'>
                      <Stack direction='row' spacing={1} textAlign='center' justifyContent='center'>
                        <Iconify
                          icon='fluent:cart-16-regular'
                          sx={{
                            width: '45px',
                            height: '45px',
                            color: 'primary.dark',
                            bgColor: 'primary.dark'
                          }}
                        />
                        <Typography variant='h3' sx={{ color: 'primary.dark' }}>
                          OnlineShop
                        </Typography>
                      </Stack>
                      <Typography variant='body1' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                        Lorem Ipsum Is Simply Dummy Text Of The 
                        Printing And Typesetting Industry.
                      </Typography>
                    </Stack>
                  </m.div>
                </Grid>
                <Grid item md={6.5} xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction='column' spacing={1}>
                      <Typography variant='h5' sx={{ color: 'primary.dark' }}>
                        Subscribe To Our Newsletter
                      </Typography>
                      <Stack direction='row'>
                        <input 
                          type="text"
                          name='Subscribe'
                          id='Subscribe'
                          placeholder='Enter Your Email'
                          style={{
                            width: '100%',
                            height: '60px',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '30px',
                            border: 'none', 
                            paddingLeft: '30px',
                            fontSize: '14px',
                            outline: 'none'
                          }}
                        />
                        <Button 
                          variant='contained' 
                          sx={{ 
                            bgcolor: isLight ? 'primary.dark' : 'primary.main',
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            borderTopRightRadius: '30px',
                            borderBottomRightRadius: '0',
                            width: '100px'
                          }}
                        >
                          Subscribe
                        </Button>
                      </Stack>
                    </Stack>
                  </m.div>
                </Grid>
              </Grid>
              <Grid
                container
                // md={12}
                xs={12}
                textAlign='center'
                alignItems='center'
                justifyContent='center'
                sx={{
                  zIndex: 5,
                  position: 'relative',
                  mt: 10,
                  p: 3,
                  width: '100%',
                  // pl: { md: 20 },
                  pb: { xs: 10, md: 0 },
                }}
                // spacing={2}
              >
                <Stack spacing={5} textAlign='center' justifyContent='center' alignItems='center' sx={{ mt: -15, position: 'relative' }}>
                  <Stack direction='column' textAlign='center' justifyContent='center' alignItems='center'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        CONTACT
                      </Typography>
                      <Stack direction='row' spacing={2}>
                        <Iconify
                          icon='fluent:location-48-regular'
                          sx={{
                            width: '35px',
                            height: '35px',
                            color: 'primary.dark',
                            mb: '18px'
                          }}
                        />
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          1247/Plot No. 39, 15th Phase, <br />
                          Colony, Kkatpally, Hyderabad
                        </Typography>
                      </Stack>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='row' spacing={2}>
                          <Iconify
                            icon='ph:phone-light'
                            sx={{
                              width: '35px',
                              height: '35px',
                              color: 'primary.dark',
                              mb: '18px'
                            }}
                          />
                          <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                            +91 987-654-3210 <br />
                            +91 123-456-7890
                          </Typography>
                        </Stack>
                        <Stack direction='row' spacing={2}>
                          <Iconify
                            icon='lets-icons:message-light'
                            sx={{
                              width: '35px',
                              height: '35px',
                              color: 'primary.dark',
                            }}
                          />
                          <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                            Info@Example.Com <br />
                            Info@Example.Com
                          </Typography>
                        </Stack>                      
                    </m.div>
                  </Stack>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        OUR LINKS
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='column' spacing={1.5}>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Home
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          About
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Products
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Comments
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          News
                        </Typography>
                      </Stack>
                    </m.div>
                  </Stack>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        OUR SERVICES
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='column' spacing={1.5}>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Strategy & Research
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Fast Delivery
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Free Events
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Pickup In Store
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Our Products
                        </Typography>
                      </Stack>
                    </m.div>
                  </Stack>
                  <Stack direction='column'>
                    <m.div variants={varFade().inLeft}>
                      <Typography variant='h5' sx={{ color: 'primary.dark', mb: '25px' }}>
                        HELP CENTER
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inLeft}>
                      <Stack direction='column' spacing={1.5}>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          FAQ
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Shop
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Category
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Testimonial
                        </Typography>
                        <Typography variant='caption' sx={{ color: isLight ? 'secondary.text' : "black" }}>
                          Contact Us
                        </Typography>
                      </Stack>
                    </m.div>
                  </Stack>
                </Stack>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </RootStyle>
  );
}
