import React, { useCallback } from "react";
import {
    Container,
    Content,
    RadioBox,
    LeadTypeContainer,
 } from "./styles";
import Modal from 'react-modal';
import { useToast } from '../../../hooks/toast';

import IconCloneModal from '../../../assets/Dashboard/close.svg';
import { api } from "../../../services/api";
import { Form } from '@unform/web';
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { useHistory } from "react-router";

interface leads {
    id: string;
    name: string;
    phone: string;
    email: string;
    description: string;
    interest: string;
    created_at: string;
}

interface NewLeadModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    lead: leads;
}

interface LeadModalFormData {
    name: string;
    email: string;
    phone: string;
    interest: string;
}

export function OpenLeadModal({isOpen, onRequestClose, lead}: NewLeadModalProps) {
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: LeadModalFormData) => {
        try {
            await api.post('/reports', { lead_id: lead.id });

            addToast({
                type: 'success',
                title: 'Atendimento Iniciado!',
            });

            onRequestClose();
            history.push('/Reports');

        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro ao iniciar o atendimento!',
                description: 'Faça login novamente no sistema ou entre em contato com o suporte.',
            });
        }

    },[addToast, onRequestClose, lead, history]);

    return (
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={IconCloneModal} alt="Fechal Cadastro de Lead"/>
            </button>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Content>
                        <div>
                            <FiUser size={18}/>
                            <p>{lead.name}</p>
                        </div>
                        <div>
                            <FiMail size={18}/>
                            <p>{lead.email}</p>
                        </div>
                        <div>
                            <FiPhone size={18}/>
                            <p>{lead.phone}</p>
                        </div>
                        {lead.description && <div>
                            <p>{lead.description}</p>
                        </div>}
                    </Content>
                    <LeadTypeContainer>
                        <RadioBox
                        isActive={ lead.interest === 'CASA'}
                        type="button">
                            CASA
                        </RadioBox>

                        <RadioBox
                        isActive={ lead.interest === 'UNIFORME'}
                        type="button">
                            LOTE
                        </RadioBox>
                    </LeadTypeContainer>
                    <button type="submit">Atender Lead</button>
                </Form>
            </Container>
        </Modal>
    );
}
