import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Admission from '@/components/admission/Admission';
import Admissionform from '@/components/form/Admissionform';


export const metadata = { title: "Admission" };

const AdmissionPage = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Admission" subtitle="Admission" />
        <Admission />
        <Admissionform />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AdmissionPage;
