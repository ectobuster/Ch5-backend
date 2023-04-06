import { Request, Response } from 'express';
import categoria from '../models/categoria';

export const getCategoriaTodo = async (req: Request, res: Response) => {

  const users = await categoria.findAll();

  res.json({
      msg: 'getcategoria',
      users
  })
}

export const getCategoria = async (req: Request, res: Response) => {

  const { id } = req.params;

  const users = await categoria.findByPk(id);

  if(users){
    res.json({
      msg: 'getCategoria',
      users
    })
  }else{
    res.status(404).json({
      msg: 'el Categoria red  no existe',
    })
  }
}

export const postCategoria = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post Categoria',
      body
  })
}

export const putCategoria = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put Categoria',
      body,
      id
  })
}

export const deleteCategoria = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete Categoria',
      id
  })
}

export const getCategoriaPorId = async (req: Request, res: Response) => {

  const { id } = req.params;

  const categoriaEncontrada = await categoria.findByPk(id);

  if(categoriaEncontrada){
    res.json({
      msg: 'getCategoriaPorId',
      id,
      categoria: categoriaEncontrada
    })
  }else{
    res.status(404).json({
      msg: 'La categoría no existe',
    })
  }
}