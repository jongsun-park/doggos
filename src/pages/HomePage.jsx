import DoggoIpsum from "../components/section/DoggoIpsum";
import DoggosCarousel from "../components/section/DoggosCarousel";
import SubmitYourDoggoBanner from "../components/section/SubmitYourDoggoBanner";
import InstagramFeed from "../components/section/InstagramFeed";

const HomePage = () => {
  return (
    <>
      <DoggosCarousel />
      <DoggoIpsum />
      <SubmitYourDoggoBanner />
      <InstagramFeed />
    </>
  );
};

export default HomePage;
