

import BlogSidebar from '@/components/blog-sidebar/BlogSidebar';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Blog Sidebar Tecch - Technology & IT Solutions Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Blog Sidebar" subtitle="Blog Sidebar" />
        <BlogSidebar />
      </main>
      <FooterOne />      
    </Wrapper>
  );
};

export default index;