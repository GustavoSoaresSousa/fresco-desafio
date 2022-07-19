import { json, OptionsJson } from "body-parser";
import { Request, Response } from "express";
import { CreateProductModel } from "../models/produtoModel";

type Produto = {
  _id: string;
  nome: string;
  estoque: string;
  preco: number;
  quantidade: number;
};

class EstoqueController{
  async showEstoque(req: Request, res: Response){
    try{
      const { estoque } = req.body;
      const estoques = await CreateProductModel.find({estoque: estoque});
      if(!estoques) return res.status(404).json({msg: 'Não existe esse estoque(s)'})
      return res.status(200).json(estoques)
    }catch(e){
      console.log(e)
    } 
  }

  async deleteEstoque(req: Request, res: Response){
    try{
      const {estoque} = req.body;
      const estoques = await CreateProductModel.find({estoque: estoque}) as unknown as Produto;

      if(!estoques) return res.status(404).json({msg: 'Não existe esse estoque(s)'});
      
     const estoquesDeletados = await CreateProductModel.findOneAndDelete({estoque: estoque})
     return res.status(200).json({msg: 'Estoques Apagados', estoquesDeletados})

    }catch(e){
      console.log(e)
    }
  }

  async updateEstoque(req: Request, res: Response){
    try{
      const body = req.body;
      const estoquesAtualizados = await CreateProductModel.findOneAndUpdate({estoque: body.estoque}, body);

      if(!estoquesAtualizados) return res.status(404).json({msg: 'Não existe esse estoque(s)'});

      return res.status(200).json({msg: 'Estoque(s) atualizados', estoquesAtualizados})
    }catch(e){
      console.log(e)
    }
  }
}

export const estoqueController = new EstoqueController();