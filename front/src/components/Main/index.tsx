import React from "react";

import { TableInfo } from '../Table';
import { ProductCart } from '../ProductCart'
import { MainContainer } from "../../styles/MainStyles";


export function Main(){
  return(
    <MainContainer>
      <TableInfo />
      <ProductCart />
    </MainContainer>
  )
}
  
