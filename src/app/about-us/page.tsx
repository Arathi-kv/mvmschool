import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Mission from '@/components/mission/Mission';
import Motto from '@/components/motto/Motto';

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

        {/* Mission Section */}
        <Mission />

        {/* Separate Motto section */}
         <Motto />
         
        <VideoHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AboutPage;
