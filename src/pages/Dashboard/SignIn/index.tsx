import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../../hooks/auth';
import { useToast } from '../../../hooks/toast';

import logoImg from '../../../assets/logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';
import socketIOClient from "socket.io-client";

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const history = useHistory();

    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try {
            setLoading(true);
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await signIn({
                email: data.email,
                password: data.password,
            });

            // const ENDPOINT = "http://localhost:3333";
            const ENDPOINT = "https://nodedeploy.lctorres.com.br";
            const socket = socketIOClient(ENDPOINT, {transports: ['websocket']});
            socket.on("message", (name: string)  => {
                addToast({
                    type: 'success',
                    title: 'Cadastro Realizado!',
                    description: `${name.split(' ',1)} acabou de se cadastrar.`,
                });
            });

            history.push('/Dashboard');

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
            });
        } finally {
            setLoading(false);
        }
    }, [signIn, addToast, history]);

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="LCTorres" />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input primaryColor={'#E83029'} secondColor={'#232129'} name="email" icon={FiMail} placeholder="E-mail" />
                        <Input primaryColor={'#E83029'} secondColor={'#232129'}
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />

                        <Button loading={loading} type="submit">Entrar</Button>

                        <Link to="/ForgotPassword">
                            <FiLogIn />
                            Esqueci minha senha
                        </Link>
                    </Form>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
