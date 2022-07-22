import React from 'react';

import './styles.scss';

interface ICardProps {
  date: string;
  title: string;
  html: string;
}

export function Card({ date, html, title }: ICardProps) {
  return (
    <div className='card'>
      <div className='card__header'>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      <div
        className='card__content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
