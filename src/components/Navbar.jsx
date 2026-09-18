import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#rotina', label: 'Rotina' },
  { href: '#sobre', label: 'Sobre' },
]

export default function Navbar() {
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
          K'tusha
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
