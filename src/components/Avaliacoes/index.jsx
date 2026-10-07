import './avaliacoes.css'; // ou import styles from './Avaliacoes.module.css';

const avaliacoesData = [
  {
    id: 1,
    nome: 'Julia Sá',
    estrelas: 5,
    imagemCliente: '/foto_julia.png',
    produtoNome: 'Umidificador',
    produtoMiniatura: '/miniatura_umidificador.png',
    comentario: 'Incrível! Não troco nunca mais, deu super certo no meu cabelo que estava super poroso e nada resolvia! Fez muitaaaa diferença na hidratação dos meus cachos e facilitou demais meu dia a dia.Os produtos Katusha são MARAVILHOSOS já tenho a linha completa',
  },
  {
    id: 2,
    nome: 'Valeria de Oliveira Juliao',
    estrelas: 5,
    imagemCliente: '/foto_aghata.jpeg',
    produtoNome: 'Kit Completo',
    produtoMiniatura: '/miniatura_umidificador.png',
    comentario:'Amei os produtos da K´tusha. Meu cabelo ficou super macio. Não fico sem',
  },
  {
    id: 3,
    nome: 'Mariana Rosa',
    estrelas: 5,
    imagemCliente: '/foto_mariana.png',
    produtoNome: 'Creme Deep + Shampoo',
    produtoMiniatura: '/miniatura_creme.jpg',
    comentario: 'Produtos maravilhosos. Tenho a linha inteira e não fico sem. Meu cabelo fica super macio e cheiro. Levo o umidificador até na praia para passar depois que sair do mar',
  },
  {
    id: 4,
    nome: 'Leticia Rocha',
    estrelas: 5,
    imagemCliente: '/foto_leticia.png',
    produtoNome: 'Condicionador + Creme Deep',
    produtoMiniatura: '/miniatura_condicionador.png',
    comentario: 'Ótimos produtos. Cheirosos e deixam o cabelo super sedoso. É uma ótima opção para os fios crespos!',
  },
];

export default function Avaliacoes() {
  return (
    <section className="avaliacoes-container">
      <h2 className="avaliacoes-titulo">
        Mais de 1 mil <span>Avaliações felizes</span>
      </h2>

      <div className="avaliacoes-grid-wrapper">
        <div className="avaliacoes-grid">
          {avaliacoesData.map((item) => (
            <div key={item.id} className="avaliacao-card">
              {/* Imagem do Cliente */}
              <div className="avaliacao-imagem-box">
                <img
                  src={item.imagemCliente}
                  alt={item.nome}
                  className="avaliacao-foto"
                />

                {/* Faixa de Compra Rápida sobre a imagem */}
                <div className="avaliacao-produto-tag">
                  <div className="produto-info">
                    <span className="produto-nome">{item.produtoNome}</span>
                    <a href="#compra-rapida" className="compra-rapida-link">
                      Compra Rápida
                    </a>
                  </div>
                  <img
                    src={item.produtoMiniatura}
                    alt={item.produtoNome}
                    className="produto-thumb"
                  />
                </div>
              </div>

              {/* Informações da Avaliação */}
              <div className="avaliacao-detalhes">
                <div className="estrelas">
                  {'★'.repeat(item.estrelas)}
                </div>
                <p className="avaliacao-texto">{`"${item.comentario}"`}</p>
               
              </div>
            </div>
          ))}
        </div>

        {/* Botão Próximo (Carrossel) */}
        <button className="btn-proximo" aria-label="Próximas avaliações">
          &#8594;
        </button>
      </div>
    </section>
  );
}