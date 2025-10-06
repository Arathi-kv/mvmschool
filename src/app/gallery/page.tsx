import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Gallery from '@/components/gallery/Gallery';


export const metadata = {
  title: "Gallery",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Gallery" subtitle="Gallery" />
        <Gallery></Gallery>
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;