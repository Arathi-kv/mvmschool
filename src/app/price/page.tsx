

import Breadcrumb from '@/components/common/Breadcrumb';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import Price from '@/components/pricing/Price';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Price Tecch - Technology & IT Solutions Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Our Price" subtitle="Price" />
        <Price />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;