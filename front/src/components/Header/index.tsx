import React from "react";
import { HeaderStyles } from '../../styles/HeaderStyles'
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export function Header(){
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/')
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = '';
  }
  return(
    <HeaderStyles>
      <h3></h3>
      <ul>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/create">Criar Produto</Link></li>
        <li><a onClick={handleLogOut}>Sair</a></li>
      </ul>
    </HeaderStyles>
  )
}