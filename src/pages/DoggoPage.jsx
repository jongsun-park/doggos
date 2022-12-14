import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doggos } from "../data/doggos";
import InstagramFeed from "../components/section/InstagramFeed";

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
  r.keys().forEach((item) => {
    images.push({ name: item.split("./")[1].split(".")[0], src: r(item) });
  });
  return images;
};

const DogoGrid = ({ images }) => {
  return (
    <DogoGridContainer className="dogo-grid">
      {images &&
        images.slice(0, 6).map((img, index) => (
          <div
            key={`${img.name}${index}`}
            className={`grid-container grid${(index % 6) + 1}`}
          >
            <div
              className="grid-img"
              style={{ backgroundImage: `url(${img.src})` }}
              title={img.name ? img.name : "Doggo Image"}
            ></div>
          </div>
        ))}
    </DogoGridContainer>
  );
};

const DogoGridContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .grid-container {
    overflow: hidden;

    .grid-img {
      min-height: clamp(300px, 50vw, 600px);
      background-size: cover;
      background-position: center center;
      transition: all ease-out 300ms;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .grid1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  .grid2 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .grid3 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .grid4 {
    grid-area: 3 / 2 / 5 / 4;
  }
  .grid5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .grid6 {
    grid-area: 4 / 1 / 5 / 2;
  }
`;

const DoggoPage = () => {
  const { doggoId } = useParams();
  const doggo = doggos.filter((dog) => dog.name === doggoId)[0];
  const { name, breed, description, fullDescription, age, address } = doggo;

  // Find all images
  const raws = doggoId
    ? importAll(
        require.context(`../assets/images/doggos`, false, /\.(png|jpe?g|svg)$/)
      )
    : [];

  // Match images with name & Shuffle
  const images = raws
    .filter((doggo) => {
      const index = doggo.name.indexOf(name);
      return index === -1 ? false : true;
    })
    .sort(() => Math.random() - 0.5);

  return (
    <DoggoPageContainer>
      <div
        className="doggo-banner"
        style={{ backgroundImage: `url(${images[0].src})` }}
      >
        <div className="doggo-banner__backdrop">
          <h2 className="doggo-banner__name">{name}</h2>
          <p className="doggo-banner__breed">{breed}</p>
        </div>
      </div>
      <div className="doggo-description">
        <p className="doggo-description__age">Age: {age} yeas old</p>
        <p className="doggo-description__address">Address: {address}</p>
        <p className="doggo-description__description">{description}</p>
        <p className="doggo-description__full-description">{fullDescription}</p>
      </div>
      <DogoGrid images={images} />
      <InstagramFeed />
    </DoggoPageContainer>
  );
};

const DoggoPageContainer = styled.div`
  .doggo-banner {
    margin: 0 1rem;
    background: #eee;
    background-position: center;
    overflow: hidden;
    border-radius: 1rem;

    &__name {
      margin-top: 1rem;
      text-transform: uppercase;
    }

    &__breed {
    }

    &__backdrop {
      padding: 1rem 2rem;
      background: #00000088;
      transition: all ease-out 100ms;
      &:hover {
        background: #000000aa;
      }
      color: white;
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
