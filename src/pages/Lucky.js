import React from "react";
import book from "../imgs/um-lugar-so-nosso.jpeg";

function Lucky(){
  return (
    <div>
      <img src={book}
        alt="Retrato de personagens com ascendência sul-coreana sob um céu estrelado roxo e lilás. 
        Abaixo um garota de cabelos rosa longos e camiseta branca em frente a uma lua cheia.
        Acima, de cabeça para baixo, um garoto com cabelos pretos médios e camiseta branca."/>
      <h2>Um lugar só nosso</h2>
      <a 
        href="https://www.companhiadasletras.com.br/livro/9788555340956/um-lugar-so-nosso" 
        rel="noreferrer"
        target="_blank"
      >
          Compre aqui
      </a>
      <p>
        <strong>Fun fact: </strong>
        O cabelo do protagonista Jack foi inspirado no corte do ídolo sul-coreano Jungkook do grupo BTS.
      </p>
      <p>
        Acesse a playlist montada para o livro no 
        <a 
          href="https://open.spotify.com/playlist/2fhthqu6LwCaNbWNRJPAJe?si=dbb98c8911e14736" 
          rel="noreferrer"
          target="_blank"
        >
          Spotify
        </a>
        .
      </p>
    </div>
  );
};

export default Lucky;
