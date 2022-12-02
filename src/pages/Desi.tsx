import React from 'react';
import bookCover from '../imgs/isso-que-a-gente-chama-de-amor.jpeg';

const Desi: React.FC = () => {
  return (
    <div>
      <img
        src={bookCover}
        alt="Garota com ascendência sul-coreana sob fundo com pinceladas vermelhas e laranjas. 
        Tem cabelo preto longo, vestido preto com flores vermelhas e segura um caderno de capa vermelha.
        Cercada por desenhos em branco: controle, tubos de tinta, folhas, avião de papel, folha de caderno e balão de fala com um coração."
      />
      <h2>Isso que a gente chama de amor</h2>
      <p>
        <a
          href="https://www.companhiadasletras.com.br/livro/9788555341328/isso-que-a-gente-chama-de-amor"
          rel="noreferrer"
          target="_blank">
          Compre aqui
        </a>
      </p>
      <p>
        <strong>Fun fact: </strong>A inspiração de ensino médio norte-americano foi retirada da
        série “Eu nunca…” da Netflix.
      </p>
    </div>
  );
};

export default Desi;
