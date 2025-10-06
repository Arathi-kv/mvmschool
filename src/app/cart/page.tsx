

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Cart from '@/components/Cart/Cart';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';


export const metadata = {
  title: "Cart Tecch - Technology & IT Solutions Next js Template",
};




const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Cart" subtitle="Cart" />
        <Cart />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;