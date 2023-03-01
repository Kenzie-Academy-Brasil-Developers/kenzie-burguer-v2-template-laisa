import { useContext } from "react";
import { CartContext } from "../../../../providers/CartContext";

const ResultsSearch = () =>
{
  const { search, setSearch } = useContext(CartContext);

  return (
    <div>
      {search &&
        <div>
          <p>Resultado para: <span>{search}</span></p>
          <button onClick={() => setSearch('')}>Limpar busca</button>
        </div>
      }
    </div>
  );
};

export default ResultsSearch;