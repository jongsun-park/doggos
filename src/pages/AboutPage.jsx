import React, { useState } from "react";

import styled from "styled-components";
import Container from "../components/ui/Container";
import EmailForm from "../components/section/EmailForm";

const AboutPage = () => {
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const publicId = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const initEmail = {
    user_name: "",
    user_email: "",
    message: "",
    agree: false,
  };

  const [email, setEmail] = useState(initEmail);

  const resetEmail = () => setEmail(initEmail);

  const onChangeEmail = (e) => {
    console.log(email);
    setEmail((prevEmail) => ({
      ...prevEmail,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AboutContainer>
      <h1>Hey, I'm Jongsun Park</h1>
      <p>
        I'm previously working as web developer & designer. Facinated to
        buidling straight forward website for business and their clients.
      </p>
      <p>
        Currently working for CPL onsite at Twitter as SME (Specific Matter
        Expert) which has responsibility to support CPL Trust Safety team on
        Quantity side. Like assigned target for individual also support their
        any troublesome.
      </p>
      <p>
        Obviously, I'm dog lover. Live with two dogs and they have lots friends
        crossing Dundalk, Ireland
      </p>
      <p>
        If you want to hang out with me, feel free to contact via any method
        like email, linkedin or instagram.{" "}
      </p>
      <EmailForm
        serviceId={serviceId}
        templateId={templateId}
        publicId={publicId}
        email={email}
        onChangeEmail={onChangeEmail}
        reset={resetEmail}
      />
    </AboutContainer>
  );
};

const AboutContainer = styled(Container)`
  background: none;
  max-width: 800px;
  margin: 0 auto;
  }
`;

export default AboutPage;
