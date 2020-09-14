import React from 'react';

import organizacao from '../../assets/icons/gestao.svg';
import desenvolvimento from '../../assets/icons/dev.svg';
import terceirizacao from '../../assets/icons/outsourcing.svg'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum PointImage {
  organizacao,
  desenvolvimento,
  terceirizacao
}
interface PointProps {
  title: string
  img: string
}

const Point:React.FC<PointProps> = ({ title, img, children }) => {
  const getAsset = () => {
    switch (img) {
      case 'organizacao':
        return organizacao;
      case 'desenvolvimento':
        return desenvolvimento;
        case 'terceirizacao':
          return terceirizacao;
      default:
        return organizacao;
    }

  }
  return (
    <div className="point">
      <img src={getAsset()} alt=""/>
      <h2>{title}</h2>
      <span className="line_pink" />
      <p>{children}</p>
    </div>
  )
}

export default Point;