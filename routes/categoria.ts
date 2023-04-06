import { Router } from 'express';
import { getCategoriaTodo,getCategoria,postCategoria,putCategoria,deleteCategoria,getCategoriaPorId } from '../controllers/categoria';

const categoriaRouter = Router();

categoriaRouter.get('/', getCategoriaTodo);
categoriaRouter.get('/:id', getCategoria);
categoriaRouter.post('/', postCategoria);
categoriaRouter.put('/:id', putCategoria);
categoriaRouter.delete('/:id', deleteCategoria);

categoriaRouter.get('/:id', getCategoriaPorId);

export default categoriaRouter;