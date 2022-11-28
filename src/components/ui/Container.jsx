import styled from "styled-components";
import { bp } from "../../utils/styles";

const Container = styled.div`
  padding: 1rem 2rem;
  background: #eee;
  margin-bottom: 2rem;

  @media (max-width: ${bp.s}) {
    padding: 10px;
  }
`;

export default Container;
