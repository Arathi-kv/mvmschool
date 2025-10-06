

import Breadcrumb from '@/components/common/Breadcrumb';
import ProductDetails from '@/components/details/ProductDetails';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Project Details Tecch - Technology & IT Solutions Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Project Details" subtitle="Project Details" />
        <ProductDetails />      
      </main>
      <FooterOne />
      
    </Wrapper>
  );
};

export default index;