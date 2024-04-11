import { AppError } from "../utils/AppError.js"
import knex from '../database/knex/index.js'
import { hash, compare } from 'bcrypt'

export class UsersController {
  async index(req, res){
    const result = await knex.select('*').from('users')
    res.send(result)
  }

  show(req, res){

  }

  async create(req, res){
    const { name, email, password } = req.body

    if(!name) {
      throw new AppError("Nome é obrigatório!")
    }

    const checkIfUserExists = await knex.select('*').from('users').where({email})


    if (checkIfUserExists.length > 0) {
      throw new AppError("Esse e-mail já está em uso")
    }

    const hashedPassword = await hash(password, 8)    
    
    await knex('users').insert({ name, email, password: hashedPassword })
    res.status(201).json()
  }

  async update(req, res){
    const { name, email, password, old_password } = req.body
    const { id } = req.params

    const searchUser = await knex.select('*').from('users').where({id})

    if(searchUser.length === 0 ) {
      throw new AppError("Usuário não encontrado")
    }
    const user = searchUser[0]

    const userWithUpdatedEmail = await knex.select('*').from('users').where({email})
    
    if(userWithUpdatedEmail.length > 0  && userWithUpdatedEmail[0].id !== user.id) {
      throw new AppError("E-mail já em uso")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere")
      }

      user.password= await hash(password, 8)
    }

    await knex('users').where({id}).update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.fn.now()
    })

    res.json()
  }

  delete(req, res){

  }

}