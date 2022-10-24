import styled from "styled-components";
import StyledButton from "./StyledButton";

const DoggoForm = ({ onSubmit, onChange, data, onReset, getFakeDoggo }) => (
  <FormContainer className="doggo-form" onSubmit={onSubmit}>
    <div className="inputs">
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
    </div>

    <div className="buttons">
      <StyledButton type="reset" onClick={getFakeDoggo}>
        Get Dummy Doggos
      </StyledButton>
      <StyledButton type="reset" onClick={onReset}>
        Clear Doggo
      </StyledButton>
      <StyledButton type="submit" primary>
        Add Doggo
      </StyledButton>
    </div>
  </FormContainer>
);

const FormContainer = styled.form`
  padding: 2em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  //   background: #ffffff44;
  border: none;
  margin: 2rem 0;

  padding: 1rem;

  .inputs {
    display: flex;
    margin-bottom: 2rem;

    label {
      flex: 1;
      font-size: 14px;
      font-weight: bold;
      line-height: 2rem;

      input {
        display: block;
        // min-width: 200px;
        width: 100%;
        height: 2rem;
      }
    }

    label + label {
      margin-left: 0.5rem;
    }
  }

  .buttons {
  }
`;

export default DoggoForm;
