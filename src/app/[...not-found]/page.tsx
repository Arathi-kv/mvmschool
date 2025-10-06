import Breadcrumb from "@/components/common/Breadcrumb";
import Error from "@/components/error/Error";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Error || 404 Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Error" subtitle="Error" />
        <Error />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;