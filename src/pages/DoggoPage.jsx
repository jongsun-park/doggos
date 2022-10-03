import { useParams } from "react-router-dom";
import { doggos } from "../data/doggos";

const getDoggos = () => {};

export async function loader({ params }) {
  return getDoggos(params.doggoId);
}

const DoggoPage = () => {
  const { doggoId } = useParams();
  const doggo = doggos.filter((dog) => dog.name === doggoId)[0];

  return (
    <div>
      <h2>{doggo.name}</h2>
    </div>
  );
};

export default DoggoPage;
