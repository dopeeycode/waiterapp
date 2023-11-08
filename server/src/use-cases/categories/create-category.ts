import { Document } from 'mongoose'
import { category } from '../../models/category'

interface CreateCategoryUseCaseRequest {
  name: string
  icon: string
}
interface CreateCategoryUseCaseResponse
  extends Document,
    CreateCategoryUseCaseRequest {}

export class CreateCategoryUseCase {
  async handle({
    name,
    icon,
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const categories = await category.create({
      name,
      icon,
    })

    return categories
  }
}
