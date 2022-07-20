import styled from "styled-components";


export const HeaderStyles = styled.header`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 20px 40px 20px 40px;
  z-index: 100;
  position: fixed;
  font-size: 1.2em;
  border-bottom: 1px solid #738EFA;
  ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    li {
      list-style-type: none;
      
      a{
        text-decoration: none;
        color: #fff;
        transition: 0.5s;
      }
      a:hover{
      cursor: pointer;
      color: #738EFA;
    }
    }
  }
`