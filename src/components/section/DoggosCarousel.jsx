import styled from "styled-components";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

import { doggos } from "../../data/doggos";
import bg from "../../assets/images/swiper-bg.jpg";

const DoggoSlide = ({ doggo }) => {
  const { name, breed, description, age, address } = doggo;
  return (
    <DoggoSlideContainer
      className="slide-container"
      data-swiper-parallax-opacity="0.3"
    >
      <div className="title" data-swiper-parallax="-300">
        {name.toUpperCase()}
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        {breed} - {age} yrs - {address}
      </div>
      <div className="description" data-swiper-parallax="-100">
        <p>{description}</p>
      </div>
      <Link
        className="link"
        data-swiper-parallax="-50"
        to={`doggos/${doggo.name}`}
      >
        Learn more
      </Link>
    </DoggoSlideContainer>
  );
};

const DoggoSlideContainer = styled.div`
  .title {
    font-size: 4rem;
    margin: 1.4rem 0;
  }
  .subtitle {
    font-weight: bold;
    margin-bottom: 1.4rem;
  }
  .description {
    margin-bottom: 3rem;
    max-width: 50ch;
  }
  .link {
    padding: 10px 20px;
    background: black;
    color: white;
    border-radius: 5px;
    transition: all ease-out 200ms;

    &:hover {
      background: white;
      color: black;
    }
  }
`;

const DoggosCarousel = () => {
  return (
    <SwiperContainer>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="doggo-swiper"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* BG */}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bg})`,
          }}
          data-swiper-parallax="-23%"
        ></div>

        {/* Slides */}
        {doggos.map((doggo, index) => {
          // console.log(doggo.name);
          const key = doggo.name || index;
          return (
            <SwiperSlide key={key}>
              <DoggoSlide doggo={doggo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  .doggo-swiper {
  }

  .swiper {
    width: 100%;
    height: 100%;
    background: #000;
  }

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    min-height: calc(
      100vh - 10em
    ); // TODO: Replcase 10em to exact size of header
  }

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
  }
`;

export default DoggosCarousel;
