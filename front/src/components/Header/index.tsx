import React from "react";
import { HeaderStyles } from '../../styles/HeaderStyles'
import { Link } from "react-router-dom";

export function Header(){
  return(
    <HeaderStyles>
      <h3></h3>
      <ul>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/create">Criar Produto</Link></li>
        <li><Link to={""}>Sair</Link></li>
      </ul>
    </HeaderStyles>
  )
}