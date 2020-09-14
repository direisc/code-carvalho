import React, { ReactChild } from 'react';

import './styles.css';

interface SectionProps {
  title: ReactChild
  img?: ReactChild
  direction?: string
}

const Section: React.FC<SectionProps> = ({ title, img, children, direction }) => {
  return (
    <div className={`section ${direction || ''}`}>
      <div className="ref">{img}</div>
      <div className="section_description">
        {title}
        <span className="line_pink" />
        {children}
      </div>
    </div>
  )
}

export default Section;