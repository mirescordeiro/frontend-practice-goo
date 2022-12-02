import React from 'react';
import bookCover from '../imgs/um-lugar-so-nosso.jpeg';

const Lucky: React.FC = () => {
  return (
    <div>
      <img
        src={bookCover}
        alt="Retrato de personagens com ascendência sul-coreana sob um céu estrelado roxo e lilás. 
        Abaixo um garota de cabelos rosa longos e camiseta branca em frente a uma lua cheia.
        Acima, de cabeça para baixo, um garoto com cabelos pretos médios e camiseta branca."
      />
      <h2>Um lugar só nosso</h2>
      <p>
        <a
          href="https://www.companhiadasletras.com.br/livro/9788555340956/um-lugar-so-nosso"
          rel="noreferrer"
          target="_blank"
        >
          Compre aqui
        </a>
      </p>
      <p>
        <a
          href="https://open.spotify.com/playlist/2fhthqu6LwCaNbWNRJPAJe?si=dbb98c8911e14736"
          rel="noreferrer"
          target="_blank"
        >
          Escute a playlist do livro no Spotify.
        </a>
      </p>
      <p>
        <strong>Fun fact: </strong>O cabelo do protagonista Jack foi inspirado no corte do ídolo
        sul-coreano Jungkook do grupo BTS.
      </p>
    </div>
  );
};

export default Lucky;
