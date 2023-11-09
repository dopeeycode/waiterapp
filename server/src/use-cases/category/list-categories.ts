import { Document } from 'mongoose'
import { category } from '../../models/category'

interface ListCategoriesUseCaseRequest {
  name: string
  icon: string
}

interface ListCategoriesUseCaseResponse
  extends Document,
    ListCategoriesUseCaseRequest {}

export class ListCategoriesUseCase {
  async handle(): Promise<ListCategoriesUseCaseResponse[]> {
    const categories = await category.find()

    return categories
  }
}
