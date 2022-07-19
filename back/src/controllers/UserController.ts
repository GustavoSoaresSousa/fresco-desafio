import { Request, Response } from "express";
import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CreateUserModel } from "../models/userModel";

type User = {
  _id: string;
  nome: string;
  email: string;
  senha: string;
};

class UserController{
  async store(req: Request, res: Response){
    const body = req.body;

    if(!body.nome) return res.status(400).json('Usuário precisa de um nome');
    if(!body.email) return res.status(400).json('Usuário precisa de um e-mail');
    if(!body.senha) return res.status(400).json('Usuário precisa de uma senha');

    const hashedPassword = await hash(body.senha, 8);

    const usuario = await CreateUserModel.create({
      nome: body.nome,
      email: body.email,
      senha: hashedPassword
    });

    return res.status(200).json({msg: 'Usuário criado', usuario: usuario})
  }

  async index(req: Request, res: Response){
    const usuarios = await CreateUserModel.find();

    if(!usuarios) return res.status(404).json('Não há usuarios');


    return res.status(200).json(usuarios);

  }

  async login(req: Request, res: Response) {
    try {
      const { email, senhaVirtual } = req.body;
      const usuario = await CreateUserModel.findOne({ email: email}) as unknown as User;
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não existe.' })
      }

      if (usuario) {
        if (!senhaVirtual) return res.status(400).json({ error: "Precisa de uma senha" });
        if (!bcrypt.compareSync(senhaVirtual, usuario.senha)) {
          res.status(400).json({ error: 'Senha incorreta' });
          return;
        }
      }
      const secret = process.env.TOKEN_SECRET || '';
      const token = jwt.sign({id: usuario._id}, secret);
      const { _id, nome } = usuario;
      return res.status(200).json({msg: "Autenticado com successo", token, nome, _id});
    } catch (e) {
      return console.log(e);
    }
  }
}


export const userController = new UserController();