import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import CurriculumHome from "@/components/curriculum/CurriculumHome"
import NewsHome from '@/components/news/NewsHome';


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
        
        
          {/* Shot Section for home only */}
        <CurriculumHome />
        <NewsHome></NewsHome>

       
      </main>

      <FooterOne />
    </Wrapper>
  );
};

export default IndexPage;
