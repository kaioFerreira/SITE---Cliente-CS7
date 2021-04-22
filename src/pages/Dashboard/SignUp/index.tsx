import React, { useCallback, useRef, useState } from 'react';
import {  FiMail, FiLock, FiUser, FiArrowLeft, FiPhone } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { api } from '../../../services/api';

import { useToast } from '../../../hooks/toast';

import logoImg from '../../../assets/logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    phone: string;
    occupation: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {
            setLoading(true);

            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'Senha com no minimo 06 caracteres'),
            });

            data.occupation = 'coretor';
            await schema.validate(data, {
                abortEarly: false,
            });
            await api.post('/users', data);

            addToast({
                type: 'success',
                title: 'Cadastro realizado!',
                description: 'Você já pode fazer o seu login.',
            })
            history.push('/SignIn');
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer cadastro, cheque as credenciais.',
            });
        } finally {
            setLoading(false);
        }
    }, [addToast, history]);

    return (
        <Container>
            <Background />
            <Content>

                <AnimationContainer>
                    <img src={logoImg} alt="AMUniformes" />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro</h1>

                        <Input primaryColor={'#E83029'} secondColor={'#232129'} name="name" icon={FiUser} placeholder="Nome" />
                        <Input primaryColor={'#E83029'} secondColor={'#232129'} name="email" icon={FiMail} placeholder="E-mail" />
                        <Input primaryColor={'#E83029'} secondColor={'#232129'} mask="phone" name="phone" icon={FiPhone} type="phone" placeholder="Telefone" />
                        <Input primaryColor={'#E83029'} secondColor={'#232129'}
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />

                        <Button loading={loading} type="submit">Cadastrar</Button>

                        <Link to="/SignIn">
                            <FiArrowLeft />
                            Voltar para login
                        </Link>
                    </Form>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;
