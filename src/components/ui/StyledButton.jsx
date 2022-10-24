import styled, { css } from "styled-components";

const StyledButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

const Button = styled.button`
  // general button
  padding: 4px 16px;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid;
  border-radius: 4px;
  transition: all ease-out 200ms;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }

  // primary button
  ${(props) =>
    props.primary &&
    css`
      background-color: #333;
      border-color: #333;
      color: white;
    `}

  // hover state
    &:hover {
    background-color: #111;
    border-color: #111 !important;
    color: white;
  }
`;

export default StyledButton;
