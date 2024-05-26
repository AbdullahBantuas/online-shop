// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
import Label from 'src/components/label';
import Iconify from '../../components/iconify';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import { navConfig2 } from './config-navigation2';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow, LoginButton } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const isMobile = useMediaQuery('(max-width:600px)');

  const isLight = theme.palette.mode === 'light';

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo
            sx={{
              width: { md: '75px', xs: '50px' },
              height: { md: '75px', xs: '50px' },
              // m: { md: 2, xs: 0 },
              color: 'white',
            }}
          />

          {mdUp ? (
            <>
              <Stack direction='row' spacing={45} alignItems='center' justifyContent='center'>
                <Typography
                  sx={{
                    fontSize: '29px',
                    color: isLight ? theme.palette.primary.dark : theme.palette.primary.main,
                    lineHeight: 0.5,
                    letterSpacing: 2,
                    fontWeight: '1000',
                  }}
                >
                  OnlineShop
                </Typography>

                {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig}/>}

                {/* <Stack direction='row' spacing={2}> */}
                  <IconButton 
                    size="small"
                    href={paths.cart}
                    // variant='contained'
                    sx={{
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      width: '50px',
                      height: '50px',
                      alignContent: 'right',
                      color: 'white',
                      alignItems: 'center',
                      '&:hover': {
                        color: 'primary.dark'
                      },
                    }}
                  >
                    <Iconify
                      icon="fluent:cart-16-regular"
                      width={30}
                      height={30}
                    />
                  </IconButton>
                  {/* <IconButton 
                    size="small"
                    href={paths.like}
                    // variant='contained'
                    sx={{
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      width: '50px',
                      height: '50px',
                      alignContent: 'right',
                      color: 'white',
                      alignItems: 'center',
                      '&:hover': {
                        color: 'primary.dark'
                      },
                    }}
                  >
                    <Iconify
                      icon="ph:heart"
                      width={30}
                      height={30}
                    />
                  </IconButton> */}
                {/* </Stack> */}
              </Stack>
            </>
          ) : (
            <>
              <Stack alignItems='center' justifyContent='center'>
                <Typography
                  sx={{
                    fontSize: '15.7px',
                    color: theme.palette.primary.main,
                    lineHeight: 0.5,
                    letterSpacing: 1,
                    fontWeight: '1000',
                  }}
                >
                  OnlineShop
                </Typography>
              </Stack>
            </>
          )}

          <Box sx={{ flexGrow: 3 }} />

          <SettingsButton
            sx={{
              ml: { xs: 1, md: 0 },
              mr: { md: 2 },
            }}
          />
                  
          {/* <Stack alignItems='center' justifyContent='center' justifyItems='center'>
            {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig}/>}
          </Stack> */}
          

          <Stack alignItems="center" justifyContent='center' direction={{ xs: 'row', md: 'row-reverse' }}>
          
          {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig2}/>}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}