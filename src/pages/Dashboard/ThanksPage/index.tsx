import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';

import {
    Orcamento
} from './styles';

import { FiCheckCircle } from 'react-icons/fi';


const FaleConosco: React.FC = () => {
    return (
        <>
            <Header/>

            <PageTitle>ORÇAMENTO ENVIADO</PageTitle>
            <Orcamento>
                <section>
                    <FiCheckCircle color={'#43A445'} size={120}/>
                    <span>Entraremos em contato o mais breve possivel</span>
                </section>
            </Orcamento>

            <Footer/>
        </>
    );
};

export default FaleConosco;
