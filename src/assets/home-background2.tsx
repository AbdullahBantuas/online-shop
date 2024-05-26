import { memo } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)(({ theme }) => ({
    lineHeight: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      objectFit: 'fill',
    },
    [theme.breakpoints.down('sm')]: {
      width: '200vh',
    },
  }));

function HomeBackground2({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <BoxStyle {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 2690 1350"
      >
        {/* <g id="Desktop - 1">
        <g clip-path="url(#clip0_501_10)">
        <rect width="2690" height="1350" rx="30" fill="#B6BCBC"/>
        <circle id="Ellipse 282" cx="2265" cy="1075" r="173.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 283" cx="2265" cy="1075" r="223.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 279" cx="1998" cy="340" r="849.5" fill={PRIMARY_DARK} stroke="black"/>
        <circle id="Ellipse 281" cx="1273" cy="-17" r="123.5" stroke="white" stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 280" cx="1273" cy="-17" r="149.5" stroke="white" stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 285" cy="675" r="173.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 284" cy="675" r="223.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        </g>
        </g>
        <defs> */}

        <g id="Desktop - 1">
        <g clip-path="url(#clip0_501_10)">
        <rect width="2690" height="1350" rx="30" fill="#B6BCBC"/>
        <circle id="Ellipse 282" cx="2299" cy="1125" r="173.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 283" cx="2299" cy="1125" r="223.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 279" cx="1943" cy="429" r="849.5" fill={PRIMARY_DARK} stroke="black"/>
        <circle id="Ellipse 281" cx="1273" cy="-17" r="123.5" stroke="white" stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 280" cx="1273" cy="-17" r="149.5" stroke="white" stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 285" cy="675" r="173.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        <circle id="Ellipse 284" cy="675" r="223.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="12 12"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_501_10">
        <rect width="2690" height="1350" rx="30" fill="white"/>
        </clipPath>
        </defs>
        {/* <clipPath id="clip0_501_10">
        <rect width="2690" height="1350" rx="30" fill="white"/>
        </clipPath>
        </defs> */}
      </svg>
    </BoxStyle>
  );
}

export default memo(HomeBackground2);