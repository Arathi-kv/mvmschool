import Breadcrumb from '@/components/common/Breadcrumb';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import MembersList from '@/components/members/MembersList';
import React from 'react';

export const metadata = {
  title: "Managing Committee Members - Assabah School",
};

const Index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Managing Committee Members" subtitle="Our Members" />
        <MembersList />
        <CtaHomeOne style_2={true} />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default Index;
