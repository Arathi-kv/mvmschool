import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="About Us" subtitle="About Us" />
        <AboutHomeOne style_2={true} />
        <VideoHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AboutPage;
