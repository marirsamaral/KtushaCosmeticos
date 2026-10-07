import { Link } from 'react-router-dom';
import { products } from '../../data/products.js';
import './produtos.css'

export default function Produtos() {
  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <div id="rotina" className="produtos__header">
          <h2 className="produtos__titulo">Mais de 30 anos entendendo cabelos crespos.</h2>
          <p className="produtos__intro">
            Produtos desenvolvidos para cuidar, tratar e valorizar a beleza dos cabelos crespos e cacheados. Com fórmulas pensadas para as necessidades reais dos seus fios.
          </p>
        </div>

        <div className="produtos__grid">
          {products.map((produto) => (
            <article key={produto.id} className="produto-card">
              <div className="produto-card__imagem">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="produto-card__top">
                <span className="produto-card__tag">{produto.destaque}</span>
                <span className="produto-card__volume">{produto.volume}</span>
              </div>
              <h3 className="produto-card__nome">{produto.nome}</h3>
              <p className="produto-card__descricao">{produto.descricao}</p>
              <span className="produto-card__preco">{produto.preco}</span>
              <Link 
                to="/produtos" 
                className="produto-card__link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Saiba mais
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
