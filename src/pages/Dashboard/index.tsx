import React, { useEffect, useState } from 'react';

import { HeaderDashboard } from '../../components/Header/HeaderDashboard';
import { LeadsTable } from '../../components/LeadsTable';
import { Summary } from '../../components/Summary';
import Modal from 'react-modal';

import {
    Container,
} from './styles';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

Modal.setAppElement('#root');

export const Dashboard: React.FC = () => {
    const [numberOfLeads, setNumberOfLeads] = useState<number>(0);
    const [pendingLeads, setPendingLeads] = useState<number>(0);
    const [myNumberReports, setMyNumberReports] = useState<number>(0);
    const { signOut } = useAuth();
    const { addToast } = useToast();

    useEffect(() => {
        api.get('/leads/numberOfLeads?status=false').then((response) => {
            setPendingLeads(response.data.numberOfLeads);
        });
    },[]);

    useEffect(() => {
        api.get('/reports/iHave').then((response) => {
            setMyNumberReports(response.data.numberOfReports);
        }).catch((error) => {
            if (error.response.status === 401) {
                signOut();

                addToast({
                    type: 'error',
                    title: 'Sessão expirada!',
                    description: 'Faça login e continue utilizando o sistema normalmente.',
                });
            }
        });
    },[signOut, addToast]);

    useEffect(() => {
        api.get('/leads/numberOfLeads').then((response) => {
            setNumberOfLeads(response.data.numberOfLeads);
        });
    },[]);

    return (
        <>
            <HeaderDashboard />
            <Container>
                <Summary
                numberOfLeads={numberOfLeads}
                myNumberReports={myNumberReports}
                pendingLeads={pendingLeads}/>
                <LeadsTable routes="/leads/nextFour"/>
            </Container>
        </>
    );
};

