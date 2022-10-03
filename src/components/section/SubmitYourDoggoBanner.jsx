import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../ui/Container";
import { colors, bp } from "../../utils/styles";
import bannerBg from "../../assets/videos/home-submit-banner-bg-low.mp4";

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
            Tell us more about your Doggo
          </Link>
        </div>
      </div>
    </SubmitYourDoggoBannerContainer>
  );
};

const SubmitYourDoggoBannerContainer = styled(Container)`
  background: transparent;

  .home-submit-banner {
    // border: 4px solid ${colors.gray[9]};

    border-radius: 1rem;
    padding: 0 3rem;
    aspect-ratio: 16 / 9;
    // min-height: 400px;
    // max-height: 650px;

    @media (max-width: ${bp.m}) {
      aspect-ratio: 9 / 16;
      padding: 0 1rem;
    }

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
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    &__title {
      margin: 0 0 1rem;
      font-size: clamp(2rem, 8vw, 6rem);
      @media (max-width: ${bp.l}) {
        font-size: clamp(2rem, 8vw, 2rem);
      }
    }
    &__description {
      margin: 0 0 2rem;
      max-width: 50ch;
      @media (max-width: ${bp.s}) {
      }
    }
    &__link {
      margin-bottom: 1rem;
      background: ${colors.gray[2]};
      padding: 8px 16px;
      border-radius: 4px;
      transition: all ease-out 300ms;

      &:hover {
        background: ${colors.gray[9]};
        color: ${colors.gray[0]};
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
        left: -100%;
        top: 0;
      }
    }
  }
`;

export default SubmitYourDoggoBanner;
