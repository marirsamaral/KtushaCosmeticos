import { useEffect, useState } from 'react'
import './nav.css'

const links = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#compras', label: 'Compre Aqui' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#topo" className="nav__logo">
          <img src="/Logo.jpeg" alt="Logo Ktusha" className="nav__logo-img" />
        </a>

        <nav className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#produtos" className="btn btn-primary nav__cta">
          Ver produtos
        </a>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#produtos" className="btn btn-primary" onClick={() => setOpen(false)}>
            Ver produtos
          </a>
        </div>
      )}
    </header>
  )
}
