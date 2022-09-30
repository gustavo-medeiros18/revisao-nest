import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, description, price);

    this.products.push(newProduct);

    const returnMessage = `Product with id ${id} created`;
    return returnMessage;
  }

  listAllProducts(): Product[] {
    return this.products;
  }

  listOneProduct(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);

    return product;
  }
}
