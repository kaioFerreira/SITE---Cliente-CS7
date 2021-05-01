import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageTitle from '../../../components/PageTitle';
import { Helmet } from "react-helmet";

import {
    Orcamento
} from './styles';

import { FiCheckCircle } from 'react-icons/fi';


const FaleConosco: React.FC = () => {
    return (
        <>
            <Header/>
            <Helmet>
                <script type="text/javascript">
                gtag('event', 'conversion', ['send_to': 'AW-376107740/9AIcCNeYs40CENzlq7MB']);
                </script>
            </Helmet>
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
