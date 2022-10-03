import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doggos } from "../../data/doggos";
import placeholderImg from "../../assets/images/corgi.png";

const DoggoSlide = ({ doggo }) => {
  const { name, breed, description, age, address, profile } = doggo;
  return (
    <SlideContainer
      className="home-doggos-slide"
      bg={profile || placeholderImg}
    >
      <Link to={`doggos/${name}`}>
        <h2 className="home-doggos__name">{name}</h2>
      </Link>
      <p className="home-doggos__spec">
        {breed} / {age} years old / {address}
      </p>
      <p className="home-doggos__description">{description}</p>

      <Link to={`doggos/${name}`} className="home-doggos__link">
        Learn more about <span className="home-doggos__link__name">{name}</span>
      </Link>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  ${(props) => css`
    background-image: url(${props.bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  `}
  .home-doggos__name {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0;
  }
  .home-doggos__spec {
  }
  .home-doggos__description {
    max-width: 70%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .home-doggos__link {
    background: #333;
    color: white;
    padding: 8px 16px;
    line-height: 1;
    border-radius: 4px;
    display: inline-flex;

    &__name {
      margin-left: 6px;
      text-transform: capitalize;
    }
  }
`;

const DoggosCarousel = () => {
  const settings = {
    fade: true,
    infinite: true,
    dots: true,
    arrows: false,
    speed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer className="home-doggos-carousel">
      <Slider {...settings}>
        {doggos.map((doggo) => (
          <DoggoSlide key={doggo.name} doggo={doggo} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 2rem 3rem;
`;

export default DoggosCarousel;
