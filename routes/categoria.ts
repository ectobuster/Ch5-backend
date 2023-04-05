import { Router } from 'express';
import { getCategoriaTodo,getCategoria,postCategoria,putCategoria,deleteCategoria } from '../controllers/categoria';

const categoriaRouter = Router();

categoriaRouter.get('/', getCategoriaTodo);
categoriaRouter.get('/:id', getCategoria);
categoriaRouter.post('/', postCategoria);
categoriaRouter.put('/:id', putCategoria);
categoriaRouter.delete('/:id', deleteCategoria);

export default categoriaRouter;