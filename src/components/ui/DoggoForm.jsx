import styled from "styled-components";
import { regex } from "../../utils/regex";
import { colors } from "../../utils/styles";
import StyledButton from "./StyledButton";

// REGEX
// Private mPatternName As String = "^([A-Z][a-zA-Z]{1, 29})+$"
// (1 character, followed by 1 to 29 characters)
// (min length 2, max length 30)

const DoggoForm = ({
  onSubmit,
  onChange,
  data,
  onReset,
  getFakeDoggo,
  deleteAllDoggo,
}) => (
  <FormContainer className="doggo-form" onSubmit={onSubmit}>
    <div className="inputs">
      {/* Name */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Jin"
          value={data.name}
          onChange={onChange}
          pattern={regex.textAndSpace}
          // required
          title="Only Letter & Space"
          minLength="2"
          maxLength="30"
        />
      </label>
      {/* Bread */}
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          placeholder="Korean Jindo"
          value={data.breed}
          onChange={onChange}
          pattern={regex.textAndSpace}
          // required
          minLength="2"
          maxLength="30"
          title=""
        />
      </label>
      {/* Birth */}
      <label>
        Birth:
        <input
          type="date"
          name="birth"
          value={data.birth}
          min="2000-01-01"
          max="2022-12-31"
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
      <StyledButton onClick={deleteAllDoggo}>Delete All Doggos</StyledButton>

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
    flex-wrap: wrap;

    label {
      flex: 1;
      font-size: 14px;
      font-weight: bold;
      line-height: 2rem;
      text-align: left;
      min-width: 200px;

      input {
        display: block;
        // min-width: 200px;
        width: 100%;
        height: 2rem;
        border-radius: 4px;

        &:invalid {
          background-color: ${colors.red[2]};
          border: none;
          outline: 2px solid ${colors.red[8]};
        }
      }
    }

    label:not(last-child) {
      margin-right: 0.5rem;
    }
  }

  .buttons {
    text-align: left;
    button {
      &:not(last-child) {
        margin: 0 10px 10px 0;
      }
    }
  }
`;

export default DoggoForm;
