import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import TeamHomeTwo from '../../components/management/TeamHomeTwo';
import MembersList from '../../components/members/MembersList';
export const metadata = {
  title: "Management",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Management" subtitle="Management" />
        <TeamHomeTwo></TeamHomeTwo>
        <MembersList></MembersList>
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;