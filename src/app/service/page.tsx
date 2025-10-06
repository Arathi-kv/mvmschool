

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Service from '@/components/service/Service';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';


export const metadata = {
  title: "Service Tecch - Technology & IT Solutions Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Our Service" subtitle="Service" />
        <Service />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;