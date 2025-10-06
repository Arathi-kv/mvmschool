

import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Facilities from '../../components/facilities/Facilities';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import FeatureHomeThree from '@/components/feature/FeatureHomeThree';

export const metadata = {
  title: "Facilities",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
         <Breadcrumb title="Facilities" subtitle="Facilities" />
           <FeatureHomeThree />
          <Facilities />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;