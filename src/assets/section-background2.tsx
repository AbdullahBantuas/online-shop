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
    },
    [theme.breakpoints.down('sm')]: {
      width: '210vh',
    },
  }));

function SectionBackground2({ ...other }: BoxProps) {
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
        viewBox="0 0 1920 1080"
      >
        <g id="backgroundsection" clip-path="url(#clip0_518_16)">
        <rect width="1920" height="1080" fill="#e1e3e3"/>
        <circle id="Ellipse 288" cx="37" cy="157" r="223.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="14 14"/>
        <circle id="Ellipse 287" cx="37" cy="157" r="173.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="14 14"/>
        <circle id="Ellipse 289" cx="960" cy="1108" r="248.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="14 14"/>
        <circle id="Ellipse 290" cx="960" cy="1108" r="188.5" stroke={PRIMARY_DARK} stroke-width="3" stroke-dasharray="14 14"/>
        </g>
        <defs>
        <clipPath id="clip0_518_16">
        <rect width="1920" height="1080" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </BoxStyle>
  );
}

export default memo(SectionBackground2);
