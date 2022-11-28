import { NavLink, useRouteError } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/styles";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <PageContainer>
      {/* https://lottiefiles.com/80698-404-error */}
      <h1>Oops!</h1>
      <iframe
        title="animation for 404 error web page"
        src="https://embed.lottiefiles.com/animation/80698"
      ></iframe>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <NavLink to="/" className="link_home">
        Go back to Home
      </NavLink>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
  }

  iframe {
    border: none;
    height: 100vw;
    width: 100%;
    max-width: 500px;
    max-height: 300px;
    margin: 0;
  }

  .link_home {
    position: relative;
    transition: all ease-out 100ms;
    color: ${colors.gray[4]};

    &:hover {
      color: ${colors.gray[9]};
    }

    &::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background: ${colors.gray[9]};
      top: 100%;
      left: 0;
      transition: all ease-out 100ms;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default ErrorPage;
