import React from 'react';

import codecarvalho from '../../assets/images/codecarvalho.svg';
import codePink from '../../assets/images/code_pink.png';
import './styles.css';

interface HeaderProps {
  handleOrcamento: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleTeam: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<HeaderProps> = ({ handleOrcamento, handleTeam }) => {
  return (
    <>
      <header>
        <img src={codecarvalho} alt=""/>
        <div className="header-actions">
          {/* <a className="button-primary" href="#">Faça parte do time</a>
          <a className="button-secundary" href="#">Contrate agora</a> */}
          <button className="button-primary" onClick={handleTeam}>Faça parte do time</button>
          <button className="button-secundary" onClick={handleOrcamento}>Contrate agora</button>
        </div>
      </header>
      <div className="headline">
        <h2><strong>Invista</strong> em uma equipe de <strong>alta performance</strong> para trabalhar no seu projeto.</h2>
        <img src={codePink} alt="" />
      </div>
    </>
  )
}

export default Header;