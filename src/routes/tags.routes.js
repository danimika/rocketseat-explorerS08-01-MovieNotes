import { Router } from "express"
import { MovieTagsController } from "../controllers/MovieTagsController.js"

const tagsRoutes = Router()





const movieTagsController = new MovieTagsController()

tagsRoutes.get('/:user_id', movieTagsController.index)

export { tagsRoutes }