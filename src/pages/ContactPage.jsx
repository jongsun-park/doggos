import { useState } from "react";
import styled from "styled-components";

import RandomDogProfile from "../components/section/RandomDogProfile";
import GradientText from "../components/ui/GradientText";

const DoggosTable = ({ data }) => {
  if (data.length === 0) return;
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="breed">Breed</th>
            <th className="birth">Birth</th>
            <th className="color">Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, breed, birth, color }) => {
            return (
              <tr key={name + breed + birth + color}>
                <td className="name">{name}</td>
                <td className="breed">{breed}</td>
                <td className="birth">{birth}</td>
                <td className="color">{color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: 100%;

  table {
    width: 100%;
  }
  th {
    text-align: left;
    text-transform: uppercase;
  }
  td {
    &.name {
      text-transform: uppercase;
    }
  }
`;

const DoggoForm = ({ onSubmit, onChange, data, onReset }) => (
  <form onSubmit={onSubmit}>
    {/* Name */}
    <label>
      Name:
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={onChange}
        required
      />
    </label>
    <br />

    {/* Bread */}
    <label>
      Breed:
      <input
        type="text"
        name="breed"
        value={data.breed}
        onChange={onChange}
        required
      />
    </label>
    <br />

    {/* Birth */}
    <label>
      Birth:
      <input
        type="date"
        name="birth"
        value={data.birth}
        onChange={onChange}
        required
      />
    </label>
    <br />

    {/* Color */}
    <label>
      Color:
      <input
        type="color"
        name="color"
        value={data.color}
        onChange={onChange}
        required
      />
    </label>

    <div className="buttons">
      <button type="reset" onClick={onReset}>
        Clear Doggo
      </button>
      <button type="submit">Add Doggo</button>
    </div>
  </form>
);

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

  return (
    <Container>
      <GradientText
        text="Submit your doggos"
        styles={{ fontSize: "2em" }}
        gradient="0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%"
      />
      <RandomDogProfile />
      <DoggoForm
        data={doggoData}
        onChange={changeDoggo}
        onSubmit={addDoggo}
        onReset={resetDoggo}
      />

      <hr />
      <DoggosTable data={doggosData} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ContactPage;
