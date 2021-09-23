import React from 'react';

import './styles.css';

import whastappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars.githubusercontent.com/u/42686813?v=4" alt="Felipe" />
        <div>
          <strong>Jorge Felipe</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já
        passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;