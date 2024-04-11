import { response } from "express";
import knex from "../database/knex/index.js";

export class MovieTagsController {
  async index(req, res){
    const { user_id } = req.params

    const tags = await knex('movie_tags').where({user_id})

    return res.json(tags)
  }
}