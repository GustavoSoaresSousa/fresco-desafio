import { produtoController } from "../controllers/ProdutoController";
import { estoqueController } from "../controllers/EstoqueController";
import { Router } from "express";
import { checkToken } from "../middleware/token"

const routesProduto = Router();

routesProduto.post('/', checkToken, produtoController.store)
routesProduto.get('/', checkToken, produtoController.index)
routesProduto.delete('/:id', checkToken, produtoController.delete)
routesProduto.put('/:id', checkToken, produtoController.update)

routesProduto.get('/show', estoqueController.showEstoque)
routesProduto.get('/delete', estoqueController.deleteEstoque)

export { routesProduto }