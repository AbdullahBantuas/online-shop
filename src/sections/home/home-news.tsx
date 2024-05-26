import { m } from 'framer-motion';
import ReactPlayer from 'react-player/lazy'
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, Card, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import useSettings from '../../hooks/useSettings';
import { MotionViewport, varFade } from '../../components/animate';
import Iconify from '../../components/iconify';
import { useResponsive } from '../../hooks/use-responsive';
import { transform } from 'lodash';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 0),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(9, 0),
    marginLeft: theme.spacing(20),
    // marginRight: theme.spacing(5),
    marginBottom: theme.spacing(20),
  },
}));

const HeroBackgroundStyle = styled(m.img)({
  pointerEvents: 'none',
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  right: 5,
  top: '65vh',
});

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

export default function HomeNews() {
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useResponsive('up', 'sm');
  // const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle id='HomeBlog'>
      <Container maxWidth={themeStretch ? false : 'xl'} component={MotionViewport} id='HomeBlog2'>
        {isDesktop ? (
          <>
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
                }}
              >
                <Typography variant='h2' sx={{ color: isLight ? 'primary.dark' : 'primary.main', mb: '30px' }}>
                    Recent News & Updates
                </Typography>
                <Stack direction='row' spacing={12} sx={{ pl: '30px', pb: '70px' }}>
                    <Card
                        sx={{
                            overflow: 'visible',
                            borderRadius: '50px',
                            position: 'relative',
                            width: '29%',
                            height: '20vh'
                        }}
                    >
                        <Stack direction='column'>
                            <Button 
                              size="small"
                              variant='contained'
                              disabled
                              sx={{
                                borderTopRightRadius: '100px',
                                borderTopLeftRadius: '40px',
                                borderBottomLeftRadius: '100px',
                                bgcolor: 'primary.main',
                                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                width: '100px',
                                height: '40px',
                                alignContent: 'right',
                                transform: 'translateX(-30px) translateY(30px)',
                                '&.Mui-disabled': {
                                    bgcolor: 'primary.main', 
                                    color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                    opacity: '100%',
                                  }
                              }}
                              >
                              23 Jul 2023
                            </Button>
                            <img 
                                src="assets/foods/pngwing.com.png" 
                                alt="" 
                                style={{
                                position: 'relative', 
                                width: '400px', 
                                height: '150px', 
                                transform: 'translateX(80px) translateY(-25px)',
                                }}
                            />
                        </Stack>
                    </Card>
                    <Stack direction='column' spacing={3} sx={{ pt: '20px' }}>
                        <Typography variant='h6'>
                            Chill Out With These <br />
                            Suasages Pizza
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Iconify
                                icon='iconamoon:profile-thin'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    By 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Haseeb Hossain
                                </Typography>
                            </Stack>
                            {/* <Iconify
                                icon='mdi:dot'
                                sx={{ width: '10px', height: '10px' }}
                            /> */}
                            <Typography variant='body1'>
                                .
                            </Typography>
                            <Iconify
                                icon='arcticons:messages-3'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    40 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Comments
                                </Typography>
                            </Stack>
                        </Stack> 
                        <Button 
                            size="small"
                          variant='contained'
                          sx={{
                            borderTopRightRadius: '100px',
                            borderTopLeftRadius: '40px',
                            borderBottomLeftRadius: '100px',
                            bgcolor: 'primary.main',
                            width: '130px',
                            height: '50px',
                            alignContent: 'right'
                          }}
                          >
                          Read More
                        </Button>                              
                    </Stack>
                </Stack> 
                <Stack direction='row' spacing={12} sx={{ pl: '30px' }}>
                    <Card
                        sx={{
                            overflow: 'visible',
                            borderRadius: '50px',
                            position: 'relative',
                            width: '29%',
                            height: '20vh'
                        }}
                    >
                        <Stack direction='column'>
                            <Button 
                              size="small"
                              variant='contained'
                              disabled
                              sx={{
                                borderTopRightRadius: '100px',
                                borderTopLeftRadius: '40px',
                                borderBottomLeftRadius: '100px',
                                bgcolor: 'primary.main',
                                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                width: '100px',
                                height: '40px',
                                alignContent: 'right',
                                transform: 'translateX(-30px) translateY(30px)',
                                '&.Mui-disabled': {
                                    bgcolor: 'primary.main', 
                                    color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                    opacity: '100%',
                                  }
                              }}
                              >
                              23 Jul 2023
                            </Button>
                            <img 
                                src="assets/foods/pngwing.com (1).png" 
                                alt="" 
                                style={{
                                position: 'relative', 
                                width: '400px', 
                                height: '150px', 
                                transform: 'translateX(80px) translateY(-15px)',
                                }}
                            />
                        </Stack>
                    </Card>
                    <Stack direction='column' spacing={3} sx={{ pt: '20px' }}>
                        <Typography variant='h6'>
                            Taste Excitement: A Sneak <br />
                            Peek Into The
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Iconify
                                icon='iconamoon:profile-thin'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    By 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Haseeb Hossain
                                </Typography>
                            </Stack>
                            {/* <Iconify
                                icon='mdi:dot'
                                sx={{ width: '10px', height: '10px' }}
                            /> */}
                            <Typography variant='body1'>
                                .
                            </Typography>
                            <Iconify
                                icon='arcticons:messages-3'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    40 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Comments
                                </Typography>
                            </Stack>
                        </Stack> 
                        <Button 
                            size="small"
                          variant='contained'
                          sx={{
                            borderTopRightRadius: '100px',
                            borderTopLeftRadius: '40px',
                            borderBottomLeftRadius: '100px',
                            bgcolor: 'primary.main',
                            width: '130px',
                            height: '50px',
                            alignContent: 'right'
                          }}
                          >
                          Read More
                        </Button>                              
                    </Stack>
                </Stack>   
              </Grid> 
              <Grid item xs={12} md={6} sx={{ alignItems: 'center' }}>
                <ContentStyle>
                  <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=dA0VGEbbw4g'
                    width='75%'
                    height='57vh'
                    style={{
                      borderRadius: '50px',
                      overflow: 'hidden'
                    }}
                  />
                </ContentStyle>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
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
                }}
              >
                <Typography variant='h2' textAlign='center' sx={{ color: 'primary.dark', mb: '70px' }}>
                    Recent News & Updates
                </Typography>
                <Stack direction='column' spacing={3} sx={{ pl: '30px', pb: '70px' }}>
                    <Card
                        sx={{
                            overflow: 'visible',
                            borderRadius: '50px',
                            position: 'relative',
                            width: '75%',
                            height: '23vh'
                        }}
                    >
                        <Stack direction='column'>
                            <Button 
                              size="small"
                              variant='contained'
                              disabled
                              sx={{
                                borderTopRightRadius: '100px',
                                borderTopLeftRadius: '40px',
                                borderBottomLeftRadius: '100px',
                                bgcolor: 'primary.main',
                                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                width: '100px',
                                height: '40px',
                                alignContent: 'right',
                                transform: 'translateX(-30px) translateY(30px)',
                                '&.Mui-disabled': {
                                    bgcolor: 'primary.main', 
                                    color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                    opacity: '100%',
                                  }
                              }}
                              >
                              23 Jul 2023
                            </Button>
                            <img 
                                src="assets/foods/pngwing.com.png" 
                                alt="" 
                                style={{
                                position: 'relative', 
                                width: '400px', 
                                height: '150px', 
                                transform: 'translateX(80px) translateY(-25px)',
                                }}
                            />
                        </Stack>
                    </Card>
                    <Stack direction='column' spacing={3} sx={{ pt: '20px' }}>
                        <Typography variant='h6'>
                            Chill Out With These <br />
                            Suasages Pizza
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Iconify
                                icon='iconamoon:profile-thin'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    By 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Haseeb Hossain
                                </Typography>
                            </Stack>
                            {/* <Iconify
                                icon='mdi:dot'
                                sx={{ width: '10px', height: '10px' }}
                            /> */}
                            <Typography variant='body1'>
                                .
                            </Typography>
                            <Iconify
                                icon='arcticons:messages-3'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    40 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Comments
                                </Typography>
                            </Stack>
                        </Stack> 
                        <Button 
                            size="small"
                          variant='contained'
                          sx={{
                            borderTopRightRadius: '100px',
                            borderTopLeftRadius: '40px',
                            borderBottomLeftRadius: '100px',
                            bgcolor: 'primary.main',
                            width: '130px',
                            height: '50px',
                            alignContent: 'right'
                          }}
                          >
                          Read More
                        </Button>                              
                    </Stack>
                </Stack> 
                <Stack direction='column' spacing={3} sx={{ pl: '30px' }}>
                    <Card
                        sx={{
                            overflow: 'visible',
                            borderRadius: '50px',
                            position: 'relative',
                            width: '75%',
                            height: '23vh'
                        }}
                    >
                        <Stack direction='column'>
                            <Button 
                              size="small"
                              variant='contained'
                              disabled
                              sx={{
                                borderTopRightRadius: '100px',
                                borderTopLeftRadius: '40px',
                                borderBottomLeftRadius: '100px',
                                bgcolor: 'primary.main',
                                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                width: '100px',
                                height: '40px',
                                alignContent: 'right',
                                transform: 'translateX(-30px) translateY(30px)',
                                '&.Mui-disabled': {
                                    bgcolor: 'primary.main', 
                                    color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
                                    opacity: '100%',
                                  }
                              }}
                              >
                              23 Jul 2023
                            </Button>
                            <img 
                                src="assets/foods/pngwing.com (1).png" 
                                alt="" 
                                style={{
                                position: 'relative', 
                                width: '400px', 
                                height: '150px', 
                                transform: 'translateX(80px) translateY(-15px)',
                                }}
                            />
                        </Stack>
                    </Card>
                    <Stack direction='column' spacing={3} sx={{ pt: '20px' }}>
                        <Typography variant='h6'>
                            Taste Excitement: A Sneak <br />
                            Peek Into The
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Iconify
                                icon='iconamoon:profile-thin'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    By 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Haseeb Hossain
                                </Typography>
                            </Stack>
                            {/* <Iconify
                                icon='mdi:dot'
                                sx={{ width: '10px', height: '10px' }}
                            /> */}
                            <Typography variant='body1'>
                                .
                            </Typography>
                            <Iconify
                                icon='arcticons:messages-3'
                                sx={{ width: '22px', height: '22px' }}
                            />
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='subtitle2'>
                                    40 
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: 'primary.main' }}> 
                                    Comments
                                </Typography>
                            </Stack>
                        </Stack> 
                        <Button 
                            size="small"
                          variant='contained'
                          sx={{
                            borderTopRightRadius: '100px',
                            borderTopLeftRadius: '40px',
                            borderBottomLeftRadius: '100px',
                            bgcolor: 'primary.main',
                            width: '130px',
                            height: '50px',
                            alignContent: 'right'
                          }}
                          >
                          Read More
                        </Button>                              
                    </Stack>
                </Stack>   
              </Grid> 
              <Grid item xs={12} md={6} sx={{ alignItems: 'center', mt: 85 }}>
                <ContentStyle>
                  <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=dA0VGEbbw4g'
                    width='100%'
                    height='40vh'
                    style={{
                      borderRadius: '50px',
                      overflow: 'hidden'
                    }}
                  />
                </ContentStyle>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </RootStyle>
  );
}
