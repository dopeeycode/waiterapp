import { Request, Response } from 'express'
import { ListCategoriesUseCase } from '../../../use-cases/categories/list-categories'

export async function listCategoriesController(_: Request, reply: Response) {
  const listCategoriesUseCase = new ListCategoriesUseCase()
  const categories = await listCategoriesUseCase.handle()

  reply.json(categories)
}
