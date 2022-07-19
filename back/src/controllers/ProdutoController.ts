import { Request, Response } from 'express';
import { CreateProductModel } from '../models/produtoModel';

type Produto = {
  _id: string;
  nome: string;
  estoque: string;
  preco: number;
  quantidade: number;
};

class ProdutoController{
  async store(req: Request, res: Response){
    const body = req.body;

    if (!body.nome) {
      return res.status(400).json({ error: `Você deve enviar um nome` });
    }

    if (!body.estoque) {
      return res.status(400).json({ error: `Você deve enviar uma descricao`});
    }

    if (!body.preco) {
      return res.status(400).json({ error: `Você deve enviar um preço` });
    }
    
    const novoProduto = await CreateProductModel.create(body)

    return res.status(200).json({msg: 'Produto criado', produto: novoProduto})
  }

  async index(req: Request, res: Response){
    const produtos = await CreateProductModel.find();

    if (!produtos) return res.status(404).json('Não há produtos no estoque');

    return res.status(200).json(produtos);
  } 

  async showEstoque(req: Request, res: Response){
    try{
      const { descricao } = req.body;
      const produtos = await CreateProductModel.find({descricao: descricao});

      return res.status(200).json(produtos)
    }catch(e){
      console.log(e)
    } 
  }

  async update(req: Request, res: Response){
    const params = req.params;
    const body = req.body;

    if(!params.id) return res.status(400).json('Você deve colocar o id')

    const produtoAtualizado = await CreateProductModel.findByIdAndUpdate({ _id: params.id }, body)

    if(!produtoAtualizado) return res.status(404).json('Id não encontrado')

    return res.status(200).json({msg: 'Produto atualizado',produto: produtoAtualizado});
  }

  async delete(req: Request, res: Response){
    const params = req.params;

    if(!params.id) return res.status(400).json('Você deve colocar o id')

    const produtoDeletado = await CreateProductModel.findByIdAndRemove({ _id: params.id })

    if(!produtoDeletado) return res.status(404).json('Id não encontrado')

    return res.status(200).json({msg: 'Produto deletado', produto: produtoDeletado})
  }
}

export const produtoController = new ProdutoController();