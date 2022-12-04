import { useState } from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";

import RandomDogProfile from "../components/section/RandomDogProfile";
import DoggoForm from "../components/ui/DoggoForm";
import DoggosTable from "../components/ui/DoggosTable";
import GradientText from "../components/ui/GradientText";
import AnimateBackground from "../components/ui/AnimateBackground";
import { colors } from "../utils/styles";

const ContactPage = () => {
  const [doggosData, setDoggosData] = useState([]);

  const initDoggo = {
    name: "",
    breed: "",
    birth: "2022-10-19",
    color: "#ffffff",
  };

  const [doggoData, setDoggoData] = useState(initDoggo);

  const [msg, setMsg] = useState("");

  const resetDoggo = () => {
    setMsg("");
    setDoggoData(initDoggo);
  };

  const addDoggo = (e) => {
    e.preventDefault();
    if (doggoData.name === "") {
      setMsg("Please add doggo name");
      return;
    }
    if (doggoData.breed === "") {
      setMsg("Please add doggo breed");
      return;
    }

    setDoggosData((prev) => [doggoData, ...prev]);
    resetDoggo();
  };

  const deleteAllDoggo = (e) => {
    e.preventDefault();
    resetDoggo();
    setDoggosData([]);
  };

  const changeDoggo = ({ target }) => {
    setDoggoData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const getFakeDoggo = (e) => {
    e.preventDefault();

    const name = faker.name.fullName();
    const breed = faker.animal.dog();
    // const date = new Date().toISOString().split("T")[0];
    const date = faker.date
      .between("2000-01-01T00:00:00.000Z", "2022-12-23T00:00:00.000Z")
      .toISOString()
      .split("T")[0];

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
            fontSize: "2rem",
            margin: "0 0 2rem",
            fontWeight: "bold",
            textShadow: "0 4px 12px rgb(0 0 0 / 5%)",
          }}
          gradient="0deg, #283618 0%, #bc6c25 100%"
        />
        <RandomDogProfile />
        {msg && (
          <motion.p
            className="error-msg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 30 }}
            exit={{ opacity: 0 }}
          >
            {msg}
          </motion.p>
        )}
        <DoggoForm
          data={doggoData}
          onChange={changeDoggo}
          onSubmit={addDoggo}
          onReset={resetDoggo}
          getFakeDoggo={getFakeDoggo}
          deleteAllDoggo={deleteAllDoggo}
        />
        <hr />
        <DoggosTable data={doggosData} />
      </Container>
    </AnimateBackground>
  );
};

const Container = styled.div`
  max-width: 960px;
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .error-msg {
    margin: 0;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid ${colors.red[8]};
    margin-top: 1em;
    width: calc(100% - 2em);
    font-size: 14px;
    color: ${colors.red[8]};
    background: ${colors.red[2]};
  }
`;

export default ContactPage;
