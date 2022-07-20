import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ProductCartContainer } from "../../styles/ProductCartStyles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useInfoProduct } from "../../hooks/useInfoProduct";


type Produto = {
  _id: number;
  nome: string;
  estoque: string;
  preco: number;
  quantidade: number;
}

export function ProductCart(){
  const [products, setProducts] = useState<Produto[]>([]);
  const { setProduct } = useInfoProduct();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllProdutos() {
      const response = await api.get('/produto/')
      setProducts(response.data);
    }
    getAllProdutos()
  },[])

  async function deleteProduct(id: number){
    const response = await api.delete(`/produto/${id}`)
  }


  function editProduct(data: {_id: number, nome: string, estoque: string, preco: number, quantidade: number}){
    setProduct(data)
    if(!data) return
    navigate('/update')
  }

  return(
    <ProductCartContainer>
      {
        products.map((data: Produto) => {
          return <tr key={data._id}>
              <td>{data.nome}</td>
              <td>{data.estoque}</td>
              <td>{data.preco}</td>
              <td>{data.quantidade}</td>
            <td>
                <a onClick= {() => deleteProduct(data._id)}>
                  <i><DeleteIcon/></i>
                </a>

                <a onClick={() => editProduct(data)}>
                  <i><EditIcon /></i>
                </a>
            </td>
          </tr>
        })
      }
  </ProductCartContainer>
  )
}