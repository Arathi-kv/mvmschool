import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Academics from '@/components/academics/Academics';
import AdministrationOne from '@/components/administration/AdministrationOne';

export const metadata = { title: "Academics" };

const CurriculumPage = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Academics" subtitle="Academics" />
      <AdministrationOne></AdministrationOne>
        <Academics></Academics>
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default CurriculumPage;
