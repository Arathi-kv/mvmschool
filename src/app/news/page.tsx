

import News from '@/components/news/News';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
title: "News",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="News" subtitle="News" />
        <News />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;