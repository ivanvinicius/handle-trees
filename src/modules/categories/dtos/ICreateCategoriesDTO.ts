interface ICreateCategoriesDTO {
  category: string;
  subcategories: Array<{ name: string }>;
}

export { ICreateCategoriesDTO };
