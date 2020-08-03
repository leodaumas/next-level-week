import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/49441230?s=460&u=90401aff7a9db9209070bddcd29437453e07bfd8&v=4" alt="Leo Daumas"/>
            <div>
                <strong>Leo Daumas</strong>
                <span>Lorem ipsum</span>
            </div>
        </header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <br /><br />
        Aliquam eget elit nibh. Pellentesque quis eros sit amet lacus feugiat finibus. Maecenas ac nunc sem. 
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
        </footer>
    </article>
    );
}

export default TeacherItem;