import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Admission from '@/components/admission/Admission';
import AdmissionForm from '@/components/form/AdmissionForm';



export const metadata = { title: "Admission" };

const AdmissionPage = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Admission" subtitle="Admission" />
        <Admission />
    
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AdmissionPage;
