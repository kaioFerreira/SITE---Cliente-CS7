import React, { useCallback, useRef, useState } from "react";
import {
    Container,
    LeadTypeContainer,
    RadioBox,
    Section,
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

interface IReportModel {
    id: string;
    lead_id: string;
    name: string;
    phone: string;
    email: string;
    interest: string;
    description?: string;
    lead_description?: string;
    created_at: string;
}

interface NewLeadModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    report: IReportModel;
}

interface LeadModalFormData {
    name: string;
    email: string;
    phone: string;
    description: string;
    interest: string;
}

export function OpenReportModal({isOpen, onRequestClose, report}: NewLeadModalProps) {
    const formRef = useRef<FormHandles>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [interest, setInterest] = useState<string>(`${report.interest}`);

    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: IReportModel) => {
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

            data.id = report.id;
            data.lead_id = report.lead_id;
            data.interest = report.interest;
            data.description = textAreaRef.current?.value;

            await api.post('/reports/update', data);

            history.push('/Dashboard');

            addToast({
                type: 'success',
                title: 'Alterações Salvas!',
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

    },[addToast, onRequestClose, report, history]);

    return (
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-report">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={IconCloneModal} alt="Fechal Cadastro de Lead"/>
            </button>
            <Section>
                <Container>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <section>

                            <h2>Registro de Atendimento</h2>
                            <Input defaultValue={report.name} primaryColor={'#032541'} secondColor={'#f0f2f5'} name="name" icon={FiUser} placeholder="Nome"/>
                            <Input defaultValue={report.email} primaryColor={'#032541'} secondColor={'#f0f2f5'} name="email" icon={FiMail}  placeholder="E-mail"/>
                            <Input defaultValue={report.phone} primaryColor={'#032541'} secondColor={'#f0f2f5'} mask="phone" name="phone" icon={FiPhone} placeholder="Telefone"/>

                            <p>{report.lead_description}</p>
                            <LeadTypeContainer>
                                { report.interest &&
                                <RadioBox
                                isActive={ (report.interest || interest) === 'CASA'}
                                type="button" onClick={() => {setInterest('CASA'); report.interest = 'CASA'}}>
                                    CASA
                                </RadioBox>
                                            }
                                { report.interest &&
                                <RadioBox
                                isActive={ (report.interest || interest) === 'LOTE'}
                                type="button" onClick={() => { setInterest('LOTE'); report.interest = 'LOTE'}}>
                                    LOTE
                                </RadioBox>
                                            }
                            </LeadTypeContainer>
                        </section>
                        <section>
                            <h2>Descrição</h2>
                            <textarea defaultValue={report.description} ref={textAreaRef} name="description" cols={30} rows={10}/>
                            <div className="buttons-modal-report">
                                <button type="button" onClick={onRequestClose} >CANCELAR</button>
                                <button type="submit">SALVAR</button>
                            </div>
                        </section>
                    </Form>
                </Container>

            </Section>
        </Modal>
    );
}
