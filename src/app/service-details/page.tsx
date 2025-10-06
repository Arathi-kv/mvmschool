

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceDetails from '@/components/details/ServiceDetails';

export const metadata = {
  title: "Service Details Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Service Details" subtitle="Service Details" />
        <ServiceDetails />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;