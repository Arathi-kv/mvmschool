

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb'; 
import Testimonial from '@/components/testimonial/Testimonial';


export const metadata = {
  title: "Testimonial Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Testimonial" subtitle="Testimonial" />
        <Testimonial />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />      
    </Wrapper>
  );
};

export default index;