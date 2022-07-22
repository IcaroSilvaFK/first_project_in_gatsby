import React from 'react';

import './styles.scss';

export function Header() {
  return (
    <header className='container__header'>
      <div>
        <h1>Simple Blog in Gatsby</h1>
      </div>
      <div className='header__content'>
        <p>
          Gatsby é a estrutura rápida e flexível que torna a criação de sites
          com qualquer CMS, API ou banco de dados divertido novamente. Crie e
          implante sites sem cabeça que geram mais tráfego, convertem melhor e
          geram mais receita!
        </p>
      </div>
    </header>
  );
}
