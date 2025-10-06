import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import HeroHomeThree from '@/components/hero/HeroHomeThree';
import BrandHomeOne from '@/components/brand/BrandHomeOne';

const HomeThreePage = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <HeroHomeThree />
        <BrandHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default HomeThreePage;
