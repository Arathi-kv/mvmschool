

import Blog from '@/components/blog/Blog';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Blog Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Blog" subtitle="Blog" />
        <Blog />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;