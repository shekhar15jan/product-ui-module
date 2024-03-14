import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/product.service';
import { ProductResponse } from '../services/api/dto/product-response';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

deleteProduct(index: number) {
  const product: ProductResponse = this.products[index];
  this.products.splice(index, 1);
  this.productService.deletePrduct(product.id).subscribe({
    next: (data): void => {
      console.log(`product ${data.title} deleted`);
    }
  });

}
constructor(private productService: ProductService){}
products: ProductResponse[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data): void => {
        this.products = data;
        console.log(data);
      }
    })
  }

}
