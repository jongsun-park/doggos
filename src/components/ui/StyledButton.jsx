import styled, { css } from "styled-components";
import { colors } from "../../utils/styles";

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
  background-color: transparent;

  & + & {
    margin-left: 10px;
  }

  // primary button
  ${(props) =>
    props.primary &&
    css`
      background-color: ${colors.gray[7]};
      border-color: ${colors.gray[7]};
      color: ${colors.gray[0]};
    `}

  // hover state
    &:hover {
    background-color: ${colors.gray[9]};
    border-color: ${colors.gray[9]};
    color: ${colors.gray[0]};
  }
`;

export default StyledButton;
