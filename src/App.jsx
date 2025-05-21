import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>DeLimaTec Suporte & Tecnologia</h1>
        <p>Soluções em TI para empresas e pessoas físicas</p>
      </header>

      <section>
        <h2>Serviços</h2>
        <ul>
          <li>Suporte remoto e presencial</li>
          <li>Configuração de redes e servidores</li>
          <li>Manutenção de computadores e notebooks</li>
          <li>Segurança da informação e backups</li>
          <li>Cloud AWS e virtualização</li>
        </ul>

        <h2>Planos e Preços</h2>
        <ul>
          <li><strong>Plano Básico:</strong> R$ 150/mês – Suporte remoto ilimitado</li>
          <li><strong>Plano Empresarial:</strong> R$ 450/mês – Suporte remoto + presencial (2 visitas/mês)</li>
          <li><strong>Atendimento Avulso:</strong> R$ 80/hora</li>
        </ul>

        <h2>Depoimentos</h2>
        <blockquote>"Excelente atendimento, resolveram meu problema rapidamente!" – João M.</blockquote>
        <blockquote>"Confiança e competência definem o trabalho da DeLimaTec!" – Ana S.</blockquote>
      </section>

      <footer>
        <p>© 2025 DeLimaTec - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;