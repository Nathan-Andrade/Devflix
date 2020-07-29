import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/nathan-a-1b9436124/">
        <img src="https://avatars2.githubusercontent.com/u/62774392?s=460&u=5e4000d42d2fc1bdbd3e217911418d2a5ac87602&v=4" alt="Nathan Andrade" style={{ width: "80px", height: "80px" }} />
      </a>
      <p>
        Desenvolvido por <a href="https://www.linkedin.com/in/nathan-a-1b9436124/"><strong>Nathan de Andrade</strong></a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
