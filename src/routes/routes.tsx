import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../pages/Home";
import BottomNav from "../components/BottomNav";

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <>
      {/* Componente de Tabs com navegação */}
      {/* Define as rotas para cada aba */}
      <Route path="/home" exact>
        <div>profile</div>
      </Route>
      <Route path="/agendamento" exact>
        <div>agendamento</div>
      </Route>
      <Route path="/indicacoes" exact>
        <div>indicacoes</div>
      </Route>
      <Route path="/perfil" exact>
        <Home />
      </Route>
      {/* Redirecionamento padrão */}
      <Redirect from="/" to="/home" />
    </>
  );
};

export default Routes;
