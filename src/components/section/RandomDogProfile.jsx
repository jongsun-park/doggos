import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const RandomDogProfile = () => {
  // https://dog.ceo/dog-api/
  const dogApi = "https://dog.ceo/api/breeds/image/random";
  const [profile, setProfile] = useState();
  const [visible, setVisible] = useState(false);

  const updateDoggo = () => {
    setVisible(false);
    fetch(dogApi)
      .then((res) => res.json())
      .then(({ message }) => {
        setProfile(message);
        setVisible(true);
      });
  };

  useEffect(() => {
    updateDoggo();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <ProfileContainer
          onClick={updateDoggo}
          key="img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
        >
          <motion.div
            className="img"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
          ></motion.div>
        </ProfileContainer>
      )}
    </AnimatePresence>
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

const ProfileContainer = styled(motion.div)`
  min-width: 240px;
  max-width: 240px;
  overflow: hidden;
  border-radius: 50%;
  // margin-bottom: 1rem;
  cursor: pointer;

  transition: all ease-out 200ms;

  // It will replace to framer
  // animation: 1s ${fadeIn} ease-out;

  &:hover {
    // box-shadow: 0rem 1rem 2rem rgb(0 0 0 / 20%);
    transform: translateY(-20px);
  }

  .img {
    aspect-ratio: 1 / 1;
    background-size: cover;
    transition: all ease-out 400ms;

    &:hover {
      // filter: grayscale(0.8);
      // transform: scale(1.1);
    }
  }
`;

export default RandomDogProfile;
