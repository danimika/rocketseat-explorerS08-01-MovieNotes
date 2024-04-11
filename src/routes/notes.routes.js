import { Router } from "express"
import { MovieNotesController } from "../controllers/MovieNotesController.js"

const notesRoutes = Router()





const movieNotesController = new MovieNotesController()

notesRoutes.get('/', movieNotesController.index)
notesRoutes.get('/:id', movieNotesController.show)

notesRoutes.post('/:user_id', movieNotesController.create)
notesRoutes.put('/:id', movieNotesController.update)
notesRoutes.delete('/:id', movieNotesController.delete)

export { notesRoutes }