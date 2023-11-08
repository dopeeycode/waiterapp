import { category } from '../../models/category'

interface CreateCategoryUseCaseRequest {
  name: string
  icon: string
}

export class CreateCategoryUseCase {
  async handle({ name, icon }: CreateCategoryUseCaseRequest) {
    const categories = await category.create({
      name,
      icon,
    })

    return categories
  }
}
