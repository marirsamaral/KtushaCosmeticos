import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">K'tusha</span>
        <p className="footer__copy">
          © {new Date().getFullYear()} K'tusha Cosméticos. Hair care you can.
        </p>
      </div>
    </footer>
  )
}
