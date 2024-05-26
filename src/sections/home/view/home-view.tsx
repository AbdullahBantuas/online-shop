'use client';


import { useEffect } from 'react';
import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeWho from '../home-who';
import HomeMinimal from '../HomeMinimal';
import HomeComments from '../home-comments';
import HomeDetails from '../HomeDetails';
import HomeProducts from '../home-products';
import HomeNews from '../home-news';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'clip',
  // Height: '100em',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <ContentStyle>
        
        <HomeMinimal />

        <HomeWho />

        <HomeProducts />

        <HomeComments />

        <HomeNews />

        <HomeDetails />
      
      </ContentStyle>

    </MainLayout>
  );
}
