import React, { useCallback, useRef, useState } from "react";
import {
    Container,
    LeadTypeContainer,
    RadioBox,
 } from "./styles";
import Modal from 'react-modal';
import { useToast } from '../../../hooks/toast';

import IconCloneModal from '../../../assets/Dashboard/close.svg';
import { api } from "../../../services/api";
import { FormHandles } from "@unform/core";
import { Form } from '@unform/web';
import getValidationErrors from "../../../utils/getValidationErrors";
import * as Yup from 'yup';
import Input from "../../Input";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { useHistory } from "react-router";

interface NewLeadModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface LeadModalFormData {
    name: string;
    email: string;
    phone: string;
    interest: string;
    description: string;
    origin: string;
}

export function NewLeadModal({isOpen, onRequestClose}: NewLeadModalProps) {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const [description, setDescription] = useState('');

    const [interest, setInterest] = useState('UNIFORME');
    const { addToast } = useToast();
    const inputRef1 = useRef<HTMLTextAreaElement>(null);

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
        setDescription(`${e.currentTarget.value}`);
    },[]);

    const handleSubmit = useCallback(async (data: LeadModalFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().email('Digite um e-mail válido'),
                phone: Yup.string().required('Telefone é obrigatório').min(9,'Coloque o seu número com DDD'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
            data.interest = interest;
            data.origin = 'Dashboard';
            data.description = description;

            let response;

            if (data.email === '') {
                response = await api.post('/leads', {
                    name: data.name,
                    phone: data.phone,
                    interest: data.interest,
                    origin: data.origin,
                });
            } else {
                response =await api.post('/leads', data);
            }

            await api.post('/reports', { lead_id: response.data.id });
            history.push('/Dashboard');

            addToast({
                type: 'success',
                title: 'Cadastro Realizado!',
                description: 'Verifique as informações em seus atendimentos.',
            });

            onRequestClose();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer o cadastro, verifique os dados e tente novamente.',
            });
        }

    },[addToast, interest, onRequestClose, history, description]);

    return (
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={IconCloneModal} alt="Close"/>
            </button>
            <Container>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h2>Cadastrar Lead</h2>

                    <Input primaryColor={'#032541'} secondColor={'#f0f2f5'} name="name" icon={FiUser} placeholder="Nome"/>
                    <Input primaryColor={'#032541'} secondColor={'#f0f2f5'} name="email" icon={FiMail}  placeholder="E-mail"/>
                    <Input primaryColor={'#032541'} secondColor={'#f0f2f5'} mask="phone" name="phone" icon={FiPhone} placeholder="Telefone"/>
                    <textarea ref={inputRef1} onKeyUp={handleKeyUp} name="description" placeholder="Detalhes do atendimento: Modelo, quantidade, cor etc..."/>

                    <LeadTypeContainer>
                        <RadioBox
                        isActive={ interest === 'CASA'}
                        type="button" onClick={() => {setInterest('CASA')}}>
                            CASA
                        </RadioBox>

                        <RadioBox
                        isActive={ interest === 'LOTE'}
                        type="button" onClick={() => {setInterest('LOTE')}}>
                            LOTE
                        </RadioBox>
                    </LeadTypeContainer>
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>
        </Modal>
    );
}
