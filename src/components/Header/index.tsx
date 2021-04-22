import React from 'react';
import { Container, WhatsApp } from './styles';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

import logoImg from '../../assets/logo_original.png';
import IconWhatsapp from '../../assets/icon-whatsapp2.png';

const Header: React.FC = () => (
    <>
        <Container>
            <img src={logoImg} alt="AM Uniformes - Logo"/>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Quem-Somos">QUEM SOMOS</Link></li>
                <li><Link to="/Produtos">PRODUTOS</Link>
                    <ul>
                        <li><Link to="/Produtos/Abadá">Abadás</Link></li>
                        <li><Link to="/Produtos/Aventais">Aventais</Link></li>
                        <li><Link to="/Produtos/Bonés">Bonés</Link></li>
                        <li><Link to="/Produtos/Camisas">Camisas</Link></li>
                        <li><Link to="/Produtos/Coletes">Coletes</Link></li>
                        <li><Link to="/Produtos/Conjuntos-Personalizados">Conjuntos Personalizados</Link></li>
                        <li><Link to="/Produtos/Dólmãs">Dólmãs</Link></li>
                        <li><Link to="/Produtos/Jalecos">Jalecos</Link></li>
                        <li><Link to="/Produtos/Uniformes-Esportivos">Uniformes Esportivos</Link></li>
                    </ul>
                </li>
                <li><Link to="/Clientes">CLIENTES</Link></li>
                <li><Link to="/Fale-Conosco">FALE CONOSCO</Link></li>
            </ul>
            <Link to="/Fale-Conosco">
                <FaPhoneAlt size="20"/>
                LIGAMOS PARA VOCÊ
            </Link>

            <WhatsApp>
                <a href='https://api.whatsapp.com/send?phone=5562982044749&text=Ol%C3%A1%20eu%20vi%20o%20seu%20anuncio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es...' >
                    <img src={IconWhatsapp} alt="WhatsApp"/>
                </a>
            </WhatsApp>
        </Container>
    </>
);

export default Header;
