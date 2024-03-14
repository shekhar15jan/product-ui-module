import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductResponse } from '../services/api/dto/product-response';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input()
index: number = -1;
@Output()
deleteEvent: EventEmitter<number> = new EventEmitter();
deleteProduct(index: number) {
  this.deleteEvent.emit(index);
}
@Input()
product: ProductResponse = {};
}
