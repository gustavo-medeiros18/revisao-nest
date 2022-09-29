import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const id = new Date().toString();
    const newProduct = new Product(id, title, description, price);

    this.products.push(newProduct);

    const returnMessage = `Product with id ${id} created`;
    return returnMessage;
  }
}
