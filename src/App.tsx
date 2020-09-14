import React, { useRef } from 'react';
import Header from './components/Header';
import Points from './components/Points';
import Section from './components/Section';

import equipe from './assets/images/equipe.png';
import contract from './assets/images/contract.png';
import oak from './assets/images/oak.png';
import oak_pink from './assets/images/oak_pink.png';
import bg from './assets/images/padronagem.png';

function App() {
  const orcamento = useRef<HTMLDivElement>(null);
  const team = useRef<HTMLDivElement>(null);

  const handleOrcamento = (e: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    // alert('orcamento')
    if (orcamento && orcamento.current) {
      orcamento.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }

  const handleTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    if (team && team.current) {
      team.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }

  const handleInvoice = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {}
    formData.forEach((v, k) => {
      data = {
        ...data,
        [k]: v,
      }
      console.log(k, v);
    })
    console.log(data);
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <Header handleOrcamento={handleOrcamento} handleTeam={handleTeam} />
      <Points />

      <Section
        direction="right"
        img={(
          <div className="img_float_left">
            <img className="bg" src={equipe} alt="bg_oak" />
            <img src={oak} className="oak" alt="oak" />
          </div>
        )}
        title={(<h2><strong className="color_primary">Equipe 100% remota</strong><br />
        executando seus projetos<br />
        com agilidade e <strong>segurança</strong></h2>)}
      >
        <>
          <p>A <strong>Code Carvalho</strong> nasceu com o <strong>objetivo</strong> de levar até os clientes <strong>soluções</strong> personalizadas e <strong>inovadoras,</strong> facilitando o dia a dia, e a busca por atingir seus objetivos.</p>
          <p>A empresa foi fundada por <strong>Diego</strong>, um desenvolvedor com mais de <strong>10 anos de experiência</strong> na busca de <strong>soluções em tecnologia</strong>. Com essa bagagem, resolveu que era momento de aplicar todo esse <strong>conhecimento</strong> em um novo modelo de negócio.</p>
        </>
      </Section>

      <Section
        direction="left"
        img={(
          <div className="img_float_right">
            <img className="bg" src={contract} alt="bg_oak" />
            <img src={oak_pink} className="oak" alt="oak_pink" />
          </div>
        )}
        title={(<h2><strong className="color_primary">Por que contratar?</strong></h2>)}
      >
        <>
          <h3>Atendimento remoto</h3>
          <p>Nosso atendimento é 100% remoto 24 horas por dia com profissionais qualificados e prontos para atender qualquer solicitação.</p>
          <h3>Equipe de alta performance</h3>
          <p>Atendimento com profissionais qualificados e experientes, prontos para entregar soluções eficientes, proporcionando um ótimo custo benefício para a sua empresa.</p>
          <h3>Acompanhe todas as etapas do projeto</h3>
          <p>Prezamos pela transparência na comunicação, por isso, você terá visibilidade do andamento do projeto através de atualizações e reuniões periódicas.</p>
        </>
      </Section>
      <div className="form_grid">

        <div className="form" ref={orcamento}>
          <h2 className="color_primary">Orçamento</h2>
          <p>Se você tem um grande projeto e precisa de uma <strong>equipe eficiente</strong> para desenvolvê-lo, preencha o formulário abaixo e <strong>entraremos em contato</strong> com você.</p>
          <form onSubmit={handleInvoice}>
            <input type="text" name="name" placeholder="Nome" />
            <input type="tel" name="phone" placeholder="Telefone" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="text" name="company" placeholder="Empresa" />
            <textarea name="message" placeholder="Descreva seu projeto" rows={5}></textarea>
            <button type="submit" className="button-submit">Quero contratar</button>
          </form>
        </div>

        <div className="form" ref={team}>
          <h2 className="color_primary">Faça parte do time</h2>
          <p>Se você tem um grande projeto e precisa de uma <strong>equipe eficiente</strong> para desenvolvê-lo, preencha o formulário abaixo e <strong>entraremos em contato</strong> com você.</p>
          <form onSubmit={handleInvoice}>
            <input type="text" name="name" placeholder="Nome" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="tel" name="phone" placeholder="Telefone" />
            <button type="submit" className="button-submit">Faça parte do time</button>
          </form>
        </div>

      </div>

      <footer><strong>Code Carvalho</strong> nasceu em 2019. | Todos os direitos reservados.</footer>

    </div>
  );
}

export default App;
