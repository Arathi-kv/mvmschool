import React from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Project from '@/components/project/Project';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import CtaHomeOne from '@/components/cta/CtaHomeOne'; // <-- added import

export const metadata = {
  title: "Project Tecch - Technology & IT Solutions Next js Template",
};

const Index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Our Project" subtitle="Our Project" />
        <Project />
        <CtaHomeOne style_2={true} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default Index;
