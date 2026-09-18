import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Produtos from './components/Produtos.jsx'
import Sobre from './components/Sobre.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Produtos />
        <Sobre />
      </main>
      <Footer />
    </>
  )
}
