import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doggos } from "../data/doggos";
import InstagramFeed from "../components/section/InstagramFeed";
import Slider from "react-slick";

const getDoggos = () => {};

export async function loader({ params }) {
  return getDoggos(params.doggoId);
}

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

export const importAll = (r) => {
  let images = [];
  r.keys().forEach((item, index) => {
    images.push({ name: item.split("./")[1].split(".")[0], src: r(item) });
  });
  return images;
};

const DogoSlide = ({ images }) => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {images &&
        images.map((img, index) => (
          <img key={`${img.name}${index}`} src={img.src} alt={img.name} />
        ))}
    </Slider>
  );
};

const DoggoPage = () => {
  const { doggoId } = useParams();
  const doggo = doggos.filter((dog) => dog.name === doggoId)[0];
  const { name, breed, description, fullDescription, age, address } = doggo;

  const images = importAll(
    require.context(`../assets/images/jin`, false, /\.(png|jpe?g|svg)$/)
  );

  console.log(images);

  return (
    <DoggoPageContainer>
      <div className="doggo-banner">
        <h2 className="doggo-banner__name">{name}</h2>
        <p className="doggo-banner__breed">{breed}</p>
      </div>
      <div className="doggo-description">
        <p className="doggo-description__age">Age: {age} yeas old</p>
        <p className="doggo-description__address">Address: {address}</p>
        <p className="doggo-description__description">{description}</p>
        <p className="doggo-description__full-description">{fullDescription}</p>
      </div>
      <DogoSlide images={images} />
      <InstagramFeed />
    </DoggoPageContainer>
  );
};

const DoggoPageContainer = styled.div`
  .doggo-banner {
    margin: 0 1rem;
    background: #eee;
    padding: 1rem 2rem;
    border-radius: 1rem;
    &__name {
      margin-top: 1rem;
      text-transform: uppercase;
    }
    &__breed {
    }
  }
  .doggo-description {
    margin: 2rem 2rem;
    &__age {
    }
    &__address {
    }
    &__description {
    }
    &__full-description {
    }
  }

  .doggo-gallery {
    display: grid;
    padding: 2rem;
  }
`;

export default DoggoPage;
