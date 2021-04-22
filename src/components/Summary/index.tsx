import React from 'react';
import {
    FiLayers,
    FiUserPlus,
    FiUsers
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
    Container,
} from './styles';

interface NewLeadModalProps {
    numberOfLeads: number;
    myNumberReports: number;
    pendingLeads: number;
}

export function Summary({numberOfLeads, myNumberReports, pendingLeads}: NewLeadModalProps) {
    return (
        <Container>
            <Link to="/Leads">
                <div>
                    <header>
                        <p>Cadastrados</p>
                        <FiUserPlus/>
                    </header>
                    <strong>{numberOfLeads}</strong>
                </div>
            </Link>
            <Link to="/PendingLeads">
                <div>
                    <header>
                        <p>Fila de Espera</p>
                        <FiUsers/>
                    </header>
                    <strong>{pendingLeads}</strong>
                </div>
            </Link>
            <Link to="/Reports">
                <div className="highlight-background">
                    <header>
                        <p>Meus Atendimentos</p>
                        <FiLayers/>
                    </header>
                    <strong>{myNumberReports}</strong>
                </div>
            </Link>
        </Container>
    );
};

