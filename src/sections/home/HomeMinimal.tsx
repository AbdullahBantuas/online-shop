// 
import { m } from 'framer-motion';
import Slider from 'react-slick';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, Container, Typography, Stack, Grid, Box, Divider } from '@mui/material';
// components
import { useResponsive } from 'src/hooks/use-responsive';
import Iconify from '../../components/iconify';
import useSettings from '../../hooks/useSettings';
import { MotionViewport, varFade } from '../../components/animate';
import './HomeMininmal.scss';
// ----------------------------------------------------------------------

// const CARDS = [
//   {
//     icon: 'healthicons:call-centre-outline',
//     title: 'IT Consultation',
//     description:
//       'Podcasting Optonal Change Management Inside Of Workflows To Establish A Framework.',
//   },
//   {
//     icon: 'material-symbols:shield-lock-outline',
//     title: 'Data Security',
//     description: 'Leverage Agile Frameworks To Provide A Robust Synopsis For High Level Overviews.',
//   },
//   {
//     icon: 'carbon:gui-management',
//     title: 'Digital Marketing',
//     description:
//       'Capitalize On Low Hanging Fruit Identify A Ballpark Added Value Activity To Beta Test.',
//   },
//   {
//     icon: 'grommet-icons:cloud-computer',
//     title: 'Cloud Services',
//     description: 'Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.',
//   },
// ];

// const RootStyle = styled('div')(({ theme }) => ({
//   paddingTop: theme.spacing(15),
//   paddingRight: theme.spacing(3.5),
//   [theme.breakpoints.up('md')]: {
//     paddingBottom: theme.spacing(8),
//   },
// }));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(5),
  },
}));

// const SliderStyle = styled(Slider)(({ theme }) => ({
//   '& .slick-track': {
//     display: 'flex',
//     gap: theme.spacing(5),
//     '& .slick-slide': {
//       display: 'flex',
//       height: 'auto',
//       alignItems: 'flex-start',
//       justifyContent: 'center',
//     },
//   },
//   '& .slick-dots li button:before': {
//     color: theme.palette.primary.dark,
//     fontSize: 12,
//     marginTop: theme.spacing(2),
//   },
//   '& .slick-dots li.slick-active button:before': {
//     color: theme.palette.primary.main,
//   },
//   [theme.breakpoints.down('md')]: {
//     '& .slick-track': {
//       '& .slick-slide': {
//         alignItems: 'center',
//       },
//     },
//   },
// }));
// const CardStyle = styled(Card)({
//   backgroundImage: '/assets/backgrounds/service-bg-1.png',
//   backgroundSize: 'cover',
// });
// const CardBG = styled(m.img)({
//   pointerEvents: 'none',
//   position: 'absolute',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   height: '100%',
//   width: '100%',
// });
// ----------------------------------------------------------------------
export default function HomeMinimal() {
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useResponsive('up', 'sm');

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
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
    <RootStyle>
      <Box sx={{ overflow: 'hidden' }}>
      <Container maxWidth={themeStretch ? false : 'xl'} component={MotionViewport} sx={{ mt: { xs: '-75px' }, pt: { md:'100px' } }}>
        <Grid
            {...settings}
            container
            md={12}
            sx={{
              zIndex: 99,
              position: 'relative',
              mt: 10,
              p: 3,
              width: '100%',
              pl: { md: 20 },
              pb: { xs: 10 },
              pt: { xs: 10 }
            }}
            spacing={{ md:2, xs: 5 }}
          >
            {isDesktop ? (
              <>
                <Grid item md={4}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Card sx={{ bgcolor: '#E1E3E3', width: '90px', height: '90px', borderRadius: '50px' }}>
                        <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                          <Iconify
                            icon="iconamoon:discount"
                            sx={{ width: '50px', height: '50px', color: 'primary.main' }}
                          />
                        </Stack>
                      </Card>
                      <Stack direction="column" alignItems="left" sx={{ pl: { md: 1, xs: 3 }, color: isLight ? 'common.black' : 'common.white' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                          Discount Voucher 
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                          Loren Ipsum is Simply Dummy <br />
                          Text Of The Printing
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem/>
                    </Stack>
                  </m.div>
                </Grid>
                <Grid item md={4}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Card sx={{ bgcolor: '#E1E3E3', width: '90px', height: '90px', borderRadius: '50px' }}>
                        <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                          <Iconify icon="clarity:new-line" sx={{ width: '50px', height: '50px', color: 'primary.main' }} />
                        </Stack>
                      </Card>
                      <Stack direction="column" alignItems="left" sx={{ pl: { md: 1, xs: 3 }, color: isLight ? 'common.black' : 'common.white' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                          New Arrival Products
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                          Loren Ipsum is Simply Dummy <br />
                          Text Of The Printing
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem/>
                    </Stack>
                  </m.div>
                </Grid>
                <Grid item md={4}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Card sx={{ bgcolor: '#E1E3E3', width: '90px', height: '90px', borderRadius: '50px' }}>
                        <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                          <Iconify icon="carbon:delivery" sx={{ width: '50px', height: '50px', color: 'primary.main' }} />
                        </Stack>
                      </Card>
                      <Stack direction="column" alignItems="left" sx={{ pl: { md: 1, xs: 3 }, color: isLight ? 'common.black' : 'common.white' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                          Fast Delivery
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                          Loren Ipsum is Simply Dummy <br />
                          Text Of The Printing
                        </Typography>
                      </Stack>
                    </Stack>
                  </m.div>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction="row" alignItems="center">
                      <Card sx={{ bgcolor: '#E1E3E3', width: '150px', height: '90px', borderRadius: '50px' }}>
                        <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                          <Iconify
                            icon="iconamoon:discount"
                            sx={{ width: '50px', height: '50px', color: 'primary.main' }}
                          />
                        </Stack>
                      </Card>
                      <Stack direction="column" alignItems="left" sx={{ pl: { md: 1, xs: 3 }, color: isLight ? 'common.black' : 'common.white' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                          Discount Voucher 
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                          Loren Ipsum is Simply Dummy 
                          Text Of The Printing
                        </Typography>
                      </Stack>
                    </Stack>
                  </m.div>
                </Grid>
                <Grid item xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction="row" alignItems="center">
                      <Card sx={{ bgcolor: '#E1E3E3', width: '150px', height: '90px', borderRadius: '50px' }}>
                        <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                          <Iconify icon="clarity:new-line" sx={{ width: '50px', height: '50px', color: 'primary.main' }} />
                        </Stack>
                      </Card>
                      <Stack direction="column" alignItems="left" sx={{ pl: { md: 1, xs: 3 }, color: isLight ? 'common.black' : 'common.white' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                          New Arrival Products
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                          Loren Ipsum is Simply Dummy 
                          Text Of The Printing
                        </Typography>
                      </Stack>
                    </Stack>
                  </m.div>
                </Grid>
                <Grid item xs={12}>
                  <m.div variants={varFade().inLeft}>
                    <Stack direction="row" alignItems="center">
                      <Card sx={{ bgcolor: '#E1E3E3', width: '150px', height: '90px', borderRadius: '50px' }}>
                        <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                          <Iconify icon="carbon:delivery" sx={{ width: '50px', height: '50px', color: 'primary.main' }} />
                        </Stack>
                      </Card>
                      <Stack direction="column" alignItems="left" sx={{ pl: { md: 1, xs: 3 }, color: isLight ? 'common.black' : 'common.white' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>
                          Fast Delivery
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'left' }}>
                          Loren Ipsum is Simply Dummy 
                          Text Of The Printing
                        </Typography>
                      </Stack>
                    </Stack>
                  </m.div>
                </Grid>
              </>
            )}
          </Grid>
      </Container>
      </Box>
    </RootStyle>
  );
}
