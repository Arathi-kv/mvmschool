

import Breadcrumb from '@/components/common/Breadcrumb';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import Team from '@/components/team/Team';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "About Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Our Team" subtitle="Our Team" />
        <Team />
        <CtaHomeOne style_2={true} />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;