import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import BrandHomeTwo from '@/components/brand/BrandHomeTwo';

const HomeTwoPage = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <HeroHomeTwo />
        <BrandHomeTwo />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default HomeTwoPage;
