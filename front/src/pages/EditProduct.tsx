import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useInfoProduct } from '../hooks/useInfoProduct'
import { Box, Button, Grid, TextField } from "@mui/material";
import { Header } from "../components/Header";
import { FormContainer } from "../styles/FormStyles";

type ProductType = {
  name: string | undefined;
  inventory: string| undefined;
  price: number| undefined;
  amount: number| undefined;
}


export function EditProduct(){
  const { product } = useInfoProduct();

  useEffect(() => {
    const tokenOfLocalStorage = localStorage.getItem('token');
    if (!tokenOfLocalStorage) return navigate('/');

    if (tokenOfLocalStorage) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(tokenOfLocalStorage)}`
    }
    
  }, [])

  const ProductValuesInitials = {
    name: product?.nome,
    inventory: product?.estoque,
    price: product?.preco,
    amount: product?.quantidade,
  }


  const navigate = useNavigate();
  const [productUpdated, setProductUpdated] = useState<ProductType>(ProductValuesInitials);

  function changeInput(e: ChangeEvent<HTMLInputElement>){
    const {value, name} = e.target
    setProductUpdated({
      ...productUpdated,
      [name]: value
    })
  }

  async function editProductInfos(e: FormEvent) {
    e.preventDefault();
    const response = await api.put(`/produto/${product?._id}`, {
      nome: productUpdated.name,
      estoque: productUpdated.inventory,
      preco: productUpdated.price,
      quantidade: productUpdated.amount
  });
    setProductUpdated({
      name: "",
      inventory:"",
      price: 0, 
      amount: 0
    })
  navigate('/home') 
}
  return (
    <>
    <Header />
      <FormContainer>
      <h2>Atualizar produto</h2>

        <Box onSubmit={editProductInfos} component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Nome"
                      autoFocus
                      name="name"
                      value={productUpdated.name}
                      onChange={changeInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Qual estoque este produto pertence"
                      name="inventory"
                      value={productUpdated.inventory}
                      onChange={changeInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Preço"
                      name="price"
                      value={productUpdated.price}
                      onChange={changeInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Quantidade"
                      name="amount"
                      value={productUpdated.amount}
                      onChange={changeInput}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Atualizar
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                  </Grid>
                </Grid>
              </Box>

      </FormContainer>
    </>
    
  )
}