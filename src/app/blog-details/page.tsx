

import Breadcrumb from '@/components/common/Breadcrumb';
import BlogDetails from '@/components/details/BlogDetails';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Blog Details Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Blog Details" subtitle="Blog Details" />
        <BlogDetails />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;