import React, { ChangeEvent, FormEvent, useState } from "react";
import api from "../../services/api";
import { FormContainer } from "../../styles/FormStyles";
import { Box, Button, Grid, TextField } from '@mui/material';

type ProductType = {
  name: string;
  inventory: string;
  price: number;
  amount: number;
}

const ProductValuesInitials = {
  name: '',
  inventory: '',
  price: 0,
  amount: 0,
}


export function CreateProductForm(){
  const [product, setProduct] = useState<ProductType>(ProductValuesInitials);
  function changeInput(e: ChangeEvent<HTMLInputElement>){
    const {value, name} = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  async function onSubmit(e: FormEvent){
    e.preventDefault();

    const response = await api.post('/produto/',{
      nome: product.name,
      estoque: product.inventory,
      preco: product.price,
      quantidade: product.amount,
    })

    setProduct({
      name: "",
      inventory:"",
      price: 0, 
      amount: 0
    })
  }

  return(
    <FormContainer>
      <h2>Criar Produto</h2>
        <Box onSubmit={onSubmit} component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Nome"
                    autoFocus
                    name="name"
                    value={product.name}
                    onChange={changeInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Qual estoque este produto pertence"
                    name="inventory"
                    value={product.inventory}
                    onChange={changeInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Preço"
                    name="price"
                    value={product.price}
                    onChange={changeInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Quantidade"
                    name="amount"
                    value={product.amount}
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
                Criar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                </Grid>
              </Grid>
            </Box>
    </FormContainer>
  )
}