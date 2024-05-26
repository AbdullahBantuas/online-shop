// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack, Grid } from '@mui/material';
// components
import Logo from '../../components/logo';
import SocialsButton from '../../components/SocialsButton';
import { useResponsive } from 'src/hooks/use-responsive';
// ----------------------------------------------------------------------

export default function MainFooter() {
  const isDesktop = useResponsive('up', 'sm');
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        {isDesktop ? (
          <>
            <Stack direction='row' spacing={80}>
              <Typography variant="body2" component="p" sx={{ color: isLight ? 'primary.dark' : 'primary.main', fontWeight: 'bold' }}>
                © 2023 All Right Reserves Foodo
                {/* <Link href="https://www.apgitsolutions.com/">AP Global IT Solutions, Inc.</Link> */}
              </Typography>

              <Stack direction='row' spacing={5}>
                <Typography variant="body2" component="p" sx={{ color: isLight ? 'primary.dark' : 'primary.main', fontWeight: 'bold' }}>
                  Terms & Conditions
                </Typography>
                <Typography variant="body2" component="p" sx={{ color: isLight ? 'primary.dark' : 'primary.main', fontWeight: 'bold' }}>
                  Privacy Policy
                </Typography>
              </Stack>
            </Stack>
          </>
        ) : (
          <>
            <Stack direction='column'>
              <Typography variant="body2" component="p" sx={{ color: isLight ? 'primary.dark' : 'primary.main', fontWeight: 'bold' }}>
                © 2023 All Right Reserves Foodo
                {/* <Link href="https://www.apgitsolutions.com/">AP Global IT Solutions, Inc.</Link> */}
              </Typography>

              <Stack direction='column' >
                <Typography variant="body2" component="p" sx={{ color: isLight ? 'primary.dark' : 'primary.main', fontWeight: 'bold' }}>
                  Terms & Conditions
                </Typography>
                <Typography variant="body2" component="p" sx={{ color: isLight ? 'primary.dark' : 'primary.main', fontWeight: 'bold' }}>
                  Privacy Policy
                </Typography>
              </Stack>
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}

