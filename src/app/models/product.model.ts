export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: Rating;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  category: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {

}
