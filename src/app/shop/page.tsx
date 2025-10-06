

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import Product from '@/components/shop/Product';



export const metadata = {
  title: "Shop Tecch - Technology & IT Solutions Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Shop" subtitle="Shop" />
        <Product />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;