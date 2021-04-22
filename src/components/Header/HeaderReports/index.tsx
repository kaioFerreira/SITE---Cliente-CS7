import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../../../assets/logo.png';

import {
    Container,
    Content
} from './styles';

interface HeaderProps {
    OnOpenNewLeadModal: () => void;
}

export function HeaderReports({OnOpenNewLeadModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <Link to="Dashboard">
                    <img src={logoImg} alt="AMUniformes Corretor Imobiliario"/>
                </Link>
                <button type="button" onClick={OnOpenNewLeadModal}>
                    Cadastrar Lead
                </button>
            </Content>
        </Container>
    )
}
