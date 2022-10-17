import styled from "styled-components";

import RandomDogProfile from "../components/section/RandomDogProfile";
import GradientText from "../components/ui/GradientText";
import { doggos } from "../data/doggos";

const ContactPage = () => {
  return (
    <Container>
      <GradientText
        text="Submit your doggos"
        styles={{ fontSize: "2em" }}
        gradient="0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%"
      />
      <RandomDogProfile />
      <form>
        <input placeholder="sample 1" type="text" />
        <input placeholder="sample 2" type="text" />
        <input placeholder="sample 3" type="text" />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>TH1</th>
            <th>TH2</th>
            <th>TH3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>TR1</td>
            <td>TR2</td>
            <td>TR3</td>
          </tr>
        </tbody>
      </table>
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
