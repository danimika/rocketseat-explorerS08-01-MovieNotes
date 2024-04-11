import { Router } from "express";
import { usersRoutes } from "./user.routes.js";
import { notesRoutes } from "./notes.routes.js";
import { tagsRoutes } from "./tags.routes.js";

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/movie_notes', notesRoutes)
routes.use('/tags', tagsRoutes)

export { routes }