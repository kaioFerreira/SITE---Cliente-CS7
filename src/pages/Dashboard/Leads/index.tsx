import React from 'react';

import Modal from 'react-modal';

import {
    Container,
} from './styles';
import { HeaderLeads } from '../../../components/Header/HeaderLeads';
import { LeadsTable } from '../../../components/LeadsTable';

Modal.setAppElement('#root');

export const Leads: React.FC = () => {
    return (
        <>
            <HeaderLeads/>
            <Container>
                <LeadsTable routes="/leads"/>
            </Container>
        </>
    );
};

