import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const RandomDogProfile = () => {
  // https://dog.ceo/dog-api/
  const dogApi = "https://dog.ceo/api/breeds/image/random";
  const [profile, setProfile] = useState();

  const updateDoggo = () => {
    fetch(dogApi)
      .then((res) => res.json())
      .then(({ message }) => setProfile(message));
  };

  useEffect(() => {
    updateDoggo();
  }, []);

  return (
    <ProfileContainer onClick={updateDoggo}>
      <div className="img" style={{ backgroundImage: `url(${profile})` }}>
        Dogo
      </div>
    </ProfileContainer>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProfileContainer = styled.div`
  min-width: 300px;
  max-width: 300px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 1rem;
  cursor: pointer;

  transition: all ease-out 200ms;

  //   It will replace to framer
  animation: 1s ${fadeIn} ease-out;

  &:hover {
    box-shadow: 0rem 1rem 2rem rgb(0 0 0 / 20%);
    transform: translateY(-20px);
  }

  .img {
    aspect-ratio: 1 / 1;
    background-size: cover;
    transition: all ease-out 200ms;

    &:hover {
      filter: grayscale(0.8);
      transform: scale(1.1);
    }
  }
`;

export default RandomDogProfile;
