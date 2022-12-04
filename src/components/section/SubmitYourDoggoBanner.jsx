import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../ui/Container";
import { colors, bp } from "../../utils/styles";
import bannerBg from "../../assets/videos/home-submit-banner-bg.mp4";

const SubmitYourDoggoBanner = () => {
  return (
    <SubmitYourDoggoBannerContainer>
      <div className="home-submit-banner">
        {/* Background Video */}
        <video autoPlay muted loop className="home-submit-banner__bg">
          <source src={bannerBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="home-submit-banner__inner">
          <h2 className="home-submit-banner__title">Submit Your Doggo</h2>
          <p className="home-submit-banner__description">
            Shooberino many pats borkf extremely cuuuuuute, ur givin me a spook
            heckin angery woofer.{" "}
          </p>
          <Link to="contact" className="home-submit-banner__link">
            <span>Tell us more about your Doggo</span>
          </Link>
          <div className="home-submit-banner__filter"></div>
        </div>
      </div>
    </SubmitYourDoggoBannerContainer>
  );
};

const SubmitYourDoggoBannerContainer = styled(Container)`
  background: transparent;

  .home-submit-banner {
    // border: 4px solid ${colors.gray[9]};
    max-height: 95vh;
    margin: auto;

    border-radius: 4px;
    // padding: 0 3rem;
    aspect-ratio: 16 / 9;
    // min-height: 400px;
    // max-height: 650px;

    position: relative;
    overflow: hidden;

    transition: all ease-out 300ms;
    box-shadow: 0rem 0px 10px rgb(0 0 0 / 10%);

    &:hover {
      box-shadow: 0rem 20px 1rem rgb(0 0 0 / 20%);
    }

    &__inner {
      color: ${colors.gray[0]};
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    &__filter {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: -1;
    }

    &__title {
      margin: 0 0 1rem 1rem;
      font-size: 4rem;
      @media (max-width: ${bp.l}) {
        font-size: 3rem;
      }
    }
    &__description {
      margin: 0 0 2rem 1rem;
      max-width: 50ch;
      @media (max-width: ${bp.s}) {
      }
    }
    &__link {
      margin: 0 1rem 1rem 1rem;
      background: ${colors.gray[0]};
      padding: 8px 16px;
      border: 2px solid ${colors.gray[9]};
      border-radius: 4px;
      transition: all ease-out 300ms;
      position: relative;

      span {
        z-index: 10;
        display: inline-block;
      }

      &::after {
        transition: all ease-out 100ms;
        content: "Let Submit Your Doggo";

        width: 0%;
        height: calc(100% + 2px);
        position: absolute;
        background-color: ${colors.gray[9]};
        color: white;
        left: 0;
        top: -1px;
        white-space: nowrap;
        overflow: hidden;
        line-height: 2.4;
      }

      &:hover {
        // background: ${colors.gray[9]};
        // color: ${colors.gray[0]};

        &::after {
          width: calc(100% + 2px);
          padding: 0 20px;
        }
      }
    }
    &__bg {
      // display: none;
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      left: 0;
      top: 0;
      z-index: -1;

      @media (max-width: ${bp.m}) {
        left: 0;
        top: 0;
      }
    }

    @media (max-width: ${bp.m}) {
      aspect-ratio: 9 / 9;
      // padding: 0 1rem;
      &__title {
        font-size: 3rem;
        line-height: 1.1;
        margin-bottom: 3rem;
      }
      &__description {
        display: none;
      }
    }

    @media (max-width: ${bp.s}) {
      aspect-ratio: 9 / 16;
    }
  }
`;

export default SubmitYourDoggoBanner;
