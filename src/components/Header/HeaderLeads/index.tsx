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

export function HeaderLeads() {

    return (
        <Container>
            <Content>
                <Link to="Dashboard">
                    <img src={logoImg} alt="AMUniformes Corretor Imobiliario"/>
                </Link>
            </Content>
        </Container>
    )
}
