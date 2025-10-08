import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ProjectHomeOne from '@/components/project/ProjectHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import Mission from '@/components/mission/Mission';
import Motto from '@/components/motto/Motto';


export const metadata = {
  title: "M.V.M Higher Secondary School",
};

const IndexPage = () => {
  return (
    <Wrapper>
      <HeaderOne />

      <main>
        {/* Hero / Banner Section */}
        <HeroHomeOne />

        {/* About Section */}
        <AboutHomeOne style_2={true} />

        {/* Mission Section */}
        <Mission />

        {/* Separate Motto section */}
         <Motto />

       
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default IndexPage;
