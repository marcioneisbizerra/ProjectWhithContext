import Rotas from "./src/rotas";
import { InfoProvider } from "./src/contexts/globalContext";
import { TemaProvider } from "./src/contexts/temaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { ProdutoProvider } from "./src/contexts/ProdutoContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutoProvider>
          <Rotas />
        </ProdutoProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}