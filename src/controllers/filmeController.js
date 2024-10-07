
import Filme from "../models/filmeModel.js";

export const store = async (req, res) => {
  try {
    const content = await Filme.create(req.body);
    res.status(201).send({criado: content});
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Filme.find(req.query).exec();
    res.status(201).send(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Filme.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const showComplete = async (req, res) => {
  try {
    
    const content = await Filme.findById(req.params.id)
      .populate("animal_id")
      .populate("user_id")
      .exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const content = await Filme.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const content = await Filme.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};
