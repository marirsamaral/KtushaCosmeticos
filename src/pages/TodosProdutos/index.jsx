import { products } from '../../data/products.js';

export default function TodosProdutos() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Todos os Produtos</h1>
      <p>Aqui você encontra as informações completas de todos os nossos produtos.</p>
      
      <div>
        {products.map((produto) => (
          <article key={produto.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc' }}>
            <h2>{produto.nome}</h2>
            <p><strong>Destaque:</strong> {produto.destaque}</p>
            <p><strong>Volume:</strong> {produto.volume}</p>
            <p><strong>Preço:</strong> {produto.preco}</p>
            <p><strong>Descrição:</strong> {produto.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}