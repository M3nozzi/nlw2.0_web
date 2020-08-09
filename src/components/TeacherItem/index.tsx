import React from 'react';

import whatsappImg from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
          <header>
            <img src="https://res.cloudinary.com/menozzi/image/upload/v1589729677/focus/linus.jpg" alt="Linus Torvalds" />
            <div>
              <strong>Linus Torvalds</strong>
              <span>Math</span>
            </div>
                
          </header>
          <p>
            Entusiasta das melhores tecnologias de matemática avançada.
            <br /><br />
            Apaixonado por cálculos.
          </p>

         <footer>
          <p>
           Preço/hora
           <strong>R$ 120,00</strong>
          </p>
          <button type="button" >
            <img src={whatsappImg} alt="Whatsapp" />
            Entrar em contacto  
          </button>
        </footer>
      </article>
    );
}

export default TeacherItem;