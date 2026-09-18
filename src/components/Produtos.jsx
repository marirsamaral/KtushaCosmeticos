import { products } from '../data/products.js'
import './Produtos.css'

export default function Produtos() {
  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <div id="rotina" className="produtos__header">
          <p className="section-label">A rotina</p>
          <h2 className="produtos__title">Quatro produtos, um cacho por vez.</h2>
          <p className="produtos__intro">
            Cada frasco tem uma função na rotina — nenhum promete resolver
            tudo sozinho.
          </p>
        </div>

        <div className="produtos__grid">
          {products.map((produto) => (
            <article key={produto.id} className="produto-card">
              <div className="produto-card__top">
                <span className="produto-card__tag">{produto.destaque}</span>
                <span className="produto-card__volume">{produto.volume}</span>
              </div>
              <h3 className="produto-card__nome">{produto.nome}</h3>
              <p className="produto-card__descricao">{produto.descricao}</p>
              <a href="#" className="produto-card__link">
                Saiba mais
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
