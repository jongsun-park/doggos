import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled, { keyframes } from "styled-components";
import Container from "../components/ui/Container";
import { useState } from "react";
import { colors } from "../utils/styles";
import { useEffect } from "react";

// Email JS
// https://www.emailjs.com/docs/examples/reactjs/

const EmailForm = ({ serviceId, templateId, publicId }) => {
  const form = useRef();
  const [message, setMessage] = useState("");

  // autofocus backup
  const nameEl = useRef(null);
  useEffect(() => {
    nameEl.current.focus();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
      (result) => {
        console.log(result.text);
        if (result.text === "OK") {
          setMessage("Thanks you! I Will Get Back to You as Soon as Possible");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email-me">
      <h2>Email Me</h2>
      {message && <p className="response-msg">{message}</p>}
      <label htmlFor="user_name">Name</label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        autofocus
        ref={nameEl}
        required
      />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" required />
      <label htmlFor="contact_type">Contact Type</label>
      <div className="contact_type">
        <input type="radio" id="work" name="type" value="work" checked />
        <label for="work">Work with Me</label>
        <input type="radio" id="club" name="type" value="club" />
        <label for="club">Join the Club</label>
        <input type="radio" id="chat" name="type" value="chat" />
        <label for="chat">Just Chat</label>
      </div>

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required />

      <div>
        <input type="checkbox" id="agree" name="agree" required />
        <label for="agree">
          I agree to the term of <ins title="dummy link">Doggos Agreement</ins>
        </label>
      </div>

      <input type="submit" value="Send" className="submit" />
    </form>
  );
};

const AboutPage = () => {
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const publicId = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

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
      />
    </AboutContainer>
  );
};

const fade = keyframes`
0% {
  opacity: 0;
  transform: translateY(40px);
}
100% {
  opacity: 1;
  transfrom: translateY(0);
}
`;

const AboutContainer = styled(Container)`
  background: none;
  max-width: 800px;
  margin: 0 auto;

  .email-me {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    border: 2px solid ${colors.gray[4]};
    border-radius: 4px;
    margin-bottom: 3rem;
    // box-shadow: 0 1em 1em 1em #33333311;

    h2 {
      margin-top: 0rem;
    }

    .response-msg {
      background: ${colors.green};
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      margin-top: 0;
      animation-name: ${fade};
      animation-duration: 200ms;
      animation-fill-mode: forwards;
    }

    input {
      margin-bottom: 1rem;
      &[type="checkbox"],
      &[type="radio"] {
        filter: saturate(0);
      }

      &[type="checkbox"] + label,
      &[type="radio"] + label {
        margin-right: 1em;
      }
    }

    #message {
      margin-bottom: 1em;
      min-height: 10em;
    }

    .submit {
      margin-top: 2rem;
      background: black;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      padding: 4px 0;
      cursor: pointer;
      transition: all ease-out 100ms;

      &:hover {
        background: #322a2a;
        border-color: #322a2a;
      }
    }
  }
`;

export default AboutPage;
