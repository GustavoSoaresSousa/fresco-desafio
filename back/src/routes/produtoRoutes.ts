import { produtoController } from "../controllers/ProdutoController";
import { estoqueController } from "../controllers/EstoqueController";
import { Router } from "express";

const routesProduto = Router();

routesProduto.post('/', produtoController.store)
routesProduto.get('/', produtoController.index)
routesProduto.delete('/:id', produtoController.delete)
routesProduto.put('/:id', produtoController.update)

routesProduto.get('/show', estoqueController.showEstoque)
routesProduto.get('/delete', estoqueController.deleteEstoque)

export { routesProduto }