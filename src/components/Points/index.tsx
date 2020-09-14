import React from 'react';
import Point from './Point';

import organizacao from '../../assets/icons/gestao.svg';
import desenvolvimento from '../../assets/icons/dev.svg';
import terceirizacao from '../../assets/icons/outsourcing.svg'
import './styles.css';


const Points:React.FC = () => {
  return (
    <div className="points">
      <Point title="Gestão de projetos de software" img="organizacao">
        <strong>Utilizamos</strong> toda a nossa bagagem de conceitos, <strong>técnicas</strong> e mecanismos para que a construção do seu <strong>projeto aconteça</strong> com <strong>alta qualidade</strong>.
      </Point>
      <Point title="Consultoria de desenvolvimento" img="desenvolvimento">
        Analisamos o seu projeto nos mínimos detalhes e <strong>sugerimos as melhores</strong> metodologias, linguagens, arquiteturas e formas de <strong>realizá-lo</strong>.
      </Point>
      <Point title="Outsourcing de qualidade" img="terceirizacao">
        Realizamos tarefas que normalmente não são executadas dentro da empresa, mas que não podem perder <strong>qualidade</strong> e excelência na <strong>entrega</strong>.
      </Point>
    </div>
  )
}

export default Points;