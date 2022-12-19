import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from './context/AuthCon';
import { ProgressProvider } from './context/PorcentagemCon';
import Topo from "./componentes/topo";
import {Rotinas} from "./páginas";


export const caminhoVazio = ['/', '/register']
function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Topo/>
          <Routes>
          <Route path="/" element={<Rotinas/>} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
