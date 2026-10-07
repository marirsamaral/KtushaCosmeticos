import './rodape.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1: Logo e Descrição */}
        <div className="footer-col brand-col">
          <div className="logo-container">
            {/* Subtitua pelo caminho/SVG real do logótipo "Ápice Cosméticos" */}
            <span className="logo-text">K´tusha</span>
            <span className="logo-subtext">COSMÉTICOS</span>
          </div>
          <p className="brand-description">
            Fazendo diferença para o seu dia a dia, com fórmulas ricas em ativos naturais que trazem o melhor tratamento para o seu cabelo, e sem causar danos ao meio ambiente.
          </p>
        </div>

        {/* Coluna 2: Início */}
        <div className="footer-col">
          <h3 className="cor-titulo">Início</h3>
          <ul className="footer-links">
            <li><a href="#comprar">Comprar</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#atacado">Atacado</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
          </ul>
        </div>

        {/* Coluna 3: Atendimento ao Cliente */}
        <div className="footer-col">
          <h3 className="cor-titulo">Atendimento ao Cliente</h3>
          <ul className="footer-links">
            <li><a href="#minha-conta">Minha Conta</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#ajuda">Central de Ajuda</a></li>
            <li><a href="#termos">Termos e Condições</a></li>
            <li><a href="#envio">Envio e Prazos</a></li>
            <li><a href="#trocas">Trocas e Devoluções</a></li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter e Redes Sociais */}
        <div className="footer-col newsletter-col">
          <h3 className="cor-titulo highlight-title">Increva-se para obter 10% de desconto</h3>
          <p className="newsletter-subtitle">Receba atualizações e descontos da loja.</p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="E-mail" required />
            <button type="submit" aria-label="Enviar">
              &rarr;
            </button>
          </form>

          <p className="privacy-text">
            Ao se inscrever, você concorda com os Termos de Uso e a Política de Privacidade
          </p>

          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#tiktok" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>

      {/*Informações de Direitos e Pagamento */}
      <div className="footer-bottom">
        <div className="bottom-left">
          <div className="legal-info">
            <p>Direitos Reservados © 2026 Tok Final Cabelereiros LTDA · CNPJ 56.680.085/0001-50</p>
            <p>Rua Domingos de Morais 770, bloco 2 ap33</p>
            <p>Vila Mariana · São Paulo / SP · CEP 04010-100</p>
          </div>
        </div>

      
      
        <div className="bottom-right">
          <div className="payment-flags">
            <span className="flag visa">VISA</span>
            <span className="flag mastercard">MASTERCARD</span>
            <span className="flag elo">ELO</span>
            <span className="flag pix">PIX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}