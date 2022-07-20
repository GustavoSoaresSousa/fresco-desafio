import React from "react";
import { Table } from '@mui/material';
import { BorderColorOutlined } from "@mui/icons-material";
import { borderBottom } from "@mui/system";

export function TableInfo(){
  return(
    <Table>
      <tr>
          <td>Nome</td>
          <td>Estoque</td>
          <td>Preço</td>
          <td>Quantidade</td>
      </tr>
    </Table>
  )
}