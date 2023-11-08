import { category } from '../../models/category'

export class ListCategoriesUseCase {
  async handle() {
    const categories = await category.find()

    return categories
  }
}
