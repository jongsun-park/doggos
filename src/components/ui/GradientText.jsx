import styled, { css } from "styled-components";

const GradientText = ({ text, styles, gradient }) => {
  return (
    <HeadingContainer styles={styles} gradient={gradient}>
      {text}
    </HeadingContainer>
  );
};

export default GradientText;

const defaultGradient = `-webkit-linear-gradient(
    10deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(87, 29, 253, 1) 50%
  );`;

const HeadingContainer = styled.h1`
  font-size: 72px;
  background: ${(props) =>
    props.gradient
      ? `-webkit-linear-gradient(
   ${props.gradient}
  );`
      : defaultGradient}

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${(props) =>
    css`
      ${props.styles}
    `}
`;
