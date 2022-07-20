import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from '.././components/Header';
import { Main } from '../components/Main'
import api from "../services/api";

export function Home(){
  const navigate = useNavigate();
  useEffect(() => {
    const tokenOfLocalStorage = localStorage.getItem('token');
    if (!tokenOfLocalStorage) return navigate('/');

    if (tokenOfLocalStorage) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(tokenOfLocalStorage)}`
    }
    
  }, [])
  return(
    <>
    <Header />
    <Main />
    </>
  )
}