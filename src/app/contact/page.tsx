

import Breadcrumb from '@/components/common/Breadcrumb';
import Contact from '@/components/contact/Contact';
import ContactForm from '@/components/form/ContactForm';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Contact",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Contact" subtitle="Contact" />
        <Contact />
        <ContactForm />
      </main>
      <FooterOne />      
    </Wrapper>
  );
};

export default index;