import { useState } from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";

import RandomDogProfile from "../components/section/RandomDogProfile";
import DoggoForm from "../components/ui/DoggoForm";
import DoggosTable from "../components/ui/DoggosTable";
import GradientText from "../components/ui/GradientText";
import AnimateBackground from "../components/ui/AnimateBackground";

const ContactPage = () => {
  const [doggosData, setDoggosData] = useState([]);

  const initDoggo = {
    name: "",
    breed: "",
    birth: "2022-10-19",
    color: "#ffffff",
  };

  const [doggoData, setDoggoData] = useState(initDoggo);

  const resetDoggo = () => {
    setDoggoData(initDoggo);
  };

  const addDoggo = (e) => {
    e.preventDefault();
    setDoggosData((prev) => [doggoData, ...prev]);
    resetDoggo();
  };

  const changeDoggo = ({ target }) => {
    setDoggoData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const getFakeDoggo = () => {
    const name = faker.name.fullName();
    const breed = faker.animal.dog();
    const date = new Date().toISOString().split("T")[0];
    const color = faker.color.rgb({ prefix: "#" });

    const randomDoggo = {
      name: name,
      breed: breed,
      birth: date,
      color: color,
    };

    setDoggosData((prev) => [randomDoggo, ...prev]);
  };

  return (
    <AnimateBackground>
      <Container>
        <GradientText
          text="Submit your doggos"
          styles={{
            fontSize: "4em",
            margin: "0 0 3rem",
            textShadow: "0 4px 12px rgb(0 0 0 / 5%)",
          }}
          gradient="0deg, #283618 0%, #bc6c25 100%"
        />
        <RandomDogProfile />
        <DoggoForm
          data={doggoData}
          onChange={changeDoggo}
          onSubmit={addDoggo}
          onReset={resetDoggo}
          getFakeDoggo={getFakeDoggo}
        />

        <hr />
        <DoggosTable data={doggosData} />
      </Container>
    </AnimateBackground>
  );
};

const Container = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ContactPage;
