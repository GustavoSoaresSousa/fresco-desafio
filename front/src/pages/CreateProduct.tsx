import React, { useEffect } from "react";
import { Header } from "../components/Header";
import {CreateProductForm} from '../components/CreateProduct'
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export function CreateProduct(){
  const navigate = useNavigate();
  useEffect(() => {
    const tokenOfLocalStorage = localStorage.getItem('token');
    if (!tokenOfLocalStorage) return navigate('/');

    if (tokenOfLocalStorage) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(tokenOfLocalStorage)}`
    }
    
  }, [])
  return (
    <>
      <Header />
      <CreateProductForm />
    </>
  )
}