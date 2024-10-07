
import User from "../models/userModel.js";
import jwtService from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      nome: req.body.nome,
      email: req.body.email,
      aniversario: req.body.aniversario,
      password: req.body.password,
      permissao: req.body.permissao,
      telefones: req.body.telefones,
      endereco: req.body.endereco,
      numero_casa: req.body.numero_casa,
    });

    res.status(201).json({message:"Usuário criado com sucesso!",user});

  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();

    if (user && (await user.senhaCorreta(req.body.password))) {
      const token = jwtService.generateAccessToken({
        tipo: user.tipo,
        email: user.email,
        _id: user._id,
      });

      res.json({message:"Usuário autenticado!",token: token});
    } else {

      res.status(404).json("Email ou senha inválidos");
    }

  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};
