import React from "react";
import { FiPower } from "react-icons/fi";
import logoImg from '../../../assets/logo.png';
import { useAuth } from "../../../hooks/auth";

import {
    Container,
    Content
} from './styles';

export function HeaderDashboard() {
    const { signOut } = useAuth();

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="AMUniformes Corretor Imobiliario"/>
                <FiPower onClick={signOut} />
            </Content>
        </Container>
    )
}
