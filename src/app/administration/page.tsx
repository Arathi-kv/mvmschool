import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Breadcrumb from "@/components/common/Breadcrumb";
import Administration from "@/components/administration/Administration";

export const metadata = { title: "Administration" };

const AdministrationPage = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Administration" subtitle="Administration" />
        <Administration />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AdministrationPage;
