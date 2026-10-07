import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/index.jsx';
import Hero from './components/Hero/index.jsx';
import Produtos from './components/Produtos/index.jsx';
import Sobre from './components/Sobre/index.jsx';
import Rodape from './components/Rodape/index.jsx';
import Compras from './components/Compras/index.jsx';
import Avaliacoes from './components/Avaliacoes/index.jsx';

// Importando a nova página que você criou
import TodosProdutos from './pages/TodosProdutos/index.jsx';

// Criamos um componente Home para juntar a página principal
function Home() {
  return (
    <main>
      <Hero />
      <Produtos />
      <Avaliacoes />
      <Sobre />
      <Compras />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* Rota para a Página Inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página com todos os produtos */}
        <Route path="/produtos" element={<TodosProdutos />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}