

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb'; 
import Motto from '@/components/motto/Motto';


export const metadata = {
  title: "motto",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Motto" subtitle="Motto" />
        <Motto />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />      
    </Wrapper>
  );
};

export default index;