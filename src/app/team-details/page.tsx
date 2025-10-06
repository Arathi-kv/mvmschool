

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import TeamDetails from '@/components/details/TeamDetails';

export const metadata = {
  title: "Team Details Tecch - Technology & IT Solutions Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Team Details" subtitle="Team Details" />
        <TeamDetails />
        
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;