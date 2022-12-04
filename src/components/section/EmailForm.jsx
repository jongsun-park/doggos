import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styled, { keyframes } from "styled-components";

import { regex } from "../../utils/regex";
import { colors } from "../../utils/styles";

// Email JS
// https://www.emailjs.com/docs/examples/reactjs/

const EmailForm = ({
  serviceId,
  templateId,
  publicId,
  email,
  onChangeEmail,
  reset,
}) => {
  const form = useRef();
  const msgReg = useRef();
  const [message, setMessage] = useState("");
  const [validate, setValidate] = useState(false);

  // autofocus backup
  const nameEl = useRef(null);
  useEffect(() => {
    nameEl.current.focus();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.scrollIntoView();

    if (email.user_name === "") {
      setValidate(false);
      setMessage("Please enter name!");
      return;
    }

    if (email.user_email === "") {
      setValidate(false);
      setMessage("Please enter email!");
      return;
    }

    if (email.message === "") {
      setValidate(false);
      setMessage("Please enter message!");
      return;
    }

    if (email.agree === false) {
      setValidate(false);
      setMessage("Please check agree box!");
      return;
    }

    setValidate(true);
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

    reset();
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail} className="email-me">
      <h2>Email Me</h2>
      {message && (
        <p
          ref={msgReg}
          className={`response-msg ${validate ? "success" : "error"}`}
        >
          {message}
        </p>
      )}
      <label htmlFor="user_name">Name</label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        autoFocus
        ref={nameEl}
        pattern={regex.textAndSpace}
        title="Please add Text and Space"
        // required
        value={email["user_name"]}
        onChange={onChangeEmail}
      />
      <label htmlFor="user_email">Email</label>
      <input
        type="email"
        name="user_email"
        id="user_email"
        // pattern={regex.email}
        // required
        value={email["user_email"]}
        onChange={onChangeEmail}
      />
      <label htmlFor="contact_type">Contact Type</label>
      <div className="contact_type">
        <input type="radio" id="work" name="type" value="work" />
        <label htmlFor="work">Work with Me</label>
        <input type="radio" id="club" name="type" value="club" />
        <label htmlFor="club">Join the Club</label>
        <input type="radio" id="chat" name="type" value="chat" />
        <label htmlFor="chat">Just Chat</label>
      </div>

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        value={email["message"]}
        onChange={onChangeEmail}
      />

      <div>
        <input
          type="checkbox"
          id="agree"
          name="agree"
          value={email["agree"]}
          onChange={onChangeEmail}
        />
        <label htmlFor="agree">
          I agree to the term of <ins title="dummy link">Doggos Agreement</ins>
        </label>
      </div>

      <input type="submit" value="Send" className="submit" />
    </FormContainer>
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

const FormContainer = styled.form`
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
    background: ${colors.green[8]};
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 0;
    animation-name: ${fade};
    animation-duration: 200ms;
    animation-fill-mode: forwards;

    &.error {
      background: ${colors.red[8]};
    }
  }

  input {
    margin-bottom: 1rem;
    border-radius: 2px;
    &[type="checkbox"],
    &[type="radio"] {
      filter: saturate(0);
    }

    &[type="checkbox"] + label,
    &[type="radio"] + label {
      margin-right: 1em;
    }

    8:invalid {
      border: 2px solid ${colors.red[8]};
    }
  }

  #message {
    margin-bottom: 1em;
    min-height: 10em;
  }

  .submit {
    margin-top: 2rem;
    background: ${colors.gray[6]};
    border-color: ${colors.gray[6]};
    color: white;
    font-weight: bold;
    border-radius: 4px;
    padding: 4px 0;
    cursor: pointer;
    transition: all ease-out 100ms;

    &:hover {
      background: ${colors.gray[9]};
      border-color: ${colors.gray[9]};
    }
  

`;

export default EmailForm;
