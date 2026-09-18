import './Hero.css'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="section-label">K'tusha Cosméticos</p>
          <h1 className="hero__title">
            Cacho tratado
            <br />
            é cacho que dura.
          </h1>
          <p className="hero__body">
            Uma rotina de quatro passos pensada para cachos e crespos reais — da
            limpeza à reconstrução profunda, sem prometer o que o fio não
            entrega sozinho.
          </p>
          <div className="hero__actions">
            <a href="#produtos" className="btn btn-primary">
              Ver produtos
            </a>
            <a href="#rotina" className="btn btn-ghost">
              Conhecer a rotina
            </a>
          </div>
          <p className="hero__tagline">Hair care you can.</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <svg viewBox="0 0 420 480" className="hero__curls">
            <defs>
              <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#dcb872" />
                <stop offset="100%" stopColor="#8a6d3b" />
              </linearGradient>
            </defs>
            <path
              d="M40 60 C 140 20, 140 140, 40 160 C -60 180, -60 300, 40 320 C 140 340, 140 460, 40 480"
              fill="none"
              stroke="url(#goldLine)"
              strokeWidth="2.5"
              transform="translate(60,0)"
            />
            <path
              d="M40 20 C 160 -20, 160 120, 40 140 C -80 160, -80 320, 40 340 C 160 360, 160 460, 40 480"
              fill="none"
              stroke="var(--line)"
              strokeWidth="1.5"
              transform="translate(220,0)"
            />
            <circle cx="280" cy="60" r="3" fill="#dcb872" />
            <circle cx="100" cy="400" r="3" fill="#dcb872" />
          </svg>

          <div className="hero__bottle">
            <div className="hero__bottle-cap" />
            <div className="hero__bottle-body">
              <span>K'tusha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
