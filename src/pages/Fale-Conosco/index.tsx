import React, { useCallback, useRef, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

import getValidationErrors from '../../utils/getValidationErrors';

import iconWhatsapp from '../../assets/icon-whatsapp.png';

import { Form } from '@unform/web';
import { useToast } from '../../hooks/toast';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import {
    Orcamento,
    Contato
} from './styles';

import { FormHandles } from '@unform/core';
import { api } from '../../services/api';
import Input from '../../components/Input';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';
interface LandingPageFormData {
    company: string;
    name: string;
    email?: string;
    phone: string;
    description: string;
    interest: string;
    origin: string;
}


const FaleConosco: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const { addToast } = useToast();
    const [description, setDescription] = useState('');
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
        setDescription( `${e.currentTarget.value}`);
    },[]);

    const handleSubmit = useCallback(async (data: LandingPageFormData) => {
        try {
            console.log(data)
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                phone: Yup.string().required('Telefone é obrigatório').min(9,'Coloque o seu número com DDD'),
            });
            console.log('eu')
            console.log(formRef.current?.getFieldValue);
            await schema.validate(data, {
                abortEarly: false,
            });

            data.interest = 'UNIFORMES';
            data.origin = 'Landing Page';
            data.description = description;

            if (data.email === '') {
                await api.post('/leads', {
                    company: data.company,
                    name: data.name,
                    phone: data.phone,
                    description: data.description,
                    interest: data.interest,
                    origin: data.origin,
                });
            } else {
                await api.post('/leads', data);
            }
            console.log('999999999999999')

            addToast({
                type: 'success',
                title: 'Cadastro Realizado!',
                description: 'Aguarde o nosso contato.',
            });

            history.push('/Obrigado');
            await api.post('/msg', {name: data.name});
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }
            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer o seu cadastro, verifique os dados ou entre em contato atravez das nossas redes sociais.',
            });
        }
    }, [addToast, history, description]);


    return (
        <>
            <Header/>

            <PageTitle>FAÇA UM ORÇAMENTO</PageTitle>
            <Orcamento>
                <section>
                    <Form  ref={formRef} onSubmit={handleSubmit}>
                        <p>
                            Você pode pedir um orçamento na CS7 de forma fácil
                             e rápida preenchendo o formulário abaixo. <br/><br/>
                             Depois de enviar as informações, nós entraremos em contato o mais breve possível!
                        </p>
                        <Input primaryColor={'#004aad'} secondColor={'#FFF'} icon={FiHome}  name="name" placeholder="Nome da empresa"/>
                        <Input primaryColor={'#004aad'} secondColor={'#FFF'} icon={FiUser} name="company" placeholder="Nome do responsável pela cotação"/>
                        <Input primaryColor={'#004aad'} secondColor={'#FFF'} icon={FiPhone} mask="phone" name="phone" placeholder="Telefone"/>
                        <Input primaryColor={'#004aad'} secondColor={'#FFF'} icon={FiMail} type="email" name="email" placeholder="Seu melhor e-mail"/>
                        <textarea ref={inputRef} onKeyUp={handleKeyUp} name="description" placeholder="Descreva seu orçamento: Modelo, quantidade, cor etc..."/>

                        <button type="submit">ENVIAR</button>
                    </Form>
                    <Contato>
                        <h1>TELEFONES</h1>
                        <div>
                            <img src={iconWhatsapp} alt="Whatsapp"/>
                            <h1>(62) 9 8204-4749</h1>
                        </div>
                    </Contato>
                </section>
            </Orcamento>

            <Footer/>
        </>
    );
};

export default FaleConosco;
