
import Nav from './components/Nav/index.jsx'
import Hero from './components/Hero/index.jsx'
import Produtos from './components/Produtos/index.jsx'
import Sobre from './components/Sobre/index.jsx'
import Rodape from './components/Rodape/index.jsx'
import Compras from './components/Compras/index.jsx'
import Avaliacoes from './components/Avaliacoes/index.jsx'


export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Produtos />
        <Avaliacoes/>
        <Sobre />
        <Compras />
      </main>
      <Rodape />
    </>
  )
}
