import { createContext, ReactNode, useState, useEffect } from "react";

//export const InfoContext = createContext({} as ProdutoType);
export const InfoContext = createContext({} as ProdutoType);

type InfoContextType = {
  _id: number;
  nome: string;
  estoque: string;
  preco: number;
  quantidade: number;
}

type ProdutoType = {
  product: InfoContextType | undefined;
  setProduct: (data: InfoContextType) => void
}

type InfoContextProviderProps = {
  children: ReactNode;
}

export function InfoContextProvider(props: InfoContextProviderProps) {
  const [product, setProduct] = useState<InfoContextType>()

  return (
    <InfoContext.Provider value={{ product, setProduct }}>
        {props.children}
    </InfoContext.Provider>
);
}