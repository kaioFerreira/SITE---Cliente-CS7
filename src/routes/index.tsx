import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import FaleConosco from '../pages/Fale-Conosco';
import QuemSomos from '../pages/Quem-Somos';
import Produtos from '../pages/Produto';
import Clientes from '../pages/Clientes';
import ProdutoAbada from '../pages/Produto/Abada';
import ProdutoAvental from '../pages/Produto/Avental';
import ProdutoBone from '../pages/Produto/Bone';
import ProdutoCamisas from '../pages/Produto/Camisas';
import ProdutoColetes from '../pages/Produto/Coletes';
import ProdutoConjunto from '../pages/Produto/Conjunto';
import ProdutoDolmas from '../pages/Produto/Dolmas';
import ProdutoUniformeEsportivo from '../pages/Produto/Uniforme';
import ProdutoJalecos from '../pages/Produto/Jalecos';

import { Dashboard } from '../pages/Dashboard';
import { Reports } from '../pages/Dashboard/Reports';
import { Leads } from '../pages/Dashboard/Leads';
import { PendingLeads } from '../pages/Dashboard/PendingLeads';
import ThanksPage from '../pages/Dashboard/ThanksPage';
import SignIn from '../pages/Dashboard/SignIn';
import SignUp from '../pages/Dashboard/SignUp';
import ForgotPassword from '../pages/Dashboard/ForgotPassword';
import ResetPassword from '../pages/Dashboard/ResetPassword';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Quem-Somos"component={QuemSomos}/>
        <Route path="/Produtos" exact component={Produtos}/>
        <Route path="/Produtos/Abadá"component={ProdutoAbada}/>
        <Route path="/Produtos/Aventais"component={ProdutoAvental}/>
        <Route path="/Produtos/Bonés"component={ProdutoBone}/>
        <Route path="/Produtos/Camisas" component={ProdutoCamisas}/>
        <Route path="/Produtos/Coletes" component={ProdutoColetes}/>
        <Route path="/Produtos/Conjuntos-Personalizados" component={ProdutoConjunto}/>
        <Route path="/Produtos/Dólmãs" component={ProdutoDolmas}/>
        <Route path="/Produtos/Uniformes-Esportivos" component={ProdutoUniformeEsportivo}/>
        <Route path="/Produtos/Jalecos" component={ProdutoJalecos}/>
        <Route path="/Clientes"component={Clientes}/>
        <Route path="/Fale-Conosco"component={FaleConosco}/>

        <Route path="/Obrigado" component={ThanksPage}/>
        <Route path="/SignIn" component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/ResetPassword" component={ResetPassword}/>
        <Route path="/Dashboard" component={Dashboard} isPrivate/>
        <Route path="/Reports" component={Reports} isPrivate/>
        <Route path="/Leads" component={Leads} isPrivate/>
        <Route path="/PendingLeads" component={PendingLeads} isPrivate/>
    </Switch>
);

export default Routes;
