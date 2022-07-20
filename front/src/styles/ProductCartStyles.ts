import styled from "styled-components";

export const ProductCartContainer = styled.tbody`
  min-height: 80vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  
  tr{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    td{
     margin-top: 16px;
    }
  }
`